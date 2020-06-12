const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

const createPages = (createPage, posts) => {
  posts.forEach(edge => {
    if (
      edge.node.categories[0].slug === 'uncategorized' ||
      edge.node.categories[0].slug === 'index-clients' ||
      edge.node.categories[0].slug === 'index-pickup-contents' ||
      edge.node.categories[0].slug === 'services-modelcases' ||
      edge.node.categories[0].slug === 'case-studies-results-list'
    ) {
      return;
    }
    createPage({
      path: `/${String(edge.node.categories[0].slug)}${String(edge.node.path)}`,
      tags: edge.node.tags,
      component: path.resolve(
        `src/templates/${String(edge.node.categories[0].slug)}.jsx`,
      ),
      context: {
        id: edge.node.id,
      },
    });
  });
};

const createProjectPagesPerTags = (createPage, posts) => {
  let tags = [];
  posts.forEach(edge => {
    if (_.get(edge, `node.tags`)) {
      tags = tags.concat(edge.node.tags);
    }
  });

  _.uniq(tags).forEach(tag => {
    const tagPath = `/case-studies/tags/${_.kebabCase(tag)}/`;
    createPage({
      path: tagPath,
      component: path.resolve(`src/templates/project-tags.jsx`),
      context: {
        tag,
      },
    });
  });
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allWordpressPost{
        edges {
          node {
            id
            path
            title
            categories {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allWordpressPost.edges;
    createPages(createPage, posts);
    createProjectPagesPerTags(createPage, posts);

    return Promise.resolve();
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
