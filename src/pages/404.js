import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import Spider from 'images/404.svg';
import Layout from 'components/layout';

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <div className="notfound">
      <Helmet title="404" />
      <div className="container notfound__content">
        <div className="notfound__text">
          <h1>Oops!</h1>
          <p>Looks like this page doesn&#39;t exist...</p>
        </div>
        <img src={Spider} alt="spider" width="371" height="344" />
      </div>
    </div>
  </Layout>
);

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default NotFoundPage;
