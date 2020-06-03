const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

const createPages = (createPage, posts) => {
  posts.forEach(edge => {
    if (
      edge.node.frontmatter.type === 'index-clients' ||
      edge.node.frontmatter.type === 'index-pickup-contents' ||
      edge.node.frontmatter.type === 'services-modelcases' ||
      edge.node.frontmatter.type === 'case-studies-results-list'
    ) {
      return;
    }
    createPage({
      path: edge.node.fields.slug,
      tags: edge.node.frontmatter.tags,
      component: path.resolve(
        `src/templates/${String(edge.node.frontmatter.type)}.jsx`,
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
    if (_.get(edge, `node.frontmatter.tags`)) {
      tags = tags.concat(edge.node.frontmatter.tags);
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
      allMarkdownRemark(
        limit: 1000
        filter: { fields: { draft: { eq: false } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              type
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

    const posts = result.data.allMarkdownRemark.edges;
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
