import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import PageWrapper from '~/src/components/page-wrapper'

/**
 * Section listing page for words articles
 * @param {object} data [description]
 */
export default function Section({
  data: {
    markdownRemark: {
      html,
      frontmatter: { title },
    },
  },
  transition,
  location,
}) {
  return (
    <PageWrapper location={location} transition={transition} heading={title}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </PageWrapper>
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
  query GetWhoPost {
    markdownRemark(fileAbsolutePath: { regex: "/src/data/who/who.md/" }) {
      html
      frontmatter {
        title
      }
    }
  }
`
