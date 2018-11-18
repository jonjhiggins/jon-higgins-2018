import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
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
  location,
}) {
  const itemsFiltered = items.filter(item => !item.node.frontmatter.archive)
  return (
    <SectionTemplate
      location={location}
      items={itemsFiltered}
      heading={'Work'}
      transition={transition}
      footerCTA={{
        text: 'Archive',
        link: '/work/archive',
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
  query GetWorkPosts {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "work" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      ...GetSectionPosts
    }
  }
`
