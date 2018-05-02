import { spacingRaw } from '~/src/settings/spacing'
import { em } from '~/src/utils'

// http://gridcalculator.dk/#/1248/5/48/48

const BREAKPOINTS_RAW = {
  S: 0,
  L: 800,
}

const BREAKPOINTS_EM = {
  S: em(BREAKPOINTS_RAW.S),
  L: em(BREAKPOINTS_RAW.L),
}

const BREAKPOINTS = {
  S_MAX: `@media (max-width: ${ em(BREAKPOINTS_RAW.L - 1)})`,
  L_MIN: `@media (min-width: ${ em(BREAKPOINTS_RAW.L)})`
}

export { BREAKPOINTS }
