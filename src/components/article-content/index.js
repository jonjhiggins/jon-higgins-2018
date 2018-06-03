import styled from 'react-emotion'

import { BREAKPOINTS } from '~/src/settings/breakpoints'

const ArticleContent = styled('div')`
  ${BREAKPOINTS.M_MIN} {
    grid-column: 2 / 5;
  }
  ${BREAKPOINTS.L_MIN} {
    grid-column: 2 / 4;
  }
`

export default ArticleContent
