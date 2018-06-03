import styled from 'react-emotion'

import { BREAKPOINTS } from '~/src/settings/breakpoints'
import { GRID_GUTTER, GRID_GUTTER_REM } from '~/src/settings/grid'
import { BASELINE } from '~/src/settings/typography'
import COLOURS from '~/src/settings/colours'
import { rem } from '~/src/utils'

const Article = styled('div')`
  border: ${rem(2)} solid ${COLOURS.PRIMARY};
  padding-top: ${rem(BASELINE * 3 - 2)};
  padding-bottom: ${rem(BASELINE * 11)};
  padding-left: ${GRID_GUTTER_REM.S};
  padding-right: ${GRID_GUTTER_REM.S};
  margin: 0 -${rem(GRID_GUTTER.S + 2)};
  margin-bottom: ${rem(BASELINE * 4)};
  ${BREAKPOINTS.M_MIN} {
    padding-top: ${rem(BASELINE * 15 - 2)};
    margin: 0;
    grid-column: 1 / 6;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: ${GRID_GUTTER_REM.M};
  }

  ${BREAKPOINTS.L_MIN} {
    grid-column: 1 / 5;
    grid-template-columns: repeat(4, 1fr);
  }
`

export default Article
