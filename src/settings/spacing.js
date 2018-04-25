import { BODY_FONT_SIZE } from '~/src/settings/typography'

/**
 * Common function for consistent spacing in CSS
 * @param  {number} n
 * @return {number}
 */
const getSpacing = (n) => (n+2) * (n+2) - ((n+2) % 2)

/**
 * Get REM value
 * @param  {number} n
 * @return {number}   [description]
 */
const getREM = (n) => n / BODY_FONT_SIZE

const spacingRaw = {
  1: getSpacing(1), // 8
  2: getSpacing(2), // 16
  3: getSpacing(3), // 24
  4: getSpacing(5), // 48
  5: getSpacing(6), // 64
  6: getSpacing(10), // 144
};

const spacingREM = {
  1: getREM(spacingRaw[1]),
  2: getREM(spacingRaw[2]),
  3: getREM(spacingRaw[3]),
  4: getREM(spacingRaw[5]),
  5: getREM(spacingRaw[6]),
  6: getREM(spacingRaw[10]),
}


export {
  spacingRaw,
  spacingREM
}
