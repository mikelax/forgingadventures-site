import React from 'react';
import { Link } from 'gatsby';
import FALogo from 'images/fa_logo.svg';

const Footer = () => (
  <footer className="footer openable">
    <img
      className="footer__logo"
      src={FALogo}
      alt="Forging Adventures Logo"
      width="400"
      height="419"
    />
    <p className="footer__copyright">
      Copyright © {`20${new Date().getYear() - 100}`} Forging Adventures
    </p>
    <div className="footer__links">
      <Link to="/privacy">Privacy Policy</Link> | <Link to="/terms">Terms of Service</Link>
    </div>
  </footer>
);

export default Footer;
