import React from 'react';
import { css } from 'glamor';

const rule = css`
  border-top: 1px solid #f1f1f1;
  margin-top: 2rem;
  padding-top: 2rem;
  color: #909090;
  font-size: 1rem;

  & a {
    color: #505050;
  }

  & a:hover {
    background-color: #eee;
  }
`;

const Footer = () => (
  <footer css={rule}>made with &lt;3 by <a href="https://github.com/maisano">@maisano</a> &amp; <a href="https://github.com/maisano/react-router-transition/graphs/contributors">co.</a></footer>
);

export default Footer;
