import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';
import { css } from 'glamor';

import NavBar from './NavBar';

import LandingScreen from 'Screens/Home';
import DocumentationScreen from 'Screens/Docs';

import AnimatedSwitch from '../../src/AnimatedSwitch';
import AnimatedRoute from '../../src/AnimatedRoute';
import spring from '../../src/spring';

import './globals.css';
import './grayscale-prism-theme.css';

// silly workaround for gh-pages
const basename = process.env.NODE_ENV === 'production'
  ? '/react-router-transition'
  : null;

const switchRule = css`
  position: relative;

  & > div {
    position: absolute;
  }
`;

const routeRule = css`
  position: relative;

  & > div {
    position: absolute;
    width: 100%;
  }
`;

function glide(val) {
  return spring(val, {
    stiffness: 174,
    damping: 24,
  });
}

function slide(val) {
  return spring(val, {
    stiffness: 125,
    damping: 16,
  });
}

const pageTransitions = {
  atEnter: {
    offset: 100,
  },
  atLeave: {
    offset: glide(-100),
  },
  atActive: {
    offset: glide(0),
  },
};

const topBarTransitions = {
  atEnter: {
    offset: -100,
  },
  atLeave: {
    offset: slide(-150),
  },
  atActive: {
    offset: slide(0),
  },
};

const App = () => (
  <Router basename={basename}>
    <Route render={({ location }) => (
      <div>
        <AnimatedSwitch
          css={switchRule}
          {...pageTransitions}
          runOnMount={location.pathname === '/'}
          mapStyles={styles => ({
            transform: `translateX(${styles.offset}%)`,
          })}
        >
          <Route path="/" exact component={LandingScreen} />
          <Route component={DocumentationScreen} />
        </AnimatedSwitch>
        <AnimatedRoute
          css={routeRule}
          path="/:suhDude+"
          component={NavBar}
          {...topBarTransitions}
          mapStyles={styles => ({
            transform: `translateY(${styles.offset}%)`,
          })}
        />
      </div>
    )} />
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
