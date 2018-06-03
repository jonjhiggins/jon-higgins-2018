import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import PageWrapper from '~/src/components/page-wrapper'
import getSitePath from '~/src/utils/getSitePath'

export default function Template({ transition, items, heading }) {
  return (
    <PageWrapper transition={transition} heading={heading}>
      {items.map(({ node }, index) => {
        const { frontmatter, fileAbsolutePath } = node
        return (
          <p key={index}>
            <Link to={getSitePath(fileAbsolutePath)}>{frontmatter.title}</Link>
          </p>
        )
      })}
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
