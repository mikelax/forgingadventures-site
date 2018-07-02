import React from 'react';
import wizard from 'images/wizard.svg';
import HomeList from './HomeList';

const data = [
  'Game Masters can specify the expected posting frequency of Players, ranging from daily to a handufl of times per week.',
  'PbP allows Players nad Game Masters to <strong>play remotely</strong>, and on <strong>their own schedule</strong>.',
  'Given the asynchronous nature of Players posting, this allows Players to <strong>craft deeper, and more engaging Messages</strong>.',
];

const Expose = () => (
  <section className="home__part home__expose">
    <div className="container expose__container">
      <article className="expose__content">
        <h1 className="expose__title">
          What the heck is <strong>Play by Post</strong> Gaming?
        </h1>
        <p>
          Play by Post (PbP), sometimes called Play by Forum (PbF), is a fun and easy way to
          play and experience your <strong>favorite Role Playing Games on a daily basis</strong>.
          By utilizing a single Game Thread, players and the Game Master (GM) are able to make
          text posts to an RPG game. PbP allows players and the GM to play a game without requiring
          the players and the GM to be physically together. This allows eveyrone to play the game
          based on their own schedule.
        </p>
        <HomeList data={data} className="expose__list" />
      </article>
      <div className="expose__spider">
        <img src={wizard} alt="Wizard" width="400" height="419" />
      </div>
    </div>
  </section>
);

export default Expose;
