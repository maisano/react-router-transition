import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LocationInput from './Input';

const TopBar = (props, { router }) => (
  <div className="browser__top-bar">
    <button
      className="navigation"
      disabled={router.history.index === 0}
      onClick={router.history.goBack}
    >
      &larr;
    </button>
    <button
      className="navigation"
      disabled={router.history.index === router.history.length - 1}
      onClick={router.history.goForward}
    >
      &rarr;
    </button>
    <LocationInput
      pathname={router.route.location.pathname}
      push={router.history.push}
    />
  </div>
);

TopBar.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.shape({
      index: PropTypes.number,
      length: PropTypes.number,
      goBack: PropTypes.func,
      goForward: PropTypes.func,
      push: PropTypes.func,
    }),
    route: PropTypes.shape({
      location: PropTypes.shape({
        pathname: PropTypes.string,
      }),
    }),
  }),
};

export default TopBar;
