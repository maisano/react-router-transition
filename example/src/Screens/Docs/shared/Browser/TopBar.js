import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';

import LocationInput from './Input';

const topBarRule = css`
  display: flex;
  padding: 7px;
  border-bottom: 2px solid rgb(236, 236, 236);
  background-color: rgb(246, 246, 246);
`;

const buttonRule = css`
  border: none;
  background: none;
  padding: 3px 7px;
  font-size: 1.6rem;
  margin: 0 2px;
  border-radius: 3px;
  color: rgb(111, 111, 111);
  transition: background-color 150ms ease-in-out;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: rgb(231, 231, 231);
  }

  &[disabled] {
    color: rgb(219, 219, 219);
  }

  &[disabled]:hover {
    background-color: transparent;
  }
`;

const TopBar = (props, { router }) => (
  <div css={topBarRule}>
    <button
      css={buttonRule}
      disabled={router.history.index === 0}
      onClick={router.history.goBack}
    >
      &larr;
    </button>
    <button
      css={buttonRule}
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
