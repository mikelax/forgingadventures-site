import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import graphql from 'graphql';

class SingleColText extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  render() {
    // this prop will be injected by the GraphQL query we'll write in a bit
    const { data } = this.props;
    const { markdownRemark: page } = data; // data.markdownRemark holds our page data
    return (
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
    );
  }
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
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
