import styled from 'react-emotion'
import PropTypes from 'prop-types'
import React from 'react'

import Layout from '~/src/components/layout'
import HeadingBackground from '~/src/components/heading-background'
import { GRID_GUTTER_REM } from '~/src/settings/grid'
import { BREAKPOINTS } from '~/src/settings/breakpoints'

const PageWrapperOuter = styled('div')`
  flex: 1 0 100%;
  align-items: center;
  display: flex;
`

const PageWrapperInner = styled('div')`
  margin-left: ${GRID_GUTTER_REM.S};
  margin-right: ${GRID_GUTTER_REM.S};
  flex-basis: 100%;

  ${BREAKPOINTS.M_MIN} {
    margin-left: ${GRID_GUTTER_REM.M};
    margin-right: ${GRID_GUTTER_REM.M};
  }
`

export default function PageWrapper({ children, heading, location }) {
  return (
    <Layout location={location}>
      <PageWrapperOuter>
        <PageWrapperInner>
          {heading && <HeadingBackground>{heading}</HeadingBackground>}
          {children}
        </PageWrapperInner>
      </PageWrapperOuter>
    </Layout>
  )
}

PageWrapper.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  location: PropTypes.object,
}
