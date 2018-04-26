import React from 'react'
import styled from 'react-emotion'

import BaselineGrid from '~/src/components/baseline-grid'
import Heading from '~/src/components/heading'
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
  { block: vollkornStyles, text: VOLLKORN_STYLES, type: 'VOLLKORN' },
]

const Wrapper = styled('div')`
  position: relative;
`

const Columns = styled('ul')`
  list-style: none;
  padding: 0;
  margin: ${rem(BASELINE * 6)} 0 0;
  display: grid;
  grid-template-columns: repeat(2, ${rem(450)}) ${rem(190)};
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
  VOLLKORN: [2.5 * BASELINE_REM, 1 * BASELINE_REM, 0],
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

const StyleguideTypographyColumn = ({
  heading,
  paragraph,
  text,
  type,
  block,
}) => (
  <Column>
    <Heading element={'h2'}>{heading}</Heading>
    <Heading element={'p'} marginTop={-0.5} marginBottom={1.5} html={paragraph}></Heading>

    {block && block.map((styles, childIndex) => (
      <TypeBlock key={childIndex} index={childIndex} type={type}>
        <TypeBlockP newStyles={styles} index={childIndex}>
          <b>{text[childIndex].fontSizeRaw}</b> /{' '}
          {text[childIndex].lineHeightRaw}
        </TypeBlockP>
      </TypeBlock>
    ))}
  </Column>
)

const StyleguideTypography = () => (
  <Wrapper>
    <BaselineGrid
      lines={6}
      top={rem(BASELINE * 2)}
      colour={'rgba(0,0,0,0.25)'}
    />
    <Columns>
      <StyleguideTypographyColumn
        block={interUIStyles}
        text={INTER_UI_STYLES}
        type={'INTER_UI'}
        heading={`TYPOGRAPHY: INTER UI (REGULAR + BOLD)`}
        paragraph={`USE CAPS X-HEIGHT FOR ALIGNMENT <br />
        -10% SPACING UNLESS OTHERWISE SPECIFIED`}
      />
      <StyleguideTypographyColumn
        block={vollkornStyles}
        text={VOLLKORN_STYLES}
        type={'VOLLKORN'}
        heading={`TYPOGRAPHY: VOLLKORN (REGULAR + BOLD)`}
        paragraph={`USE LOWERCASE X-HEIGHT FOR ALIGNMENT<br/><br/>`}
      />
      <StyleguideTypographyColumn
        heading={`SPACING`}
        paragraph={`(n+2) * (n+2) - ((n+2) % 2)<br/>SKIPPING VALUES FOR 4, 7, 8, 9`}
      />
    </Columns>
  </Wrapper>
)

export default StyleguideTypography
