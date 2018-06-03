import React from 'react'
import PropTypes from 'prop-types'

import PageWrapper from '~/src/components/page-wrapper'
import ArticleWrapper from '~/src/components/article-wrapper'
import Article from '~/src/components/article'
import ArticleContent from '~/src/components/article-content'
import HeadingBackground from '~/src/components/heading-background'
import Heading from '~/src/components/heading'

export default function Template({ data, transition }) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const { title, description, date } = frontmatter
  return (
    <PageWrapper transition={transition}>
      <HeadingBackground>{title}</HeadingBackground>
      <ArticleWrapper>
        <Article>
          <ArticleContent>
            <Heading element={'h2'} sizeL={4}>
              {description}
            </Heading>
            <h2>{date}</h2>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </ArticleContent>
        </Article>
      </ArticleWrapper>
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
        description
      }
    }
  }
`
