import React from 'react';
import { css } from 'glamor';

import Footer from 'Screens/Docs/shared/Footer';

const Overview = () => (
  <div>
    <h2>Overview</h2>
    <p>A <a href="https://reacttraining.com/react-router/web/api/Switch"><code>&lt;Switch /&gt;</code></a>, but with transitions when the child route changes. Allows for animating sibling routes with a mounting and unmounting transition.</p>
    <h2>Uninterruptible</h2>
    <p>Transitions within an Animated Switch are <em>not interruptible</em>. This is by design, as we will mount each newly matched child route as a separate component with a unique key.</p>
    <h2>Nestable</h2>
    <p>Just like <a href="https://reacttraining.com/react-router/web/api/Switch"><code>&lt;Switch /&gt;</code></a>, this component is meant to be used anywhere you are rendering exclusive matches. This means nesting transitions is simple, providing your layout affords usage.</p>
    <Footer />
  </div>
);

export default Overview;
