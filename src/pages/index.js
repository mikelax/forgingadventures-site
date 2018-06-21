import React from 'react';
import Helmet from 'react-helmet';
import Cover from 'components/home/Cover';
import Ecosystem from 'components/home/Ecosystem';
import AllInOne from 'components/home/AllInOne';
import Giants from 'components/home/Giants';
import Expose from 'components/home/Expose';
import Schema from 'components/home/Schema';

const IndexPage = () => (
  <div className="home">
    <Helmet title="Play by Post Website for Pen and Paper RPGs" />
    <Cover />
    <Ecosystem />
    <Expose />
    <AllInOne />
    <Giants />
    <Schema />
  </div>
);

export default IndexPage;
