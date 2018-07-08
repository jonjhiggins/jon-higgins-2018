import React from 'react'
import PropTypes from 'prop-types'

import SectionTemplate from '~/src/templates/section-listing'

/**
 * Section listing page for words articles
 * @param {object} data [description]
 */
export default function Section({
  data: {
    allMarkdownRemark: { edges: items },
  },
  transition,
  location,
}) {
  return (
    <SectionTemplate
      location={location}
      items={items}
      heading={'Words'}
      transition={transition}
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
  query GetWordsPosts {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "words" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      ...GetSectionPosts
    }
  }
`
