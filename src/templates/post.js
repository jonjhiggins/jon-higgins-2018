import React from 'react'
import PropTypes from 'prop-types'

import PageWrapper from '~/src/components/pageWrapper'
import HeadingBackground from '~/src/components/headingBackground'

export default function Template({ data, transition }) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <PageWrapper transition={transition}>
      <HeadingBackground element={'h1'} marginBottom={6}>
        {frontmatter.title}
      </HeadingBackground>
      <div className="blog-post-container">
        <div className="blog-post">
          <h2>{frontmatter.date}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </PageWrapper>
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
