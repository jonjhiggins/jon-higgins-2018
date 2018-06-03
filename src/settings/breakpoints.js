import { em } from '~/src/utils'

const BREAKPOINTS_RAW = {
  S: 0,
  M: 800,
  L: 1150,
}

const BREAKPOINTS = {
  S_MAX: `@media (max-width: ${em(BREAKPOINTS_RAW.M - 1)})`,
  M_MIN: `@media (min-width: ${em(BREAKPOINTS_RAW.M)})`,
  M_MAX: `@media (max-width: ${em(BREAKPOINTS_RAW.L - 1)})`,
  L_MIN: `@media (min-width: ${em(BREAKPOINTS_RAW.L)})`,
}

export { BREAKPOINTS }
