import React, { Component } from 'react';
import Router from 'react-router-dom/MemoryRouter';

import BrowserWrapper from './Wrapper';
import BrowserTopBar from './TopBar';
import BrowserViewport from './Viewport';

const Browser = ({ children, defaultPathname }) => (
  <Router initialEntries={[defaultPathname]}>
    <BrowserWrapper>
      <BrowserTopBar />
      <BrowserViewport>
        {children}
      </BrowserViewport>
    </BrowserWrapper>
  </Router>
);

Browser.defaultProps = {
  defaultPathname: '/',
};

export default Browser;
