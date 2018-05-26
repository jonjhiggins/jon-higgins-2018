import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'

import { BREAKPOINTS } from '~/src/settings/breakpoints'
import { GRID_GUTTER_REM } from '~/src/settings/grid'

const Grid = ({ element, cols, children }) => {
  const GridElement = styled(element)`
    ${BREAKPOINTS.L_MIN} {
      display: grid;
      grid-template-columns: repeat(${cols}, 1fr);
      grid-gap: ${GRID_GUTTER_REM.L};
    }
  `
  return <GridElement>{children}</GridElement>
}

Grid.propTypes = {
  element: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  cols: PropTypes.number,
}

// Specifies the default values for props:
Grid.defaultProps = {
  element: 'div',
  cols: 5,
}

export default Grid
