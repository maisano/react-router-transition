import React from 'react';
import Route from 'react-router-dom/Route';
import { css } from 'glamor';

import Page from './Page';
import PageNav from './PageNav';

import AnimatedSwitch from '../../../../../src/AnimatedSwitch';
import spring from '../../../../../src/spring';

const switchRule = css`
  position: relative;

  & > div {
    position: absolute;
    width: 100%;
    padding-bottom: 3rem;
  }
`;

function zoom(val) {
  return spring(val, {
    stiffness: 240,
    damping: 18,
  });
}

const switchConfig = {
  atEnter: {
    opacity: 0,
    offset: -50,
  },
  atLeave: {
    opacity: 0,
    offset: zoom(50),
  },
  atActive: {
    opacity: 1,
    offset: zoom(0),
  },
};

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `translateY(${styles.offset}px)`,
  };
}

const ComponentPage = ({ sections, title }) => (
  <Page>
    <div>
      <h1>{title}</h1>
      <PageNav sections={sections} />
    </div>
    <AnimatedSwitch
      {...switchConfig}
      mapStyles={mapStyles}
      css={switchRule}
    >
      {sections.map(({ title, ...rest }) => (
        <Route key={title} {...rest} />
      ))}
    </AnimatedSwitch>
  </Page>
);

export default ComponentPage;
