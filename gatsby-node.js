const Path = require('path');
const URL = require('url');

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

exports.modifyWebpackConfig = ({ config }) => {
  config.merge({
    resolve: {
      root: Path.resolve(__dirname, './src'),
      alias: {
        styles: 'styles',
        images: 'images',
        data: 'data',
        components: 'components',
      },
    },
  });
  return config;
};
