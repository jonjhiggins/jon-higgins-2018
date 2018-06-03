import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'react-emotion'

// Polyfills
import 'url-search-params-polyfill'

import BaselineGrid from '~/src/components/baseline-grid'
// eslint-disable-next-line no-unused-vars
import Typography from '~/src/components/typography'
import SiteHeader from '~/src/components/site-header'
import { MAX_WIDTH_REM } from '~/src/settings/max-width'
import { BASELINE } from '~/src/settings/typography'
import COLOURS from '~/src/settings/colours'
import { rem } from '~/src/utils'

require('prismjs/themes/prism-solarizedlight.css')

// Fonts
// import interUI from '~/src/fonts/inter-ui-regular.woff2'
// import interUIBold from '~/src/fonts/inter-ui-bold.woff2'
// import vollkorn from '~/src/fonts/vollkorn.woff2'
// import vollkornBold from '~/src/fonts/vollkorn-bold.woff2'

const Wrapper = styled('div')`
  max-width: ${MAX_WIDTH_REM};
  margin: 0 auto;
  box-shadow: 0 ${rem(BASELINE * 3)} ${rem(BASELINE * 3)} ${COLOURS.SHADOW};
  overflow: hidden; /* stop box shadow showing at bottom of element  */
  min-height: 100vh;
`

const Layout = ({ children, data, location }) => {
  const search = location.search
  const params = new URLSearchParams(search)
  const grid = params.get('grid')
  const hasGrid = grid === 'true' || grid === '1'
  return (
    <Wrapper>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: '@TODO' },
          { name: 'keywords', content: '@TODO' },
        ]}
      >
        {/* <link rel="preload" href={interUI} as="font" type="font/woff2" />
        <link rel="preload" href={interUIBold} as="font" type="font/woff2" />
        <link rel="preload" href={vollkorn} as="font" type="font/woff2" />
        <link rel="preload" href={vollkornBold} as="font" type="font/woff2" /> */}
      </Helmet>
      {hasGrid && <BaselineGrid />}
      <SiteHeader
        titleHTML={data.site.siteMetadata.titleHTML}
        navLinks={data.site.navLinks}
      />
      {children()}
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
  location: PropTypes.object,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        titleHTML
      }
    }
  }
`
