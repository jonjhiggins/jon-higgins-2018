import { BODY_FONT_SIZE } from '~/src/settings/typography'

/**
 * Convert a pixel number to a rem string
 * @param  {number} n
 * @return {string}
 */
const rem = (n) => `${n / BODY_FONT_SIZE}rem`

export {
  rem
}
