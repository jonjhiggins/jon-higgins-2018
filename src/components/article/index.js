import styled from 'react-emotion'

import { BREAKPOINTS } from '~/src/settings/breakpoints'
import { GRID_GUTTER_REM } from '~/src/settings/grid'
import { BASELINE } from '~/src/settings/typography'
import COLOURS from '~/src/settings/colours'
import { rem } from '~/src/utils'

const Article = styled('div')`
  border: ${rem(2)} solid ${COLOURS.PRIMARY};
  padding-top: ${rem(BASELINE * 15 - 2)};
  padding-bottom: ${rem(BASELINE * 11)};
  margin-bottom: ${rem(BASELINE * 4)};
  ${BREAKPOINTS.L_MIN} {
    grid-column: 1 / 5;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: ${GRID_GUTTER_REM.L};
  }
`

export default Article
