import React from 'react';
import Link from 'gatsby-link';
import Logo from 'images/logo.svg';

const Footer = () =>
  (
    <footer className="footer openable">
      <img
        className="footer__logo"
        src={Logo}
        alt="spidey"
        width="400"
        height="419"
      />
      <p className="footer__copyright">
        Copyright © {`20${new Date().getYear() - 100}`} Forging Adventures
      </p>
      <div className="footer__links">
        <Link to="/privacy">Privacy Policy</Link> | <Link to="/terms">Terms of Use</Link>
      </div>
    </footer>
  );

export default Footer;