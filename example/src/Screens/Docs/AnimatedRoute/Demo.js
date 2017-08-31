import React from 'react';
import Link from 'react-router-dom/Link';
import { css } from 'glamor';

import AnimatedRoute from '../../../../../src/AnimatedRoute';

import Browser from 'Screens/Docs/shared/Browser';
import Footer from 'Screens/Docs/shared/Footer';

const bodyRule = css`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const wrapperRule = css`
  position: absolute;
  top: 0;
  bottom: 0;
`;

const routeRule = css`
  position: relative;
  height: 100%;
  width: 200px;

  & > div {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const sidebarRule = css`
  height: 100%;
  padding: 2rem;
  box-sizing: border-box;
  background-color: #fafafa;
`;

const sidebarTransition = {
  atEnter: {
    offset: -100,
  },
  atLeave: {
    offset: -100,
  },
  atActive: {
    offset: 0,
  },
};

function mapStyles(styles) {
  return {
    transform: `translateX(${styles.offset}%)`,
  };
}

const Sidebar = () => (
  <div css={sidebarRule}>
    <div>
      <p><strong>Hi, hello, I'm a sidebar.</strong></p>
      <p>I'm not entirely certain that this component is useful, but it's kinda fun.</p>
      <p><Link to="/">Close me.</Link></p>
    </div>
  </div>
);

const AnimatedRouteDemo = () => (
  <div>
    <h2>Demo</h2>
    <Browser>
      <div css={bodyRule}>
        <p><Link to="/sidebar">Open sidebar</Link></p>
      </div>
      <div css={wrapperRule}>
        <AnimatedRoute
          path="/sidebar"
          component={Sidebar}
          className={routeRule}
          mapStyles={mapStyles}
          {...sidebarTransition}
        />
      </div>
    </Browser>
    <Footer />
  </div>
);

export default AnimatedRouteDemo;
