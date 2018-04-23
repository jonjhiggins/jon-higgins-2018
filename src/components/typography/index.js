import { injectGlobal } from 'emotion'

import interUI from '~/src/fonts/Inter-UI-Regular.woff2'
import interUIBold from '~/src/fonts/Inter-UI-Bold.woff2'
import vollkorn from '~/src/fonts/vollkorn.woff2'
import vollkornBold from '~/src/fonts/vollkorn-bold.woff2'

import { interUIStyles, vollkornStyles, BODY_FONT_SIZE } from '~/src/settings/typography'

injectGlobal`
  @font-face {
    font-family: 'Vollkorn';
    font-style: normal;
    font-weight: 400;
    src: url(${vollkorn}) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Vollkorn';
    font-style: normal;
    font-weight: 700;
    src: url(${vollkornBold}) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Inter UI';
    font-style: normal;
    font-weight: 400;
    src: url(${interUI}) format('woff2');
  }

  @font-face {
    font-family: 'Inter UI';
    font-style: normal;
    font-weight: 700;
    src: url(${interUIBold}) format('woff2');
  }

  html {
    font-size: ${BODY_FONT_SIZE}px;
  }

  body {
    margin: 0;
    ${vollkornStyles[0]}
  }
`
