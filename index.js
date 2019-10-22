import React, {
  cloneElement,
  createElement,
  useEffect,
  useRef,
  useState,
} from 'react';

import PropTypes from 'prop-types';

import { Route, Switch, matchPath, useLocation } from 'react-router-dom';

import TransitionMotion from 'react-motion/lib/TransitionMotion';
import spring from 'react-motion/lib/spring';

// Helpers

function ensureSpring(styles) {
  const obj = {};

  for (var key in styles) {
    const value = styles[key];
    if (typeof value === 'number') {
      obj[key] = spring(value);
    } else {
      obj[key] = value;
    }
  }

  return obj;
}

function identity(v) {
  return v;
}

function noop() {}

// Components

function RouteTransition({
  children,
  className,
  atEnter,
  atActive,
  atLeave,
  wrapperComponent = 'div',
  didLeave = noop,
  mapStyles = identity,
  runOnMount = false,
}) {
  const defaultStyles =
    runOnMount === false
      ? null
      : children == undefined
      ? []
      : [
          {
            key: children.key,
            data: children,
            style: atEnter,
          },
        ];

  const styles =
    children == undefined
      ? []
      : [
          {
            key: children.key,
            data: children,
            style: ensureSpring(atActive),
          },
        ];

  return (
    <TransitionMotion
      defaultStyles={defaultStyles}
      styles={styles}
      willEnter={() => atEnter}
      willLeave={() => ensureSpring(atLeave)}
      didLeave={didLeave}
    >
      {(interpolatedStyles) => (
        <div className={className}>
          {interpolatedStyles.map((config) => {
            const props = {
              style: mapStyles(config.style),
              key: config.key,
            };

            return wrapperComponent !== false
              ? createElement(wrapperComponent, props, config.data)
              : cloneElement(config.data, props);
          })}
        </div>
      )}
    </TransitionMotion>
  );
}

RouteTransition.propTypes = {
  className: PropTypes.string,
  wrapperComponent: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.element,
    PropTypes.string,
    PropTypes.func,
  ]),
  atEnter: PropTypes.object.isRequired,
  atActive: PropTypes.object.isRequired,
  atLeave: PropTypes.object.isRequired,
  didLeave: PropTypes.func,
  mapStyles: PropTypes.func,
  runOnMount: PropTypes.bool,
};

// AnimatedRoute

// The key-getter for RouteTransition. It's either on or off.
function getKey({ pathname }, path, exact) {
  return matchPath(pathname, { exact, path }) ? 'match' : 'no-match';
}

function AnimatedRoute({
  render,
  component,
  path,
  exact,
  ...routeTransitionProps
}) {
  const location = useLocation();

  return (
    <RouteTransition {...routeTransitionProps}>
      <Route
        key={getKey(location, path, exact)}
        path={path}
        exact={exact}
        location={location}
        component={component}
        render={render}
      />
    </RouteTransition>
  );
}

// AnimatedSwitch

const NO_MATCH = {
  key: 'no-match',
};

// Not every location object has a `key` property (e.g. HashHistory).
function getLocationKey(location) {
  return typeof location.key === 'string' ? location.key : '';
}

// Some superfluous work, but something we need to do in order
// to persist matches/allow for nesting/etc.
function getMatchedRoute(children, { pathname }) {
  const childrenArray = React.Children.toArray(children);

  for (let i = 0; i < childrenArray.length; i++) {
    const child = childrenArray[i];
    const matches = matchPath(pathname, {
      exact: child.props.exact,
      path: child.props.path,
    });

    if (matches) {
      return child;
    }
  }

  return NO_MATCH;
}

let counter = 0;

function AnimatedSwitch({ children, ...routeTransitionProps }) {
  const location = useLocation();
  const match = useRef(null);
  const key = useRef(null);

  const nextMatch = getMatchedRoute(children, location);

  if (match.current === null) {
    // Persist a reference to the most recent match
    match.current = nextMatch;
    key.current = getLocationKey(location);

  } else if (match.current.key !== nextMatch.key) {
    // Update the key given to Switch anytime the matched route changes
    match.current = nextMatch;
    key.current = getLocationKey(location) + ++counter;
  }

  return (
    <RouteTransition {...routeTransitionProps}>
      <Switch key={key.current} location={location}>
        {children}
      </Switch>
    </RouteTransition>
  );
}

export { ensureSpring, spring, RouteTransition, AnimatedRoute, AnimatedSwitch };
