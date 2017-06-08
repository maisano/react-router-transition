import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';
import Link from 'react-router-dom/Link';

import AnimatedSwitchDemo from 'components/AnimatedSwitchDemo';

import AnimatedSwitchCode from '!!prismjs-loader?lang=jsx!examples/AnimatedSwitch';
import AnimatedRouteCode from '!!prismjs-loader?lang=jsx!examples/AnimatedRoute';

import './duotone-dark-sea-theme.css';

const Examples = () => (
  <div>
    <header>
      <h1>React Router Transition</h1>
      <h2>Painless transitions built for react-router, powered by react-motion</h2>
      <div className="buttons">
        <a href="https://github.com/maisano/react-router-transition">
          Github
        </a>
        <a href="#animated-switch">
          Documentation
        </a>
      </div>
    </header>
    <section className="demos">
      <AnimatedSwitchDemo />
    </section>
    <section id="animated-switch" className="docs">
      <div className="content">
        <div>
          <h3><code>&lt;AnimatedSwitch&gt;</code></h3>
          <p>
            Just like <a href="https://reacttraining.com/react-router/web/api/Switch"><code>&lt;Switch&gt;</code></a>, except with mounting and unmounting transitions for the matched child.
            Under the hood, this component uses <a href="#"><code>&lt;RouteTransition&gt;</code></a> to define the transition values.
          </p>
          <p>This component only accepts <a href="https://reacttraining.com/react-router/web/api/Route"><code>&lt;Route&gt;</code></a> instances as children.</p>
        </div>
        <div>
          <div className="code-wrapper">
            <pre
              className="language-javascript"
              dangerouslySetInnerHTML={{ __html: AnimatedSwitchCode }}
            />
          </div>
        </div>
      </div>
    </section>
    <section id="animated-route" className="docs">
      <div className="content">
        <div>
          <h3><code>&lt;AnimatedRoute&gt;</code></h3>
          <p>A component that handles mounting and unmounting transitions for a <a href="https://reacttraining.com/react-router/web/api/Route"><code>&lt;Route&gt;</code></a></p>
          <p>Under the hood it uses <a href="#"><code>&lt;RouteTransition&gt;</code></a> to define the transition values.</p>
        </div>
        <div>
          <div className="code-wrapper">
            <pre
              className="language-javascript"
              dangerouslySetInnerHTML={{ __html: AnimatedRouteCode }}
            />
          </div>
        </div>
      </div>
    </section>
  </div>
);

const One = () => (
  <div>
    <h2>One</h2>
    <AnimatedSwitch
      atEnter={{ offset: 100, opacity: 0 }}
      atLeave={{ offset: -100, opacity: 0 }}
      atActive={{ offset: 0, opacity: 1 }}
      mapStyles={styles => ({
        transform: `translateY(${styles.offset}%)`,
        opacity: styles.opacity,
      })}
      runOnMount={false}
    >
      <Route exact path="/one/two" component={OneTwo} />
      <Route path="/one/three" component={OneThree} />
      <Route path="/one/two/three" component={OneTwoThree} />
    </AnimatedSwitch>
  </div>
);

const Two = () => (
  <div>
    <h2>Two</h2>
  </div>
);

const Three = () => (
  <div>
    <h2>Three</h2>
  </div>
);

const OneTwo = () => (
  <div>
    <h2>One/Two</h2>
  </div>
);

const OneThree = () => (
  <div>
    <h2>One/Three</h2>
  </div>
);

const OneTwoThree = () => (
  <div>
    <h2>One/Two/Three</h2>
  </div>
);

const RecursiveRoute = ({ match }) => (
  <div>
    you can keep going!
    <Link to={`${match.url}/deeper`}>Continue</Link>
    <AnimatedRoute
      path={`${match.url}/deeper`}
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      component={RecursiveRoute}
    />
  </div>
);

const ExampleSite = () => (
  <Router>
    <Examples />
  </Router>
);

ReactDOM.render(
  <ExampleSite />,
  document.getElementById('container')
);
