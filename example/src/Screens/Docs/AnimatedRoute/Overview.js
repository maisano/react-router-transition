import React from 'react';
import { css } from 'glamor';

import Footer from 'Screens/Docs/shared/Footer';

const Element = ({ name }) => (
  <code>&lt;{name} /&gt;</code>
);

const Overview = () => (
  <div>
    <h2>Overview</h2>
    <p>A <a href="https://reacttraining.com/react-router/web/api/Route"><Element name="Route" /></a>, but with mounting &amp; unmounting transitions.</p>
    <h2>Interruptible</h2>
    <p>Transitions on an <Element name="AnimateRoute" /> are <em>interruptible</em>. This means that if an animation is currently in motion and its match is toggled, it will redirect itself to its proper state mid-transition.</p>
    <h2>Nestable</h2>
    <p>You can put <Element name="AnimatedRoute" /> instances inside one another! You can even make them recursively nest and match–it's very likely not useful, but it sure is interesting.</p>
    <Footer />
  </div>
);

export default Overview;
