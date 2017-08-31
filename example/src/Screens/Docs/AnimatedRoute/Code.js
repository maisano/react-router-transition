import React from 'react';

import Footer from 'Screens/Docs/shared/Footer';

import AnimatedRouteJS from '!!prismjs-loader?lang=jsx!./example';

const ExampleCode = () => (
  <div>
    <h2>Example Code</h2>
    <div>
      <h3>AnimatedRouteDemo.js</h3>
      <pre
        className="language-javascript"
        dangerouslySetInnerHTML={{ __html: AnimatedRouteJS }}
      />
    </div>
    <Footer />
  </div>
);

export default ExampleCode;
