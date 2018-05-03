import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

import { rem } from '~/src/utils'
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
}) => {
  const sizeIndex = size - 1
  const mainStyles =
    type === 'INTER_UI' ? interUIStyles[sizeIndex] : vollkornStyles[sizeIndex]
  const headingStyles = {
    marginTop: rem(marginTop * BASELINE),
    marginBottom: rem(marginBottom * BASELINE),
  }
  const combinedStyles = Object.assign({}, mainStyles, headingStyles)

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
  type: PropTypes.oneOf(['INTER_UI', 'VOLKORN']),
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  html: PropTypes.string,
}

export default Heading
