import React from 'react';

import ComponentPage from 'Screens/Docs/shared/ComponentPage';

import Overview from './Overview';
import Props from '../AnimatedSwitch/Props'; // lolol
import Demo from './Demo';
import Code from './Code';

const sections = [{
  title: 'Overview',
  path: '/animated-route',
  exact: true,
  component: Overview,
}, {
  title: 'Props',
  path: '/animated-route/props',
  component: Props,
}, {
  title: 'Demo',
  path: '/animated-route/demo',
  component: Demo,
}, {
  title: 'Code',
  path: '/animated-route/code',
  component: Code,
}];

export default () => (
  <ComponentPage
    title="AnimatedRoute"
    sections={sections}
  />
);
