import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

import BaselineGrid from '~/src/components/baseline-grid'
import { spacingREM } from '~/src/settings/spacing'
import { rem } from '~/src/utils'
import {
  interUIStyles,
  vollkornStyles,
  BASELINE,
  BASELINE_REM,
  INTER_UI_STYLES,
  VOLLKORN_STYLES,
} from '~/src/settings/typography'

const styleBlocks = [
  { block: interUIStyles, text: INTER_UI_STYLES, type: 'INTER_UI' },
  { block: vollkornStyles, text: VOLLKORN_STYLES, type: 'VOLLKORN' },
]

const Wrapper = styled('div')`
  /* inline-block so that baseline-grid fills width of screen */
  display: inline-block;
  position: relative;
`

const Columns = styled('ul')`
  list-style: none;
  padding: 0;
  margin: ${rem(BASELINE * 6)} ${rem(50)} 0;
  display: grid;
  grid-template-columns: repeat(2, ${rem(450)});
  grid-column-gap: ${rem(50)};
`

const Column = styled('li')`
  box-sizing: border-box;
  border-top: ${rem(2)} solid rgba(0, 0, 0, 0.1);
  padding-top: ${rem(BASELINE - 2)};
`

const TYPEBLOCK_MARGINS = {
  INTER_UI: [
    3.5 * BASELINE_REM,
    3 * BASELINE_REM,
    1.5 * BASELINE_REM,
    0,
    BASELINE_REM,
  ],
  VOLLKORN: [
    2.5 * BASELINE_REM,
    1 * BASELINE_REM,
    0
  ],
}

const TypeBlock = styled('div')({}, ({ index, type }) => {
  const marginBottom = TYPEBLOCK_MARGINS[type][index]
  return marginBottom ? { marginBottom: `${marginBottom}rem` } : {}
})

const TypeBlockP = styled('p')(
  {
    margin: 0,
    whiteSpace: 'nowrap',
  },
  ({ newStyles, index }) => {
    delete newStyles.marginBottom
    newStyles.color = index === 5 ? 'rgba(0,0,0,0.1)' : undefined
    return newStyles
  }
)

const IndexPage = () => (
  <Wrapper>
    <BaselineGrid
      lines={6}
      top={rem(BASELINE * 2)}
      colour={'rgba(0,0,0,0.25)'}
    />
    <Columns>
      {styleBlocks.map(({ block, text, type }, index) => (
        <Column key={index}>
          {block.map((styles, childIndex) => (
            <TypeBlock key={childIndex} index={childIndex} type={type}>
              <TypeBlockP newStyles={styles} index={childIndex}>
                {console.log(text)}
                <b>{text[childIndex].fontSizeRaw}</b> /{' '}
                {text[childIndex].lineHeightRaw}
              </TypeBlockP>
            </TypeBlock>
          ))}
        </Column>
      ))}
    </Columns>
  </Wrapper>
)

export default IndexPage
