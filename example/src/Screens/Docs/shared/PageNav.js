import React from 'react';
import NavLink from 'react-router-dom/NavLink';
import { css } from 'glamor';

const rule = css`
  padding-bottom: 3rem;
`;

const linkRule = css`
  background-color: white;
  margin: 0 1rem 0 0;
  padding: 1rem;
  text-transform: uppercase;
  font-size: 1.2rem;
  border-radius: 2px;
  transition: background-color 100ms ease-in-out;

  &:hover {
    background-color: #f7f7f7;
  }

  &.active {
    background-color: #f1f1f1;
  }
`;

const PageNav = ({ sections }) => (
  <div css={rule}>
    {sections.map(({ exact, title, path }) => (
      <NavLink
        key={path}
        css={linkRule}
        to={path}
        exact={exact}
      >
        {title}
      </NavLink>
    ))}
  </div>
);

export default PageNav;
