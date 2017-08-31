import React from 'react';
import Route from 'react-router-dom/Route';
import { css } from 'glamor';

import AnimatedSwitch from '../../../../src/AnimatedSwitch';
import spring from '../../../../src/spring';

import Screen from '../Screen';

import GettingStartedPage from './GettingStarted';
import AnimatedSwitchPage from './AnimatedSwitch';
import AnimatedRoutePage from './AnimatedRoute';

const rule = css`
  padding-top: 5rem;
  box-sizing: border-box;
  background-color: #fff;
  color: #333;
`;

const switchRule = css`
  position: relative;
  height: calc("100vh - 50px");
  width: 100vw;
  background-color: #fff;

  & > div {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
`;

function mapStyles(styles) {
  return {
    transform: `translateX(${styles.offset}%)`,
  };
}

const pageTransitions = {
  atEnter: {
    offset: 100,
  },
  atLeave: {
    offset: spring(-100, {
      stiffness: 270,
      damping: 27,
    }),
  },
  atActive: {
    offset: spring(0, {
      stiffness: 270,
      damping: 27,
    }),
  },
};

export default () => (
  <Screen>
    <div css={rule}>
      <AnimatedSwitch
        {...pageTransitions}
        mapStyles={mapStyles}
        css={switchRule}
      >
        <Route path="/getting-started" component={GettingStartedPage} />
        <Route path="/animated-switch" component={AnimatedSwitchPage} />
        <Route path="/animated-route" component={AnimatedRoutePage} />
      </AnimatedSwitch>
    </div>
  </Screen>
);
