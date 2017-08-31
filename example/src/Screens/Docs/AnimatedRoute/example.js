import React from 'react';
import Link from 'react-router-dom/Link';
import { AnimatedRoute } from 'react-router-transition';

import Wrapper from './Wrapper';
import Sidebar from './Sidebar';

export default () => (
  <Wrapper>
    <Link to="/sidebar">Show sidebar</Link>
    <AnimatedRoute
      path="/sidebar"
      component={Sidebar}
      atEnter={{ offset: -100 }}
      atLeave={{ offset: -100 }}
      atActive={{ offset: 0 }}
      mapStyles={(styles) => ({
        transform: `translateX(${styles.offset}%)`,
      })}
    />
  </Wrapper>
);
