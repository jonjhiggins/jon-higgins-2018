import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'react-emotion'

import BaselineGrid from '~/src/components/baseline-grid'
import Typography from '~/src/components/typography'

// Fonts
import interUI from '~/src/fonts/Inter-UI-Regular.woff2'
import interUIBold from '~/src/fonts/Inter-UI-Bold.woff2'
import vollkorn from '~/src/fonts/vollkorn.woff2'
import vollkornBold from '~/src/fonts/vollkorn-bold.woff2'

const App = styled('div')`
  /* inline-block so that baseline-grid fills width of screen */
  display: inline-block;
  position: relative;
`;

const Layout = ({ children, data }) => (
  <App>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: '@TODO' },
        { name: 'keywords', content: '@TODO' },
      ]}
    >
      <link rel="preload" href={interUI} as="font" type="font/woff2"/>
      <link rel="preload" href={interUIBold} as="font" type="font/woff2"/>
      <link rel="preload" href={vollkorn} as="font" type="font/woff2"/>
      <link rel="preload" href={vollkornBold} as="font" type="font/woff2"/>
    </Helmet>
    <BaselineGrid/>
    {children()}
  </App>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
