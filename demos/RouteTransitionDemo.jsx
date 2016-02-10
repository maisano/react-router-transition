import React from 'react';
import { Link } from 'react-router';

import { RouteTransition } from '../src/index';

const RouteTransitionDemo = (props) => {
  return (
    <div>
      {props.route.childRoutes.map((childRoute, index) => {
        const to = ['', props.route.path, childRoute.path].join('/');
        return (
          <Link className="child-route" key={to} to={to}>
            {props.route.path} {index}
          </Link>
        );
      })}
      <RouteTransition
        component={false}
        className="transition-wrapper"
        pathname={props.location.pathname}
        {...props.preset}
      >
        {props.children}
      </RouteTransition>
    </div>
  );
};

export default RouteTransitionDemo;
