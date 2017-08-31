import React from 'react';
import { css } from 'glamor';

const rule = css`
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
`;

const Screen = ({ children }) => (
  <div css={rule}>
    {children}
  </div>
);

export default Screen;
