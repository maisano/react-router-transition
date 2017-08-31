import React from 'react';
import { css } from 'glamor';

import Footer from 'Screens/Docs/shared/Footer';

const propTypesRule = css`
  font-size: 1.6rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
  margin: 3rem 0 1rem;
`;

const Props = () => (
  <div>
    <h2>Props</h2>
    <div css={propTypesRule}>
      <code>atEnter</code>, <code>atLeave</code>, <code>atActive</code>
    </div>
    <p>Objects with numerical values, expressing the interpolatable states a component will have when mounting, unmounting and mounted, respectively. Note that <code>spring</code> objects are valid only for <code>atActive</code> and <code>atLeave</code>.</p>
    <div css={propTypesRule}><code>mapStyles</code></div>
    <p>An optional function for transforming values that don't map 1:1 with styles (e.g. <code>translateX</code> or other values of the <code>transform</code> style property).</p>
    <div css={propTypesRule}><code>runOnMount</code></div>
    <p>A boolean flag to signal whether or not to apply a transition to the child component while mounting the parent.</p>
    <div css={propTypesRule}><code>wrapperComponent</code></div>
    <p>The element type (<code>'div'</code>, <code>'span'</code>, etc.) to wrap the transitioning routes with. Use <code>false</code> to transition child components themselves, though <strong>this requires consuming a <code>style</code> prop that gets injected into your component</strong>.</p>
    <div css={propTypesRule}><code>className</code></div>
    <p>A class name to apply to the root node of the transition.</p>
    <Footer />
  </div>
);

export default Props;
