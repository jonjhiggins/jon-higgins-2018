import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

import { spacingREM } from '~/src/settings/spacing'
import { rem } from '~/src/utils'
import { interUIStyles, vollkornStyles, BASELINE, BASELINE_REM, INTER_UI_STYLES } from '~/src/settings/typography'

const styleBlocks = [interUIStyles, vollkornStyles]

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
`

const TYPEBLOCK_MARGINS = [
  2.5 * BASELINE_REM, 3 * BASELINE_REM, 1.5 * BASELINE_REM, 0, BASELINE_REM
]

const TypeBlock = styled('div')({
}, ({ index }) => {
  const marginBottom = TYPEBLOCK_MARGINS[index];
  return marginBottom ? { marginBottom: `${marginBottom}rem` } : {}
});

const TypeBlockP = styled('p')({
  margin: 0,
  whiteSpace: 'nowrap'
},({newStyles, index}) => {
  delete newStyles.marginBottom
  newStyles.color = index === 5 ? 'rgba(0,0,0,0.1)' : undefined
  return newStyles
}
)

const IndexPage = () => (
  <Columns>
    {styleBlocks.map((block, index) => (
      <Column key={index}>
        {block.map((item, childIndex) => (
          <TypeBlock key={childIndex} index={childIndex}>
            <TypeBlockP newStyles={item} index={childIndex}><b>{INTER_UI_STYLES[childIndex].fontSizeRaw}</b> / {INTER_UI_STYLES[childIndex].lineHeightRaw}</TypeBlockP>
          </TypeBlock>
        ))}
      </Column>
    ))}
  </Columns>
)

export default IndexPage
