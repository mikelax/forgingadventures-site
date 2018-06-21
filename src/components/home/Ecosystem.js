import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import adminImage from 'images/admin_component.svg';
import scaffoldingImage from 'images/scaffolding_component.svg';
import apiImage from 'images/api_component.svg';
import schemaImage from 'images/schema_component.svg';
import Button from 'components/common/Button';

const EcosystemCard = ({ big, image, link, text, title }) => (
  <div className={classnames('grid__item', { full: big })}>
    <div className={classnames('card ecosystem__card', { big })}>
      <div className="card__circle">
        <img src={image} alt={title} width="646" height="646" />
      </div>
      <div className="card__content">
        <h3>{title}</h3>
        <article className="card__autosize">
          <p>{text}</p>
        </article>
        {
          link && <Button
            text="Read more"
            className="btn ecosystem__button small"
            link={link}
          />
        }
      </div>
    </div>
  </div>
);

EcosystemCard.propTypes = {
  big: PropTypes.bool,
  image: PropTypes.string.isRequired,
  link: PropTypes.string,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

EcosystemCard.defaultProps = {
  big: false,
  link: null,
};

const Ecosystem = () => (
  <section className="home__part home__ecosystem">
    <div className="container">
      <h1 className="ecosystem__title">
        The Forging Adventures <strong>Play by Post</strong> Experience
      </h1>
      <h5>
        FA make it easy to play any Tabletop RPG online, on your own time
      </h5>
      <div className="ecosystem__content grid__container">
        <EcosystemCard
          big
          image={scaffoldingImage}
          text="Easily create a Character within FA, and watch it grow as the Game evolves. Imagine allowing the GM to assess points of Damage, grant XP, gold, and more and having that automatically reflected on your Character Sheet and Header. No more manually editing complicated text blocks. These changes are relfected automatically. View the changes within your Character Audit Trail at any time."
          title="Dynamic Character Sheets"
        />
        <EcosystemCard
          image={apiImage}
          text="FA is built to be a delightful experience on your desktop, laptop, or mobile device. Quick and easy posting anywhere. No more copy-pasting previous posts to copy text formatting, no more poorly formatted messages because you posted from your phone."
          title="Modern & Mobile Ready"
        />
        <EcosystemCard
          image={schemaImage}
          text="FA allows users to play any Tabletop RPG they wish. The Games page allows easy searching of Games by System, status, skill level, posting frequency, and more."
          title="Play any Tabletop RPG"
        />
        <EcosystemCard
          image={adminImage}
          text="FA knows how time consuming it is to be the GM for one game (or many). Purpose-built GM features let you run the game easier. Easily advertise your Game in the Lounge, accept Playes, track initiative and more."
          title="Game Master Controls"
        />
      </div>
    </div>
  </section>
);

export default Ecosystem;
