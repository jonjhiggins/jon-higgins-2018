import React from 'react'
import PropTypes from 'prop-types'
import Page from '~/src/components/page'

export default function Template({ data, transition }) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Page transition={transition} heading={frontmatter.title}>
      <div className="blog-post-container">
        <div className="blog-post">
          <h2>{frontmatter.date}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Page>
  )
}

Template.propTypes = {
  transition: PropTypes.object,
  data: PropTypes.object,
}

export const pageQuery = graphql`
  query BlogPostByPath($fileAbsolutePath: String!) {
    markdownRemark(fileAbsolutePath: { eq: $fileAbsolutePath }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
