import React from 'react';
import Link from 'react-router-dom/Link';
import { css } from 'glamor';

import Screen from './Screen';

const rule = css`
  padding: 0 5rem;
  width: 960px;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0 auto;

  @media(max-width: 600px) {
    padding: 0 3rem 3rem;
  }
`;

const titleRule = css`
  font-size: 1.8rem;
  font-weight: 300;
  margin-top: 10vh;
  color: #fff;

  @media(max-width: 600px) {
    margin-top: 6rem;
  }
`;

const bodyRule = css`
  margin-top: 50vh;

  & span {
    font-size: 3.8rem;
  }

  @media(max-width: 600px) {
    margin-top: 14rem;
  }

  @media(min-width: 800px) {
    & span {
      display: block;
    }
  }
`;

const buttonsRule = css`
  margin-top: 10vh;
`;

const buttonRule = css`
  display: inline-block;
  font-size: 1.6rem;
  padding: 1rem 2.5rem;
  margin: 0.5rem 1.2rem 0.5rem 0;
  background-color: #202020;
  border: 1px solid #eee;
  border-radius: 1px;
  color: #fff;

  &:visited {
    color: #fff;
  }

  &:hover {
    color: #202020;
    border-color: #202020;
    background-color: #fff;
  }
`;

const primaryButtonRule = css`
  color: #202020;
  border-color: #202020;
  background-color: #eee

  &:visited {
    color: #202020;
  }
`;

export default () => (
  <Screen>
    <div css={rule}>
      <h1 css={titleRule}>React Router Transition</h1>
      <div css={bodyRule}>
        <span>Painless transitions built for react-router, </span>
        <span>powered by react-motion</span>
      </div>
      <div css={buttonsRule}>
        <Link css={[buttonRule, primaryButtonRule]} to="/getting-started">
          Demos &amp; Docs
        </Link>
        <a
          css={buttonRule}
          href="https://github.com/maisano/react-router-transition"
        >
          GitHub
        </a>
      </div>
    </div>
  </Screen>
);
