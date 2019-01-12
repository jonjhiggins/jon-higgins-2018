import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'react-emotion'
import { StaticQuery, graphql } from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions'

// Polyfills
import 'url-search-params-polyfill'

import BaselineGrid from '~/src/components/baseline-grid'
// eslint-disable-next-line no-unused-vars
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
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
`

const Layout = ({ children, data, location }) => {
  const search = location ? location.search : null
  const params = search ? new URLSearchParams(search) : null
  const grid = params ? params.get('grid') : false
  const hasGrid = grid === 'true' || grid === '1'
  return (
    <PageTransition>
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
        {children}
      </Wrapper>
    </PageTransition>
  )
}

Layout.propTypes = {
  children: PropTypes.object,
  data: PropTypes.object,
  location: PropTypes.object,
}

export default props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            titleHTML
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)
