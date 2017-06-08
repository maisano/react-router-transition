import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import matchPath from 'react-router-dom/matchPath';
import PropTypes from 'prop-types';

import RouteTransition from './RouteTransition';

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
  });
}

class AnimatedSwitch extends React.Component {
  static propTypes = {
    location: PropTypes.shape({
      key: PropTypes.string,
      pathname: PropTypes.string,
    }),
  };

  state = {
    key: this.props.location.key,
    match: getMatchedRoute(this.props.children, this.props.location.pathname),
  };

  componentWillReceiveProps(nextProps) {
    const nextMatch = getMatchedRoute(
      nextProps.children,
      nextProps.location.pathname,
    );

    // TODO: handle no matches
    if (this.state.match.key !== nextMatch.key) {
      this.setState({
        match: nextMatch,
        key: nextProps.location.key,
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
