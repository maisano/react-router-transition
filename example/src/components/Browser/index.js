import React, { Component } from 'react';
import Router from 'react-router-dom/MemoryRouter';

import BrowserWrapper from './Wrapper';
import BrowserTopBar from './TopBar';
import BrowserViewport from './Viewport';

class Browser extends Component {
  render() {
    return (
      <Router>
        <BrowserWrapper>
          <BrowserTopBar />
          <BrowserViewport>
            {this.props.children}
          </BrowserViewport>
        </BrowserWrapper>
      </Router>
    );
  }
}

export default Browser;
