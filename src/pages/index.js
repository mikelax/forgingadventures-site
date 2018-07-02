import React from 'react';
import Helmet from 'react-helmet';
import Cover from 'components/home/Cover';
import Ecosystem from 'components/home/Ecosystem';
import AllInOne from 'components/home/AllInOne';
import Giants from 'components/home/Giants';
import Expose from 'components/home/Expose';
import Schema from 'components/home/Schema';
import Newsletter from 'components/home/Newsletter';

const IndexPage = () => (
  <div className="home">
    <Helmet title="Play by Post Website for Pen and Paper Tabletop RPGs" />
    <Cover />
    <Ecosystem />
    <Expose />
    <AllInOne />
    <Giants />
    <Schema />
    <Newsletter />
  </div>
);

export default IndexPage;
