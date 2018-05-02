import { spacingRaw } from '~/src/settings/spacing'
import { rem } from '~/src/utils'

// http://gridcalculator.dk/#/1248/5/48/48

const GRID_GUTTER = {
  S: spacingRaw[3],
  L: spacingRaw[4],
}

const GRID_GUTTER_REM = {
  S: rem(GRID_GUTTER.S),
  L: rem(GRID_GUTTER.L),
}

export { GRID_GUTTER, GRID_GUTTER_REM }
