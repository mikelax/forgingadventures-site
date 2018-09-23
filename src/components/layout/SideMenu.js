import React from 'react';
import { Location } from '@reach/router';
import links from 'data/menu';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import FALogo from 'images/fa_logo.svg';
import Logo from './Logo';
import MenuItem from './MenuItem';

const SideMenu = ({ open }) => (
  <Location>
    {({ location }) => {
      const nav = links.map(link => <MenuItem key={link.text} {...link} location={location} />);
      return (
        <div className={classNames('side-menu', { open })}>
          <div className="side-menu__top">
            <div className="side-menu__logo">
              <div className="logo__circle">
                <img
                  className="logo__spider"
                  src={FALogo}
                  alt="FA Logo"
                  width="555"
                  height="321"
                />
              </div>
              <Logo className="logo__text" />
            </div>
          </div>
          <nav className="side-menu__nav">
            <MenuItem key="home" path="/" text="Home" location={location} />
            {nav}
          </nav>
        </div>
      );
    }}
  </Location>
);

SideMenu.defaultProps = {
  open: false,
};

SideMenu.propTypes = {
  open: PropTypes.bool,
};

export default SideMenu;
