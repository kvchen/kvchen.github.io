/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const createPaginatedPages = require('gatsby-paginate');
const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const template = path.resolve(`src/templates/post.js`);
  return graphql(`
    query PostGenerationQuery {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 300)
            frontmatter {
              date(formatString: "YYYY-MM-DD")
              path
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    createPaginatedPages({
      edges: result.data.allMarkdownRemark.edges,
      createPage: createPage,
      pageTemplate: 'src/templates/index.js',
    });

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: template,
        context: {},
      });
    });
  });
};
