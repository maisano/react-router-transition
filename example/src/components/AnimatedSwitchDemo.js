import React from 'react';
import Link from 'react-router-dom/Link';
import Route from 'react-router-dom/Route';

import AnimatedSwitch from '../../../src/AnimatedSwitch';
import spring from '../../../src/spring';

import Browser from './Browser';

const springConfig = {
  stiffness: 300,
  damping: 40,
};

const atEnter = {
  opacity: 0,
  offset: 100,
};

const atLeave = {
  opacity: 0,
  offset: -100,
};

const atActive = {
  opacity: 1,
  offset: spring(0, springConfig),
};

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `translateX(${styles.offset}%)`,
    position: 'absolute',
  };
}

const Sup = () => (
  <div>:wave:!</div>
);

const Home = () => (
  <div className="card">
    <h1>Home</h1>
    <p>This is home!</p>
  </div>
);

const Why = () => (
  <div className="card">
    <h1>But why?</h1>
    <p>Just because, I guess.</p>
  </div>
);

const About = () => (
  <div className="card">
    <h1>About</h1>
    <p>What's this all about?</p>
    <Link to="/about/sup">Sup</Link>

    <AnimatedSwitch
      atEnter={atEnter}
      atLeave={atLeave}
      atActive={atActive}
      mapStyles={mapStyles}
    >
      <Route path="/about/sup" component={Sup} />
      <Route path="/about" component={Sup} />
    </AnimatedSwitch>
  </div>
);

const AnimatedSwitchDemo = () => (
  <Browser>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/why">Why</Link>
    </nav>
    <div className="route-wrapper">
      <AnimatedSwitch
        atEnter={atEnter}
        atLeave={atLeave}
        atActive={atActive}
        mapStyles={mapStyles}
      >
        <Route path="/about" component={About} />
        <Route path="/why" component={Why} />
        <Route path="/" component={Home} />
      </AnimatedSwitch>
    </div>
  </Browser>
);

export default AnimatedSwitchDemo;
