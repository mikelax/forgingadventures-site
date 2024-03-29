import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import SupportCommercial from 'images/support_commercial.svg';
import Layout from 'components/layout';

const SupportCard = ({ children, image, title }) => (
  <div className="support-card">
    <img
      className="support-card__image"
      src={image}
      alt={title}
      width="100"
      height="100"
    />
    <h3>{title}</h3>
    <div className="support-card__content">{children}</div>
  </div>
);

SupportCard.propTypes = {
  children: PropTypes.any,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

SupportCard.defaultProps = {
  children: null,
};

/* eslint-disable max-len */
const SupportPage = ({ location }) => (
  <Layout location={location}>
    <div className="support">
      <Helmet title="Support" />
      <section className="container">
        <h1>
          Need some <strong>help</strong> ?
          <br />Adventure in peril?
        </h1>
        <div className="support__cards">
          <SupportCard title="Questions & Support" image={SupportCommercial}>
            <p>
              If you have a question or comment, please find us on twitter {' '}
              <a
                href="https://twitter.com/forgeadventures"
                target="_blank"
                rel="noopener noreferrer"
              >
              @forgeadventures
              </a>
            </p>
            <br />
            <p>
              Alternatively, you may also email us at: {' '}
              &#104;&#101;&#108;&#108;&#111;&#064;&#102;&#111;&#114;&#103;&#105;&#110;&#103;&#097;&#100;&#118;&#101;&#110;&#116;&#117;&#114;&#101;&#115;&#046;&#099;&#111;&#109;
            </p>
          </SupportCard>
        </div>
      </section>
    </div>
  </Layout>
);
/* eslint-enable max-len */

SupportPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default SupportPage;
