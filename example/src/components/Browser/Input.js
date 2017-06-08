import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LocationInput extends Component {
  static propTypes = {
    pathname: PropTypes.string.isRequired,
    push: PropTypes.func.isRequired,
  };

  state = {
    value: this.props.pathname,
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.pathname !== nextProps.pathname) {
      this.setState({
        value: nextProps.pathname,
      });
    }
  }

  selectText = () => {
    this.node.setSelectionRange(1, this.node.value.length);
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }

  handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      this.setState({
        value: this.props.pathname,
      }, this.selectText);
    }
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.push(e.target.value);
    }
  }

  handleBlur = () => {
    this.setState({
      value: this.props.pathname,
    });
  }

  render() {
    return (
      <input
        type="text"
        className="location"
        value={this.state.value}
        onChange={this.handleChange}
        onFocus={this.selectText}
        onBlur={this.handleBlur}
        onKeyDown={this.handleKeyDown}
        onKeyPress={this.handleKeyPress}
        ref={n => { this.node = n; }}
      />
    );
  }
}

export default LocationInput;
