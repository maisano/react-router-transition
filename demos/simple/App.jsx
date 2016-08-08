import React from 'react';
import { Link } from 'react-router';
import { RouteTransition } from '../../src/index';

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
        <Link to="/" key="home">Home</Link>
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

export default App;
