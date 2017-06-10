import React from 'react';
import Route from 'react-router-dom/Route';
import matchPath from 'react-router-dom/matchPath';
import PropTypes from 'prop-types';

import RouteTransition from './RouteTransition';

/**
 * `RouteTransition` uses `pathname` as the key for transitioning
 * children. We only care whether the route matches or not.
 */
function getPathname({ pathname }, { exact, path }) {
  return matchPath(pathname, { exact, path }) ? path : 'no-match';
}

const AnimatedRoute = ({ atActive, atEnter, atLeave, ...routeProps }) => (
  <Route
    render={({ location }) => (
      <RouteTransition atActive={atActive} atEnter={atEnter} atLeave={atLeave}>
        <Route
          {...routeProps}
          location={location}
          key={getPathname(location, routeProps)}
        />
      </RouteTransition>
    )}
  />
);

AnimatedRoute.propTypes = {
  atActive: PropTypes.object.isRequired,
  atEnter: PropTypes.object.isRequired,
  atLeave: PropTypes.object.isRequired,
};

export default AnimatedRoute;
