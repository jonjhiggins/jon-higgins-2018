import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import hexRgb from 'hex-rgb'

import PageWrapper from '~/src/components/page-wrapper'
import HeadingBackground from '~/src/components/heading-background'
import ArticleWrapper from '~/src/components/article-wrapper'
import Article from '~/src/components/article'
import ArticleContent from '~/src/components/article-content'
import Heading from '~/src/components/heading'
import getSitePath from '~/src/utils/getSitePath'
import { BASELINE } from '~/src/settings/typography'
import COLOURS from '~/src/settings/colours'
import { rem } from '~/src/utils'

const PRIMARY_RGB = hexRgb(COLOURS.PRIMARY, { format: 'array' })
PRIMARY_RGB.pop()

const LinkBlocks = styled('ul')`
  list-style: none;
  margin: 0;
  padding: 0;
  grid-column: article-full;
`

const LinkBlock = styled('li')`
  list-style: none;
  margin: 0 0 ${rem(BASELINE * 2)};
  border: ${rem(2)} solid ${COLOURS.PRIMARY};
  & > a {
    color: ${COLOURS.BLACK};
    text-decoration: none;
    padding: ${rem(BASELINE)};
    display: block;
    transition: background-color 400ms ease-out;
    &:hover {
      background-color: rgba(${PRIMARY_RGB.join(',')}, 0.05);
    }
  }
`

console.log(`rgba(${PRIMARY_RGB.join(',')},)`)

export default function Template({ transition, items, heading }) {
  return (
    <PageWrapper transition={transition}>
      <HeadingBackground>{heading}</HeadingBackground>
      <ArticleWrapper>
        <Article border={false}>
          <ArticleContent centreGrid={false}>
            <LinkBlocks>
              {items.map(({ node }, index) => {
                const { frontmatter, fileAbsolutePath } = node
                return (
                  <LinkBlock key={index}>
                    <Link to={getSitePath(fileAbsolutePath)}>
                      <Heading
                        element={'time'}
                        size={1}
                        colour={COLOURS.GREY_GREEN}
                      >
                        {frontmatter.date}
                      </Heading>
                      <Heading element={'h3'} size={2}>
                        {frontmatter.title}
                      </Heading>
                    </Link>
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
          date(formatString: "DD MMMM YYYY")
          title
        }
      }
    }
  }
`
