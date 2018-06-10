import React from 'react';
import spider from 'images/spider_home.svg';
import Button from 'components/common/Button';

const Cover = () => (
  <section className="home__cover full">
    <div className="container cover__content">
      <div className="cover__circle" />
      <div className="cover__spider">
        <img
          className="spider__image"
          src={spider}
          alt="spider"
          width="256"
          height="419"
        />
      </div>
      <h1>Forging Adventures</h1>
      <h2>A new way to play old-school RPGs online, quickly and easily</h2>
      <div className="cover__buttons">
        <Button
          empty
          text="Download"
          icon="download"
          link="https://github.com/api-platform/api-platform/releases/latest"
        />
        <Button
          text="Get started"
          icon="flag"
          link="/docs/distribution"
        />
      </div>
    </div>
  </section>
);

export default Cover;
