import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

import Heading from '~/src/components/heading'
import { rem } from '~/src/utils'
import COLOURS from '~/src/settings/colours'
import { GRID_GUTTER_REM } from '~/src/settings/grid'
import { BREAKPOINTS } from '~/src/settings/breakpoints'
import { BASELINE } from '~/src/settings/typography'

const Wrapper = styled('div')({}, () => {
  const backgroundStyles = {
    paddingTop: rem(BASELINE * 2),
    paddingLeft: `${GRID_GUTTER_REM.S}`,
    paddingRight: `${GRID_GUTTER_REM.S}`,
    position: 'relative',

    [BREAKPOINTS.L_MIN]: {
      paddingLeft: `${GRID_GUTTER_REM.L}`,
      paddingRight: `${GRID_GUTTER_REM.L}`,
    },

    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: `-${GRID_GUTTER_REM.S}`,
      bottom: rem(BASELINE),
      backgroundColor: COLOURS.PRIMARY,
      zIndex: '-1',

      [BREAKPOINTS.L_MIN]: {
        right: `-${GRID_GUTTER_REM.L}`,
      },
    },
  }

  return backgroundStyles
})

const HeadingBackground = ({ element, children }) => (
  <Wrapper>
    <Heading element={element} marginBottom={5} sizeS={4} sizeL={6}>
      {children}
    </Heading>
  </Wrapper>
)

Heading.propTypes = {
  element: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.oneOf(['INTER_UI', 'VOLKORN']),
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  background: PropTypes.bool,
}

export default HeadingBackground
