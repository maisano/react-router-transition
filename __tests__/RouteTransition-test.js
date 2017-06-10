import React from 'react';
import { shallow } from 'enzyme';
import RouteTransition from '../src/RouteTransition';

test('RouteTransition mounts', () => {
  // Render a checkbox with label in the document
  const routeTransition = shallow(
    <RouteTransition
      atActive={{}}
      atLeave={{}}
      atEnter={{}}
    />
  );

  expect(routeTransition.html()).toMatchSnapshot();
});
