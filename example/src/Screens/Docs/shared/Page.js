import React from 'react';
import { css } from 'glamor';

const rule = css`
  padding: 5rem 3rem;

  @media(max-width: 600px) {
    padding: 2rem 3rem 3rem;
  }

  & > * {
    width: 730px;
    margin: 0 auto;
    max-width: 100%;
  }

  & pre[class*="language-"] {
    padding: 2rem;
    box-sizing: border-box;
  }

  & a {
    color: rgb(40, 100, 220);
  }

  & a:hover,
  & a:visited {
    color: rgb(30, 80, 180);
  }
`;

const Page = ({ children }) => (
  <div css={rule}>
    {children}
  </div>
);

export default Page;
