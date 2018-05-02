import styled from 'react-emotion'
import { GRID_GUTTER_REM } from '~/src/settings/grid'
import { BREAKPOINTS } from '~/src/settings/breakpoints'

const PageWrapper = styled('div')`
  margin: 0 ${GRID_GUTTER_REM.S};

  ${BREAKPOINTS.L_MIN} {
    margin: 0 ${GRID_GUTTER_REM.L};
  }
`

export default PageWrapper
