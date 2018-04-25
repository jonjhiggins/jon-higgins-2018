import React from 'react'
import styled from 'react-emotion'

import COLOURS from '~/src/settings/colours'
import { BASELINE_REM } from '~/src/settings/typography'

const BaselineGrid = styled('div')`
  background: repeating-linear-gradient(${COLOURS.PRIMARY}, ${COLOURS.PRIMARY} 1px, transparent 1px, transparent ${BASELINE_REM}rem);
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  opacity: 0.3;

  &::after {
    content: '';
    background: repeating-linear-gradient(black, black 1px, transparent 1px, transparent ${BASELINE_REM * 6}rem);
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    opacity: 0.5;
  }
`

export default BaselineGrid
