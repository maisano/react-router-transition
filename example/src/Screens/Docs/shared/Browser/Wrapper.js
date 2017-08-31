import React from 'react';
import { css } from 'glamor';

const wrapperRule = css`
  max-width: 100%;
  border: 2px solid rgb(236, 236, 236);
  box-sizing: border-box;
  border-radius: 4px;
  margin: 0 auto 3rem;
  overflow: hidden;
`;

const Wrapper = ({ children }) => (
  <div css={wrapperRule}>
    {children}
  </div>
);

export default Wrapper;
