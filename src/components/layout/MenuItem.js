import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import classNames from 'classnames';

const MenuItemLink = ({ path, children }) => {
  if (!path) {
    return <div className="menu-item__link">{children}</div>;
  }

  if ('/' === path.substr(0, 1)) {
    return (
      <Link className="menu-item__link" to={path}>
        {children}
      </Link>
    );
  }

  return (
    <a
      className="menu-item__link"
      href={path}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

MenuItemLink.propTypes = {
  children: PropTypes.any,
  path: PropTypes.string,
};

MenuItemLink.defaultProps = {
  children: null,
  path: null,
};

const MenuItem = ({ text, rootPath, path, location }) => {
  const current =
    location.pathname === path ||
    (rootPath && location.pathname.substr(0, rootPath.length) === rootPath);
  return (
    <div className={classNames('menu-item', { current })}>
      <MenuItemLink text={text} path={path}>
        <span>{text}</span>
      </MenuItemLink>
    </div>
  );
};

MenuItem.propTypes = {
  location: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  rootPath: PropTypes.string,
  path: PropTypes.string,
};

MenuItem.defaultProps = {
  path: null,
  rootPath: null,
};

export default MenuItem;
