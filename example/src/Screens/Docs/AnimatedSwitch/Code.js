import React from 'react';

import Footer from 'Screens/Docs/shared/Footer';

import AnimatedSwitchJS from '!!prismjs-loader?lang=jsx!./example';
import AnimatedSwitchCSS from '!!prismjs-loader?lang=css!./example.css';

const ExampleCode = () => (
  <div>
    <h2>Example Code</h2>
    <div>
      <h3>AnimatedSwitchDemo.js</h3>
      <pre
        className="language-javascript"
        dangerouslySetInnerHTML={{ __html: AnimatedSwitchJS }}
      />
    </div>
    <div>
      <h3>AnimatedSwitchDemo.css</h3>
      <pre
        className="language-css"
        dangerouslySetInnerHTML={{ __html: AnimatedSwitchCSS }}
      />
    </div>
    <Footer />
  </div>
);

export default ExampleCode;
