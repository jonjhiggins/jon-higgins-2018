import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

import { rem } from '~/src/utils'
import { BREAKPOINTS } from '~/src/settings/breakpoints'
import {
  interUIStyles,
  vollkornStyles,
  BASELINE,
} from '~/src/settings/typography'

const Heading = ({
  element,
  children,
  size = 1,
  type = 'INTER_UI',
  marginTop = 0,
  marginBottom = 0,
  html,
  sizeS,
  sizeL,
  light,
}) => {
  const sizeIndex = size - 1
  const sizeSIndex = typeof sizeS !== 'undefined' ? sizeS - 1 : null
  const sizeLIndex = typeof sizeL !== 'undefined' ? sizeL - 1 : null

  const mainIndex = sizeSIndex !== null ? sizeSIndex : sizeIndex

  const mainStyles =
    type === 'INTER_UI' ? interUIStyles[mainIndex] : vollkornStyles[mainIndex]

  const headingStyles = {
    marginTop: rem(marginTop * BASELINE),
    marginBottom: rem(marginBottom * BASELINE),
    position: 'relative',
    fontWeight: light ? 'normal' : null,
    '& > span': {
      fontWeight: 'normal',
    },
    'a.active > &': {
      fontWeight: 'bold', // site-header links active state
    },
  }

  let combinedStyles = Object.assign({}, mainStyles, headingStyles)

  // Set large breakpoint if size defined
  if (sizeLIndex >= 0) {
    const largeStyles =
      type === 'INTER_UI'
        ? interUIStyles[sizeLIndex]
        : vollkornStyles[sizeLIndex]
    const largeStylesMerged = Object.assign({}, largeStyles, headingStyles)
    combinedStyles = {
      ...combinedStyles,
      [BREAKPOINTS.L_MIN]: largeStylesMerged,
    }
  }

  const HeadingElement = styled(element)(combinedStyles)
  return html ? (
    <HeadingElement dangerouslySetInnerHTML={{ __html: html }} />
  ) : (
    <HeadingElement>{children}</HeadingElement>
  )
}

Heading.propTypes = {
  element: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.number,
  sizeS: PropTypes.number,
  sizeL: PropTypes.number,
  type: PropTypes.oneOf(['INTER_UI', 'VOLKORN']),
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  html: PropTypes.string,
  light: PropTypes.bool,
}

export default Heading
