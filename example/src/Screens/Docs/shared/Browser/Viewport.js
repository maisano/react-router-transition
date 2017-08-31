import React from 'react';
import { css } from 'glamor';

const viewportRule = css`
  overflow: hidden;
  height: 480px;
  position: relative;
`;

const viewportBodyRule = css`
  height: 100%;
  overflow: auto;
`;

const Viewport = ({ children }) => (
  <div css={viewportRule}>
    <div css={viewportBodyRule}>
      {children}
    </div>
  </div>
);

export default Viewport;
