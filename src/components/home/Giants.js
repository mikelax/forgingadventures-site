import React from 'react';
import spider from 'images/giants.svg';
import HomeList from './HomeList';

const data = [
  'Game Masters quickly create a Game, providing attributes for skill level, posting frequency, game scenarios and overview.',
  'Users and the GM can discuss the game & questions in the Game Lounge, which is separate from the actual Game Thread.',
  'Games consist of a <strong>single integrated Game Thread</strong> for both In-Character (ic) and Out-of-Character (ooc) posts. This allows players to easily keep track of the Game, along with running ooc commentary',
  'Players create Characters with Game specific attributes. Posts automatcailly generate <strong>custom Character Message Headers</strong>, no copying and pasting text.',
  'When Posting, the <strong>Custom Message Editor</strong> provides numerous features to make posting quick and easy. Custom text styling, advanced dice roller, image uploads & more',
];

const Giants = () => (
  <section className="home__part home__giants">
    <div className="container giants__container">
      <h1 className="giants__title">
        How does Forging Adventures make <strong>Play by Post Gaming</strong> easy?
      </h1>
      <article className="giants__content">
        <p className="hidden-small">
          Forging Adventures is the <strong>first website purpose built</strong> with features
          to make Play by Post games quick and easy. FA works beautifully on any device,
          so it&apos;s easy to play on the go anywhere.
        </p>
        <HomeList data={data} className="giants__list" />
      </article>
      <div className="giants__spider">
        <img
          src={spider}
          alt="Built on the shoulders of giants"
          width="371"
          height="344"
        />
      </div>
    </div>
  </section>
);

export default Giants;
