import React from 'react';
import heroImage from 'images/fa_logo.svg';

const Cover = () => (
  <section className="home__cover full">
    <div className="container cover__content">
      <div className="cover__circle" />
      <div className="cover__spider">
        <img
          className="cover__image"
          src={heroImage}
          alt="Forging Adventures Logo"
          height="419"
        />
      </div>
      <h1>Forging Adventures</h1>
      <h2>A new way to play old-school Tabletop RPGs online, quickly and easily</h2>
      <div className="cover__buttons">
        <h5>
          We are still fine tuning the site and adjusting the dials before we launch.
          <br />Please <a href="#newsletterSection">join the mailing list</a> to be the first to be notified
          <br /> when Forging Adventures is available for additional user sign ups.
        </h5>
      </div>
    </div>
  </section>
);

export default Cover;
