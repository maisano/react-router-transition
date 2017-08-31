import React from 'react';
import Link from 'react-router-dom/Link';

import Page from './shared/Page';
import Footer from './shared/Footer';

const Element = ({ name }) => (
  <code>&lt;{name} /&gt;</code>
);

export default () => (
  <Page>
    <div>
      <h1>Getting started</h1>
      <h2>Installation</h2>
      <p><code>npm install --save react-router-transition</code></p>
      <h2>What's included</h2>
      <ul>
        <li>
          <Link to="/animated-switch">
            <Element name="AnimatedSwitch" />
          </Link>
        </li>
        <li>
          <Link to="/animated-route">
            <Element name="AnimatedRoute" />
          </Link>
        </li>
        <li>
          <Element name="RouteTransition" />
        </li>
        <li>
          <code>spring</code>
        </li>
      </ul>
      <h2>Design</h2>
      <p>React Router Transition tries to be as simple as possible. While <em>some</em> configuration is required, the library exposes two components that act as thin layers on top of components from React Router DOM. Where these are not flexible enough, the package also exports a lower-level wrapper around React Motion's <Element name="TransitionMotion" />.</p>
      <p>The package also exports React Motion's <code>spring</code> helper function for specifying the spring configuration for the animation. To learn more about this helper, <a href="https://github.com/chenglou/react-motion#--spring-val-number-config-springhelperconfig--opaqueconfig">check the React Motion README</a>.</p>
      <h2>Limitations</h2>
      <p>This library has some obvious limitations, the most marked of which are:</p>
      <ul>
        <li>no staggering or sequencing of animations</li>
        <li>no durations or timing functions</li>
      </ul>
      <p>If you're looking for one of the above features, I would recommend using <a href="https://github.com/animatedjs/animated">Animated</a> and <a href="https://github.com/reactjs/react-transition-group">Transition Group</a>.</p>
      <Footer />
    </div>
  </Page>
);
