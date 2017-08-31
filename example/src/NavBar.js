import React from 'react';
import Link from 'react-router-dom/Link';
import NavLink from 'react-router-dom/NavLink';
import { css } from 'glamor';

const rule = css`
  display: flex;
  padding-top: 2rem;
  margin-top: -2rem;
  height: 5rem;
  line-height: 5rem;
  background-color: #202020;

  & a {
    color: #eee;
    height: 5rem;
    line-height: 5rem;
    padding: 0 2rem;
    flex-grow: 1;
    text-align: center;
  }

  & a:hover, & a.active {
    background-color: #2a2a2a;
    color: #fff;
  }

  @media(max-width: 600px) {
    justify-content: space-around;
    overflow: hidden;

    & a {
      padding: 0;
      font-size: 1.2rem;
    }

    & a.github {
      display: none;
    }
  }
`;

const NavBar = () => (
  <nav css={rule}>
    <Link to="/">&larr;</Link>
    <NavLink to="/getting-started">Getting started</NavLink>
    <NavLink to="/animated-switch">Animated Switch</NavLink>
    <NavLink to="/animated-route">Animated Route</NavLink>
    <a
      href="https://github.com/maisano/react-router-transition"
      className="github"
    >
      GitHub
    </a>
  </nav>
);

export default NavBar;
