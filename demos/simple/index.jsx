import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './App';
import Ipsum from './Ipsum';

const Routing = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Ipsum} title="Home" />
      <Route path="demo-1" component={Ipsum} title="1." />
      <Route path="demo-2" component={Ipsum} title="2." />
      <Route path="demo-3" component={Ipsum} title="3." />
    </Route>
  </Router>
);

ReactDOM.render(<Routing />, document.querySelector('#app'));
