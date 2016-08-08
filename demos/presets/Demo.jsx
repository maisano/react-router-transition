import React from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

import Lorem from './Lorem';
import RouteTransitionDemo from './RouteTransitionDemo';

import { presets } from '../../src/index';

const App = React.createClass({
  propTypes: {
    route: React.PropTypes.object
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
        {this.props.children}
      </div>
    );
  }
});


const FadeDemo = props => (
  <RouteTransitionDemo preset={presets.fade} {...props} />
);

const PopDemo = props => (
  <RouteTransitionDemo preset={presets.pop} {...props} />
);

const SlideLeftDemo = props => (
  <RouteTransitionDemo preset={presets.slideLeft} {...props} />
);

const SlideRightDemo = props => (
  <RouteTransitionDemo preset={presets.slideRight} {...props} />
);

const Demo = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="fade" component={FadeDemo}>
        <IndexRoute component={Lorem} />
        <Route path="demo-1" component={Lorem} />
        <Route path="demo-2" component={Lorem} />
        <Route path="demo-3" component={Lorem} />
      </Route>
      <Route path="pop" component={PopDemo}>
        <IndexRoute component={Lorem} />
        <Route path="demo-1" component={Lorem} />
        <Route path="demo-2" component={Lorem} />
        <Route path="demo-3" component={Lorem} />
      </Route>
      <Route path="slideLeft" component={SlideLeftDemo}>
        <IndexRoute component={Lorem} />
        <Route path="demo-1" component={Lorem} />
        <Route path="demo-2" component={Lorem} />
        <Route path="demo-3" component={Lorem} />
      </Route>
      <Route path="slideRight" component={SlideRightDemo}>
        <IndexRoute component={Lorem} />
        <Route path="demo-1" component={Lorem} />
        <Route path="demo-2" component={Lorem} />
        <Route path="demo-3" component={Lorem} />
      </Route>
    </Route>
  </Router>
);

export default Demo;
