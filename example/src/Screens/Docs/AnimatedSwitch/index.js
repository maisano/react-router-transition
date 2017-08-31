import React from 'react';

import ComponentPage from 'Screens/Docs/shared/ComponentPage';

import Overview from './Overview';
import Props from './Props';
import Demo from './Demo';
import Code from './Code';

const sections = [{
  title: 'Overview',
  path: '/animated-switch',
  exact: true,
  component: Overview,
}, {
  title: 'Props',
  path: '/animated-switch/props',
  component: Props,
}, {
  title: 'Demo',
  path: '/animated-switch/demo',
  component: Demo,
}, {
  title: 'Code',
  path: '/animated-switch/code',
  component: Code,
}];

export default () => (
  <ComponentPage
    title="AnimatedSwitch"
    sections={sections}
  />
);
