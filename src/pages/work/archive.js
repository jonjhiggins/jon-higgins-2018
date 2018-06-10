import React from 'react'
import PropTypes from 'prop-types'

import SectionTemplate from '~/src/templates/section-listing'

/**
 * Section listing page for work articles
 * @param {object} data [description]
 */
export default function Section({
  data: {
    allMarkdownRemark: { edges: items },
  },
  transition,
}) {
  const itemsFiltered = items.filter(item => item.node.frontmatter.archive)
  return (
    <SectionTemplate
      items={itemsFiltered}
      heading={'Work Archive'}
      transition={transition}
      footerCTA={{
        text: 'Back to Work',
        link: '/work',
      }}
    />
  )
}

Section.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  transition: PropTypes.object,
}

export const pageQuery = graphql`
  query GetWorkArchivePosts {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "work" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      ...GetSectionPosts
    }
  }
`