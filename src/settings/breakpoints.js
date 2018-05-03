import { em } from '~/src/utils'

const BREAKPOINTS_RAW = {
  S: 0,
  L: 800,
}

const BREAKPOINTS = {
  S_MAX: `@media (max-width: ${em(BREAKPOINTS_RAW.L - 1)})`,
  L_MIN: `@media (min-width: ${em(BREAKPOINTS_RAW.L)})`,
}

export { BREAKPOINTS }
