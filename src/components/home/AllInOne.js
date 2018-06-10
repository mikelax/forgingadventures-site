import React from 'react';

const data = [
  <p>
    Game Messages automatically display <strong>Character Headings</strong> with Key Stats
  </p>,
  <p>
    Editor with built-in Formatting for <strong>Quick and Easy Posting</strong>
  </p>,
  <p>
    <strong>Single Thread</strong> to view In-Character and Out-of-Character posts
  </p>,
  <p>
    Easily Play <strong>any RPG System</strong>, all with a delightful and Modern Design
  </p>,
];

const circles = data.map((content, index) => (
  <article key={`article${index}`} className="aio__circle">
    {content}
  </article>
));

const AllInOne = () => (
  <section className="home__part home__all-in-one">
    <div className="container">
      <h1 className="aio__title">
        A Modern Website purpose-built for <strong>Play by Post</strong> Gaming
      </h1>
      <div className="aio__circles">{circles}</div>
    </div>
  </section>
);

export default AllInOne;
