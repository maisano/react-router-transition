import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import matchPath from 'react-router-dom/matchPath';

import RouteTransition from './RouteTransition';

/**
 * In order to support the nesting of `AnimatedSwitch` components,
 * we need to key each `RouteTransition` and its child `Switch` to
 * the path of the matched route. Similar to how `Switch` works,
 * we need to match against the child routes. Kind of a bummer, but
 * some necessary magic to have this work.
 */
function getMatchedRoutePath(children, pathname) {
  const match = React.Children.toArray(children).find(child => {
    return matchPath(pathname, {
      exact: child.props.exact,
      path: child.props.path,
    });
  });

  return match !== undefined ? match.props.path : 'no-match';
}

const AnimatedSwitch = ({ children, ...routeTransitionProps }) => (
  <Route
    render={({ location, match }) => {
      const key = getMatchedRoutePath(children, location.pathname);
      return (
        <RouteTransition pathname={key} {...routeTransitionProps}>
          <Switch key={key} location={location}>
            {children}
          </Switch>
        </RouteTransition>
      );
    }}
  />
);

export default AnimatedSwitch;
