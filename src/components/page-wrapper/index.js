import styled from 'react-emotion'
import PropTypes from 'prop-types'
import React from 'react'

import HeadingBackground from '~/src/components/heading-background'
import { GRID_GUTTER_REM } from '~/src/settings/grid'
import { BREAKPOINTS } from '~/src/settings/breakpoints'

const PageWrapperInner = styled('div')`
  margin: 0 ${GRID_GUTTER_REM.S};

  ${BREAKPOINTS.M_MIN} {
    margin: 0 ${GRID_GUTTER_REM.M};
  }
`

export default function PageWrapper({ transition, children, heading }) {
  return (
    <div style={transition && transition.style}>
      <PageWrapperInner>
        {heading && <HeadingBackground>{heading}</HeadingBackground>}
        {children}
      </PageWrapperInner>
    </div>
  )
}

PageWrapper.propTypes = {
  transition: PropTypes.object,
  heading: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}
