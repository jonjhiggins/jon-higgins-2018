const BODY_FONT_SIZE = 16
const BASELINE = 16
const BASELINE_REM = BASELINE / BODY_FONT_SIZE

// These sizes match the lowercase x-height of the font
// to the pixel height of spacing values (settings/spacing.js)
// so need to be set manually.
// Line-height just uses nearest baseline value that looks good.
// Padding is used to fix type to baseline`grid`
const VOLKORN_STYLES = [
  {
    fontSizeRaw: 16,
    lineHeightRaw: BASELINE * 1.5,
  },
  {
    fontSizeRaw: 36,
    lineHeightRaw: BASELINE * 3,
  },
  {
    fontSizeRaw: 52,
    lineHeightRaw: BASELINE * 4,
  },
  {
    fontSizeRaw: 104,
    lineHeightRaw: BASELINE * 7,
  }
]

// These sizes match the caps height of the font
// to the pixel height of spacing values (settings/spacing.js)
// so need to be set manually.
const INTER_UI_STYLES = [
  {
    fontSizeRaw: 11,
    lineHeightRaw: BASELINE * 1,
    letterSpacing: '0.125em',
    textTransform: 'uppercase',
    padding: `${BASELINE_REM / 4}rem 0`,
    marginBottom: `${BASELINE_REM / 2}rem`
  },
  {
    fontSizeRaw: 22,
    lineHeightRaw: BASELINE * 2,
    padding: `${BASELINE_REM / 2}rem 0`,
    marginBottom: `${BASELINE_REM / 2}rem`
  },
  {
    fontSizeRaw: 33,
    lineHeightRaw: BASELINE * 2.5,
    marginBottom: `${BASELINE_REM * 2}rem`
  },
  {
    fontSizeRaw: 66,
    lineHeightRaw: BASELINE * 4.5,
    padding: `${BASELINE_REM / 4}rem 0`,
    marginBottom: `${BASELINE_REM * 4}rem`
  },
  {
    fontSizeRaw: 88,
    lineHeightRaw: BASELINE * 6,
    marginBottom: `${BASELINE_REM * 4}rem`
  }
  ,
  {
    fontSizeRaw: 198,
    lineHeightRaw: BASELINE * 11,
    marginBottom: `${BASELINE_REM * 4}rem`
  }
]

const defaultStyle = {
  interUI: {
    fontFamily: 'Inter UI',
    position: 'relative'
  },
  vollkorn: {
    fontFamily: 'Vollkorn',
    position: 'relative'
  },
}

/**
 * Merge default styles with styles for each type size
 * @param  {object} newStyles object of CSS styles
 * @param  {string} defaultKey key in defaultStyle object
 * @return {object}
 */
const mergeStyles = (newStyles, defaultKey) => {
  const copyStyle = Object.assign({}, newStyles)
  copyStyle.fontSize = `${newStyles.fontSizeRaw / BODY_FONT_SIZE}rem`
  const lineHeight = copyStyle.lineHeightRaw / copyStyle.fontSizeRaw
  delete copyStyle.fontSizeRaw
  delete copyStyle.lineHeightRaw
  copyStyle.lineHeight = `${Math.round(lineHeight * 1000000000) / 1000000000}`
  return Object.assign({}, defaultStyle[defaultKey], copyStyle)
}

const interUIStyles = INTER_UI_STYLES.map(item => mergeStyles(
  item,
  'interUI'
))

const vollkornStyles = VOLKORN_STYLES.map(item => mergeStyles(
  item,
  'vollkorn'
))

export {
  interUIStyles,
  vollkornStyles,
  BASELINE,
  BASELINE_REM,
  BODY_FONT_SIZE,
  INTER_UI_STYLES,
  VOLKORN_STYLES
}
