import styled from 'react-emotion'
import PropTypes from 'prop-types'
import React from 'react'

import Heading from '~/src/components/heading'
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
        {heading && (
          <Heading element={'h1'} marginTop={6} marginBottom={6} size={4}>
            {heading}
          </Heading>
        )}
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
