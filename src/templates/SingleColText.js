import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from 'components/layout';

class SingleColText extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  };

  render() {
    // this prop will be injected by the GraphQL query we'll write in a bit
    const { data, location } = this.props;
    const { markdownRemark: page } = data; // data.markdownRemark holds our page data
    return (
      <Layout location={location}>
        <div className="singlecolpage">
          <Helmet title={`${page.frontmatter.title}`} />
          <section className="container">
            <h1>{page.frontmatter.title}</h1>

            <div
              className="page__content"
              dangerouslySetInnerHTML={{ __html: page.html }}
            />
          </section>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        lastUpdated(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

export default SingleColText;
