import React from 'react';
import { Route, matchPath } from 'react-router-dom';

import RouteTransition from './RouteTransition';

/**
 * Here we only care about whether or not the pathname matches. If so,
 * we'll use the route's path as the key, otherwise we'll default it
 * to a string signifying no match.
 */
function getKey({ pathname }, path, exact) {
  return matchPath(pathname, { exact, path }) ? 'match' : 'no-match';
}

const AnimatedRoute = ({ component, path, exact, ...routeTransitionProps }) => (
  <Route
    render={({ location, match }) => (
      <RouteTransition {...routeTransitionProps}>
        <Route
          key={getKey(location, path, exact)}
          path={path}
          exact={exact}
          location={location}
          component={component}
        />
      </RouteTransition>
    )}
  />
);

export default AnimatedRoute;
