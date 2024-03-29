import React from 'react';
import { Location } from '@reach/router';
import links from 'data/menu';
import { Link } from 'gatsby';
import FALogo from 'images/fa_logo.svg';
import Logo from './Logo';
import MenuItem from './MenuItem';

const Header = () => (
  <Location>
    {({ location }) => {
      const nav = links.map(link => <MenuItem key={link.text} {...link} location={location} />);
      return (
        <header className="header openable">
          <Link to="/" className="header__logo">
            <img
              className="logo__spider"
              src={FALogo}
              alt="FA Logo"
              width="555"
              height="321"
            />
            <Logo className="logo__text" />
          </Link>
          <nav className="header__nav">{nav}</nav>
          <nav className="header__social">
            <a href="https://twitter.com/forgeadventures" target="blank">
              <i className="icon-twitter" />
            </a>
          </nav>
        </header>
      );
    }}
  </Location>
);

export default Header;
