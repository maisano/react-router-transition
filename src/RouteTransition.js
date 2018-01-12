import React, { cloneElement, createElement, Component } from 'react';
import TransitionMotion from 'react-motion/lib/TransitionMotion';
import PropTypes from 'prop-types';

import ensureSpring from './ensureSpring';

const identity = val => val;

class RouteTransition extends Component {
  static defaultProps = {
    wrapperComponent: 'div',
    runOnMount: false,
    mapStyles: identity,
  };

  static propTypes = {
    className: PropTypes.string,
    wrapperComponent: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.element,
      PropTypes.string,
    ]),
    atEnter: PropTypes.object.isRequired,
    atActive: PropTypes.object.isRequired,
    atLeave: PropTypes.object.isRequired,
    didLeave: PropTypes.func,
    mapStyles: PropTypes.func.isRequired,
    runOnMount: PropTypes.bool.isRequired,
  };

  getDefaultStyles() {
    if (!this.props.runOnMount) {
      return null;
    }

    if (!this.props.children) {
      return [];
    }

    return [
      {
        key: this.props.children.key,
        data: this.props.children,
        style: this.props.atEnter,
      },
    ];
  }

  // there's only ever one route mounted at a time,
  // so just return the current match
  getStyles() {
    if (!this.props.children) {
      return [];
    }

    return [
      {
        key: this.props.children.key,
        data: this.props.children,
        style: ensureSpring(this.props.atActive),
      },
    ];
  }

  willEnter = () => {
    return this.props.atEnter;
  };

  willLeave = () => {
    return ensureSpring(this.props.atLeave);
  };

  didLeave = (styleThatLeft) => {
    if (this.props.didLeave) {
      this.props.didLeave(styleThatLeft);
    }
  }

  renderRoute = config => {
    const props = {
      style: this.props.mapStyles(config.style),
      key: config.key,
    };

    return this.props.wrapperComponent !== false
      ? createElement(this.props.wrapperComponent, props, config.data)
      : cloneElement(config.data, props);
  };

  renderRoutes = interpolatedStyles => {
    return (
      <div className={this.props.className}>
        {interpolatedStyles.map(this.renderRoute)}
      </div>
    );
  };

  render() {
    return (
      <TransitionMotion
        defaultStyles={this.getDefaultStyles()}
        styles={this.getStyles()}
        willEnter={this.willEnter}
        willLeave={this.willLeave}
        didLeave={this.didLeave}
      >
        {this.renderRoutes}
      </TransitionMotion>
    );
  }
}

export default RouteTransition;
