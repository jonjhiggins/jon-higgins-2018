const path = require('path')
const getSitePath = require('./src/utils/getSitePath')
const generateBabelConfig = require('gatsby/dist/utils/babel-config')

exports.modifyWebpackConfig = ({ config, stage }) => {
  const program = {
    directory: __dirname,
    browserslist: ['defaults'],
  }

  return generateBabelConfig(program, stage).then(babelConfig => {
    config.removeLoader('js').loader('js', {
      test: /\.jsx?$/,
      exclude: modulePath => {
        return (
          /node_modules/.test(modulePath) &&
          !/node_modules\/hex-rgb/.test(modulePath) // hex-rgb needs to go through babel https://github.com/sindresorhus/rgb-hex/issues/4
        )
      },
      loader: 'babel',
      query: babelConfig,
    })
  })
}

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
