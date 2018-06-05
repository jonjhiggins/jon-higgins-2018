import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import PageWrapper from '~/src/components/page-wrapper'
import HeadingBackground from '~/src/components/heading-background'
import ArticleWrapper from '~/src/components/article-wrapper'
import Article from '~/src/components/article'
import ArticleContent from '~/src/components/article-content'
import Heading from '~/src/components/heading'
import getSitePath from '~/src/utils/getSitePath'
import { BASELINE } from '~/src/settings/typography'
import { rem } from '~/src/utils'

const LinkBlocks = styled('ul')`
  list-style: none;
  margin: 0;
  padding: 0;
`

const LinkBlock = styled('li')`
  list-style: none;
  margin: 0 0 ${rem(BASELINE)};
`

export default function Template({ transition, items, heading }) {
  return (
    <PageWrapper transition={transition}>
      <HeadingBackground>{heading}</HeadingBackground>
      <ArticleWrapper>
        <Article>
          <ArticleContent>
            <LinkBlocks>
              {items.map(({ node }, index) => {
                const { frontmatter, fileAbsolutePath } = node
                return (
                  <LinkBlock key={index}>
                    <Heading element={'h3'} size={2}>
                      <Link to={getSitePath(fileAbsolutePath)}>
                        {frontmatter.title}
                      </Link>
                    </Heading>
                  </LinkBlock>
                )
              })}
            </LinkBlocks>
          </ArticleContent>
        </Article>
      </ArticleWrapper>
    </PageWrapper>
  )
}

Template.propTypes = {
  transition: PropTypes.object,
  data: PropTypes.object,
  items: PropTypes.arrayOf(PropTypes.object),
  heading: PropTypes.string,
}

/**
 * GraphQL fragment that specifies the content
 * we need for this template.
 * It gets included in a page's GraphQL query via "...GetSectionPosts"
 * https://www.gatsbyjs.org/docs/querying-with-graphql/#fragments
 * @type {Query}
 */
export const pageQuery = graphql`
  fragment GetSectionPosts on MarkdownRemarkConnection {
    edges {
      node {
        id
        fileAbsolutePath
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
      }
    }
  }
`
