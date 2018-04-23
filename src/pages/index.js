import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

import spacing from '~/src/settings/spacing'
import { interUIStyles, vollkornStyles, BASELINE_REM } from '~/src/settings/typography'

const styleBlocks = [interUIStyles, vollkornStyles]

const Columns = styled('ul')`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`

const Column = styled('li')`
  flex: 0 0 50%;
`

const TypeBlock = styled('p')({
  margin: 0,
  height: BASELINE_REM * 6 + 'rem'
}, (({ defaultStyles }) => {
  return defaultStyles
}));

const IndexPage = () => (
  <div>
    <Columns>
      {styleBlocks.map((block, index) => (
        <Column key={index}>
          {block.map((item, childIndex) => (
            <TypeBlock key={childIndex} defaultStyles={item}>
              {item.fontSizeRaw} / {item.lineHeightRaw}
            </TypeBlock>
          ))}
        </Column>
      ))}
    </Columns>
  </div>
)

export default IndexPage
