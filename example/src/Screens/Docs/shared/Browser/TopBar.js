import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';

import { useHistory, useLocation } from 'react-router-dom';

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

const TopBar = (props) => {
  const history = useHistory();
  const location = useLocation();

  return (
  <div css={topBarRule}>
    <button
      css={buttonRule}
      disabled={history.index === 0}
      onClick={history.goBack}
    >
      &larr;
    </button>
    <button
      css={buttonRule}
      disabled={history.index === history.length - 1}
      onClick={history.goForward}
    >
      &rarr;
    </button>
    <LocationInput
      pathname={location.pathname}
      push={history.push}
    />
  </div>
  )
};

export default TopBar;
