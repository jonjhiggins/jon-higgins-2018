import styled from 'react-emotion'
import PropTypes from 'prop-types'
import React from 'react'

import Layout from '~/src/components/layout'
import HeadingBackground from '~/src/components/heading-background'
import { GRID_GUTTER_REM } from '~/src/settings/grid'
import { BREAKPOINTS } from '~/src/settings/breakpoints'

const PageWrapperOuter = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const PageWrapperInner = styled('div')`
  margin-left: ${GRID_GUTTER_REM.S};
  margin-right: ${GRID_GUTTER_REM.S};
  width: calc(100% - (${GRID_GUTTER_REM.S} * 2));

  ${BREAKPOINTS.M_MIN} {
    margin-left: ${GRID_GUTTER_REM.M};
    margin-right: ${GRID_GUTTER_REM.M};
    width: calc(100% - (${GRID_GUTTER_REM.M} * 2));
  }
`

export default function PageWrapper({
  transition,
  children,
  heading,
  location,
}) {
  return (
    <Layout location={location}>
      <PageWrapperOuter style={transition && transition.style}>
        <PageWrapperInner>
          {heading && <HeadingBackground>{heading}</HeadingBackground>}
          {children}
        </PageWrapperInner>
      </PageWrapperOuter>
    </Layout>
  )
}

PageWrapper.propTypes = {
  transition: PropTypes.object,
  heading: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  location: PropTypes.object,
}
