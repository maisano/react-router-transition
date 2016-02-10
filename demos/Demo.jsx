import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';

import Lorem from './Lorem';
import RouteTransitionDemo from './RouteTransitionDemo';

import { presets } from '../src/index';

const App = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },

  renderNavigation() {
    return (
      <nav>
        {this.props.route.childRoutes.map(({ path }) => {
          const isActive = this.context.router.isActive(path);
          return (
            <Link
              to={path}
              key={path}
              className={isActive ? 'active' : ''}
            >
              {path}
            </Link>
          );
        })}
      </nav>
    );
  },

  render() {
    return (
      <div>
        <h1>React Router Transition Presets Demo</h1>
        {this.renderNavigation()}
        {this.props.children}
      </div>
    );
  }
});


const FadeDemo = (props) => {
  return <RouteTransitionDemo preset={presets.fade} {...props} />;
};

const PopDemo = (props) => {
  return <RouteTransitionDemo preset={presets.pop} {...props} />;
};

const SlideLeftDemo = (props) => {
  return <RouteTransitionDemo preset={presets.slideLeft} {...props} />;
};

const SlideRightDemo = (props) => {
  return <RouteTransitionDemo preset={presets.slideRight} {...props} />;
};

const Demo = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="fade" component={FadeDemo}>
          <Route path="demo-1" component={Lorem} />
          <Route path="demo-2" component={Lorem} />
          <Route path="demo-3" component={Lorem} />
        </Route>
        <Route path="pop" component={PopDemo}>
          <Route path="demo-1" component={Lorem} />
          <Route path="demo-2" component={Lorem} />
          <Route path="demo-3" component={Lorem} />
        </Route>
        <Route path="slideLeft" component={SlideLeftDemo}>
          <Route path="demo-1" component={Lorem} />
          <Route path="demo-2" component={Lorem} />
          <Route path="demo-3" component={Lorem} />
        </Route>
        <Route path="slideRight" component={SlideRightDemo}>
          <Route path="demo-1" component={Lorem} />
          <Route path="demo-2" component={Lorem} />
          <Route path="demo-3" component={Lorem} />
        </Route>
      </Route>
    </Router>
  );
};

export default Demo;
