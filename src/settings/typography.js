const BASELINE = 16
const BODY_FONT_SIZE = 16

// These sizes match the lowercase x-height of the font
// to the pixel height of spacing values (settings/spacing.js)
// so need to be set manually.
// Line-height just uses nearest baseline value that looks good
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
    textTransform: 'uppercase'
  },
  {
    fontSizeRaw: 22,
    lineHeightRaw: BASELINE * 2,
  },
  {
    fontSizeRaw: 33,
    lineHeightRaw: BASELINE * 2.5,
  },
  {
    fontSizeRaw: 66,
    lineHeightRaw: BASELINE * 4,
  },
  {
    fontSizeRaw: 88,
    lineHeightRaw: BASELINE * 6,
  }
  ,
  {
    fontSizeRaw: 192,
    lineHeightRaw: BASELINE * 10,
  }
]

const defaultStyle = {
  interUI: {
    fontFamily: 'Inter UI',
  },
  vollkorn: {
    fontFamily: 'Vollkorn',
  },
}

/**
 * Merge default styles with styles for each type size
 * @param  {object} newStyles object of CSS styles
 * @param  {string} defaultKey key in defaultStyle object
 * @return {object}
 */
const mergeStyles = (newStyles, defaultKey) => {
  newStyles.fontSize = `${newStyles.fontSizeRaw / BODY_FONT_SIZE}rem`
  const lineHeight = newStyles.lineHeightRaw / newStyles.fontSizeRaw
  newStyles.lineHeight = `${Math.round(lineHeight * 1000) / 1000}`
  console.log(defaultKey)
  return Object.assign({}, defaultStyle[defaultKey], newStyles)
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
  BODY_FONT_SIZE
}
