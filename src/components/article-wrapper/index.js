import styled from 'react-emotion'

import { BREAKPOINTS } from '~/src/settings/breakpoints'
import { GRID_GUTTER_REM } from '~/src/settings/grid'

const ArticleWrapper = styled('div')`
  ${BREAKPOINTS.L_MIN} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: ${GRID_GUTTER_REM.L};
  }
`

export default ArticleWrapper
