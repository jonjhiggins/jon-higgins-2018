import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import PostTemplate from '~/src/templates/post'

/**
 * Page for "who"
 * @param {object} data [description]
 */
export default function Section({ data, transition, location }) {
  return <PostTemplate data={data} transition={transition} />
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
