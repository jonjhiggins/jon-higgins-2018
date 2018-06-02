import React from 'react'
import PropTypes from 'prop-types'

import Page from '~/src/components/page'

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
}) {
  return (
    <Page transition={transition} heading={title}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Page>
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
    markdownRemark(fileAbsolutePath: { eq: "src/data/who/who.md" }) {
      html
      frontmatter {
        title
      }
    }
  }
`
