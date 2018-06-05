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
  margin: 0 -${rem(GRID_GUTTER.S + 2)} ${rem(BASELINE * 4)};

  ${BREAKPOINTS.S_MAX} {
    padding-left: ${GRID_GUTTER_REM.S};
    padding-right: ${GRID_GUTTER_REM.S};
  }

  ${BREAKPOINTS.M_MIN} {
    padding-top: ${rem(BASELINE * 15 - 2)};
    margin-left: 0;
    margin-right: 0;
    grid-column: 1 / 6;
    display: grid;
    grid-template-columns:
      [article-full-start] 1fr [article-main-start] repeat(3, 1fr)
      [article-main-end] 1fr [article-full-end];
    grid-column-gap: ${GRID_GUTTER_REM.M};
  }

  ${BREAKPOINTS.L_MIN} {
    grid-column: 1 / 5;
    grid-template-columns:
      [article-full-start] 1fr [article-main-start] repeat(2, 1fr)
      [article-main-end] 1fr [article-full-end];
  }
`

export default Article
