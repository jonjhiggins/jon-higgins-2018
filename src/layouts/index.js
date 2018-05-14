import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import BaselineGrid from '~/src/components/baseline-grid'
// eslint-disable-next-line no-unused-vars
import Typography from '~/src/components/typography'
import SiteHeader from '~/src/components/site-header'

// Fonts
import interUI from '~/src/fonts/Inter-UI-Regular.woff2'
import interUIBold from '~/src/fonts/Inter-UI-Bold.woff2'
import vollkorn from '~/src/fonts/vollkorn.woff2'
import vollkornBold from '~/src/fonts/vollkorn-bold.woff2'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: '@TODO' },
        { name: 'keywords', content: '@TODO' },
      ]}
    >
      <link rel="preload" href={interUI} as="font" type="font/woff2" />
      <link rel="preload" href={interUIBold} as="font" type="font/woff2" />
      <link rel="preload" href={vollkorn} as="font" type="font/woff2" />
      <link rel="preload" href={vollkornBold} as="font" type="font/woff2" />
    </Helmet>
    <BaselineGrid />
    <SiteHeader />
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
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
