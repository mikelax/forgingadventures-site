const Path = require('path');
const URL = require('url');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const singleColTextTemplate = Path.resolve(`src/templates/SingleColText.js`);

  return graphql(`{
    allMarkdownRemark(
      limit: 100
    ) {
      edges {
        node {
          frontmatter {
            path
          }
        }
      }
    }
  }`
  )
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }

      result.data.allMarkdownRemark.edges
        .forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: singleColTextTemplate,
            context: {} // additional data can be passed via context
          });
        });
    });
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  if ('MarkdownRemark' !== node.internal.type) {
    return;
  }

  const fileNode = getNode(node.parent);
  let nodePath = fileNode.relativePath.replace('.md', '');
  let html = node.internal.content;
  const re = /(\]\((?!http)(?!#)(.*?)\))/gi;
  const localUrls = [];
  let matches;

  while ((matches = re.exec(html))) {
    localUrls.push(matches[2]);
  }

  localUrls.map((url) => {
    let newUrl = url.replace('.md', '');
    newUrl = `/${URL.resolve(nodePath, newUrl)}`;
    html = html.replace(url, newUrl);
    return true;
  });

  node.internal.content = html;

  if('index' === Path.basename(nodePath)) {
    createNodeField({
      node,
      name: 'redirect',
      value: nodePath,
    });
    nodePath = `${Path.dirname(nodePath)}`;
  }

  createNodeField({
    node,
    name: 'path',
    value: nodePath,
  });
};

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [Path.resolve(__dirname, "src"), "node_modules"],
    },
  })
};
