import React from 'react';
import NavLink from 'react-router-dom/NavLink';
import Route from 'react-router-dom/Route';
import { css } from 'glamor';

import AnimatedSwitch from '../../../../../src/AnimatedSwitch';
import spring from '../../../../../src/spring';

import Browser from 'Screens/Docs/shared/Browser';
import Footer from 'Screens/Docs/shared/Footer';

const rule = css`
  position: relative;
  height: calc("100% - 40px");

  & > div {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const navRule = css`
  display: flex;
  height: 4rem;
  line-height: 4rem;
  justify-content: center;
  background-color: #fafafa;

  & a {
    flex-grow: 1;
    text-align: center;
    color: #303030;
  }

  & a:first-child {
    border-right: 1px solid #fff;
  }
`;

const activeRule = css`
  background-color: #f5f5f5;
`;

const demoPageRule = css`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 400px;
`;

function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

const demoConfig = {
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

const DemoPage = ({ children }) => (
  <div css={demoPageRule}>
    {children}
  </div>
);

const A = () => (
  <DemoPage>A</DemoPage>
);

const B = () => (
  <DemoPage>B</DemoPage>
);

const C = () => (
  <DemoPage>C</DemoPage>
);

const Demo = () => (
  <div>
    <h2>Demo</h2>
    <Browser defaultPathname="/a">
      <nav css={navRule}>
        <NavLink activeClassName={activeRule} to="/a">A</NavLink>
        <NavLink activeClassName={activeRule} to="/b">B</NavLink>
        <NavLink activeClassName={activeRule} to="/c">C</NavLink>
      </nav>
      <AnimatedSwitch
        {...demoConfig}
        mapStyles={mapStyles}
        css={rule}
      >
        <Route path="/a" component={A} />
        <Route path="/b" component={B} />
        <Route path="/c" component={C} />
      </AnimatedSwitch>
    </Browser>
    <Footer />
  </div>
);

export default Demo;
