import React from 'react'
import styled from 'react-emotion'

import BaselineGrid from '~/src/components/baseline-grid'
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

export default Heading
