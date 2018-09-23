import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import Cover from 'components/home/Cover';
import Ecosystem from 'components/home/Ecosystem';
import AllInOne from 'components/home/AllInOne';
import Giants from 'components/home/Giants';
import Overview from 'components/home/Overview';
import Schema from 'components/home/Schema';
import Newsletter from 'components/home/Newsletter';
import Layout from 'components/layout';

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <div className="home">
      <Helmet title="Play by Post Website for Pen and Paper Tabletop RPGs" />
      <Cover />
      <Ecosystem />
      <Overview />
      <AllInOne />
      <Giants />
      <Schema />
      <Newsletter />
    </div>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
