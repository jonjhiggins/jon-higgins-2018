import styled from 'react-emotion'

import COLOURS from '~/src/settings/colours'
import { rem } from '~/src/utils'

import { interUIStyles, BASELINE } from '~/src/settings/typography'

const BodyText = styled('div')({
  p: {
    margin: `0 0 ${rem(BASELINE * 2)}`,
  },
  'ul, ol': {
    margin: `0 0 ${rem(BASELINE * 2)}`,
    padding: `0 0 0 1em`,
  },
  li: {
    marginBottom: rem(BASELINE * 1),
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
    borderBottom: `${rem(2)} solid ${COLOURS.PRIMARY}`,
    display: 'inline-block',
    lineHeight: '1',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: rem(-3),
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: COLOURS.PRIMARY,
      transform: 'scaleY(0)',
      zIndex: '-1',
      opacity: '0.25',
      transition: 'transform 100ms ease-out',
      transformOrigin: 'bottom',
    },
    '&:hover': {
      '&::before': {
        transform: 'scaleY(1)',
      },
    },
  },
  h2: {
    ...interUIStyles[2],
    color: COLOURS.GREY_GREEN,
  },
  h3: {
    ...interUIStyles[2],
  },
  h4: {
    ...interUIStyles[1],
  },
  'h5, h6': {
    ...interUIStyles[0],
  },
})

export default BodyText
