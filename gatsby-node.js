const path = require('path')
const getSitePath = require('./src/utils/getSitePath')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const postTemplate = path.resolve(`src/templates/post.js`)

  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            fileAbsolutePath
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: getSitePath(node.fileAbsolutePath),
        component: postTemplate,
        // additional data can be passed via context
        context: {
          fileAbsolutePath: node.fileAbsolutePath,
        },
      })
    })
  })
}
