import React from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import { RouteTransition } from '../../src/index';
import Ipsum from './Ipsum';

const App = React.createClass({
  propTypes: {
    route: React.PropTypes.object,
    location: React.PropTypes.object
  },

  contextTypes: {
    router: React.PropTypes.object
  },

  render() {
    return (
      <div>
        {this.props.route.childRoutes.map(({ path }) => {
          const isActive = this.context.router.isActive(path);
          return (
            <Link
              to={`/${path}`}
              key={path}
              className={isActive ? 'link active' : 'link'}
            >
              {path}
            </Link>
          );
        })}
        <RouteTransition
          component={false}
          pathname={this.props.location.pathname}
          className="transition-wrapper"
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
        >
          {this.props.children}
        </RouteTransition>
      </div>
    );
  }
});

const Demo = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Ipsum} />
      <Route path="demo-1" component={Ipsum} />
      <Route path="demo-2" component={Ipsum} />
      <Route path="demo-3" component={Ipsum} />
    </Route>
  </Router>
);

export default Demo;
