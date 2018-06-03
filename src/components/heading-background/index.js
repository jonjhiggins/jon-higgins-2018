import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

import Heading from '~/src/components/heading'
import { rem } from '~/src/utils'
import COLOURS from '~/src/settings/colours'
import { GRID_GUTTER_REM } from '~/src/settings/grid'
import { BREAKPOINTS } from '~/src/settings/breakpoints'
import { BASELINE } from '~/src/settings/typography'

const Wrapper = styled('div')({
  paddingTop: rem(BASELINE / 2),
  paddingLeft: rem(BASELINE),
  position: 'relative',

  [BREAKPOINTS.M_MIN]: {
    paddingTop: rem(BASELINE * 1.5),
    paddingLeft: `${GRID_GUTTER_REM.M}`,
    paddingRight: `${GRID_GUTTER_REM.M}`,
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: `-${GRID_GUTTER_REM.S}`,
    height: rem(BASELINE * 5),
    backgroundColor: COLOURS.PRIMARY,
    zIndex: '-1',

    [BREAKPOINTS.M_MIN]: {
      right: `-${GRID_GUTTER_REM.M}`,
    },
  },

  '& > h1': {
    [BREAKPOINTS.M_MIN]: {
      lineHeight: rem(BASELINE * 4),
      padding: 0,
      marginBottom: rem(BASELINE * 8.5),
    },
  },
})

const HeadingBackground = ({ children }) => (
  <Wrapper>
    <Heading element={'h1'} marginBottom={5} sizeS={3} sizeL={4}>
      {children}
    </Heading>
  </Wrapper>
)

HeadingBackground.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default HeadingBackground
