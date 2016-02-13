import React, { PropTypes, cloneElement, createElement } from 'react';
import { TransitionMotion } from 'react-motion';

import ensureSpring from './ensureSpring';

const RouteTransition = React.createClass({
  propTypes: {
    className: PropTypes.string,
    component: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool
    ]),
    pathname: PropTypes.string.isRequired,
    atEnter: PropTypes.object.isRequired,
    atActive: PropTypes.object.isRequired,
    atLeave: PropTypes.object.isRequired,
    mapStyles: PropTypes.func,
    runOnMount: PropTypes.bool,
    style: PropTypes.object
  },

  getDefaultProps() {
    return {
      component: 'div',
      runOnMount: true,
      mapStyles: val => val
    };
  },

  getDefaultStyles() {
    if (!this.props.runOnMount) {
      return null;
    }

    if (!this.props.children) {
      return [];
    }

    return [{
      key: this.props.pathname,
      data: this.props.children,
      style: this.props.atEnter
    }];
  },

  // there's only ever one route mounted at a time,
  // so just return the current match
  getStyles() {
    if (!this.props.children) {
      return [];
    }

    // TODO: maybe access route path from children for pathname?
    return [{
      key: this.props.pathname,
      data: this.props.children,
      style: ensureSpring(this.props.atActive)
    }];
  },

  willEnter() {
    return this.props.atEnter;
  },

  willLeave() {
    return ensureSpring(this.props.atLeave);
  },

  renderRoute(config) {
    const props = {
      style: this.props.mapStyles(config.style),
      key: config.key
    };

    return this.props.component
      ? createElement(this.props.component, props, config.data)
      : cloneElement(config.data, props);
  },

  renderRoutes(interpolatedStyles) {
    return (
      <div className={this.props.className} style={this.props.style}>
        {interpolatedStyles.map(this.renderRoute)}
      </div>
    );
  },

  render() {
    return (
      <TransitionMotion
        defaultStyles={this.getDefaultStyles()}
        styles={this.getStyles()}
        willEnter={this.willEnter}
        willLeave={this.willLeave}
      >
        {this.renderRoutes}
      </TransitionMotion>
    );
  }
});

export default RouteTransition;
