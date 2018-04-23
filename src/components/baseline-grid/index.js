import React from 'react'
import styled from 'react-emotion'

import COLOURS from '~/src/settings/colours'
import { BASELINE_REM } from '~/src/settings/typography'

console.log(COLOURS.PRIMARY)

const BaselineGrid = styled('div')`
  background: repeating-linear-gradient(${COLOURS.PRIMARY}, ${COLOURS.PRIMARY} 1px, transparent 1px, transparent ${BASELINE_REM}rem);
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
`

export default BaselineGrid
