import React from 'react';
import { Route, Switch, matchPath } from 'react-router-dom';
import PropTypes from 'prop-types';

import RouteTransition from './RouteTransition';

const NO_MATCH = {
  key: 'no-match',
};

/**
 * Not every location object has a `key` property (e.g. HashHistory).
 */
function getLocationKey(location) {
  return typeof location.key === 'string' ? location.key : '';
}

/**
 * Some superfluous work, but something we need to do in order
 * to persist matches/allow for nesting/etc.
 */
function getMatchedRoute(children, pathname) {
  return React.Children.toArray(children).find(child => {
    return matchPath(pathname, {
      exact: child.props.exact,
      path: child.props.path,
    });
  }) || NO_MATCH;
}

class AnimatedSwitch extends React.Component {
  static propTypes = {
    location: PropTypes.shape({
      key: PropTypes.string,
      pathname: PropTypes.string,
    }),
  };

  state = {
    key: getLocationKey(this.props.location),
    match: getMatchedRoute(this.props.children, this.props.location.pathname),
  };

  matches = 0;

  componentWillReceiveProps(nextProps) {
    const nextMatch = getMatchedRoute(
      nextProps.children,
      nextProps.location.pathname,
    );

    if (this.state.match.key !== nextMatch.key) {
      this.setState({
        match: nextMatch,
        key: getLocationKey(nextProps.location) + ++this.matches,
      });
    }
  }

  render() {
    const { children, location, match, ...routeTransitionProps } = this.props;

    return (
      <RouteTransition {...routeTransitionProps}>
        <Switch key={this.state.key} location={location}>
          {children}
        </Switch>
      </RouteTransition>
    );
  }
}

// inject location as a prop so we can listen for changes
const RouteWrapper = props => (
  <Route
    children={({ location }) => (
      <AnimatedSwitch location={location} {...props} />
    )}
  />
);

export default RouteWrapper;
