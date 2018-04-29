import React from 'react'
import styled from 'react-emotion'

import BaselineGrid from '~/src/components/baseline-grid'
import Heading from '~/src/components/heading'
import { spacingREM, spacingRaw } from '~/src/settings/spacing'
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

const circles = Object.keys(spacingRaw).map(key => spacingRaw[key]);

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
  position: relative;
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
  CIRCLES: [
    5 * BASELINE_REM,
    4.5 * BASELINE_REM,
    3 * BASELINE_REM,
    BASELINE_REM * 2,
    BASELINE_REM * 3,
  ],
}

const TypeBlock = styled('div')({}, ({ index, type }) => {
  const marginBottom = TYPEBLOCK_MARGINS[type][index]
  return marginBottom ? { marginBottom: `${marginBottom}rem` } : {}
})

const TypeBlockP = styled('p')(
  {
    margin: 0,
    whiteSpace: 'nowrap'
  },
  ({ newStyles, index }) => {
    delete newStyles.marginBottom
    newStyles.color = index === 5 ? 'rgba(0,0,0,0.1)' : undefined
    return newStyles
  }
)

const SpacingLine = styled('ul')({
  display: 'flex',
  listStyle: 'none',
  alignItems: 'flex-end',
  padding: 0,
  '& li': {
    flex: '0 1 50%'
  },
  '& p': {
    padding: 0,
    position: 'relative'
  }
}, ({ value, index }) => {
  const padding = INTER_UI_STYLES[0].padding
  return {
    margin: `0 0 ${TYPEBLOCK_MARGINS.CIRCLES[index]}rem`,
    '& p': {
      top: padding ? padding.replace(' 0', '') : null,
    }
  }
})

const Circle = styled('div')({
  borderRadius: '50%',
  boxSizing: 'border-box'
}, ({ value, index }) => ({
  height: `${rem(value)}`,
  width: `${rem(value)}`,
  backgroundColor: `rgba(0, 0, 0, ${0.5 - (0.1 * index)})`,
  border: index === 5 ? `${rem(2)} solid rgba(0, 0, 0, 0.1)` : null
}))

const StyleguideTypographyColumn = ({
  heading,
  paragraph,
  text,
  type,
  block,
  circles
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

    {circles && circles.map((value, childIndex) => (
      <SpacingLine key={childIndex} value={value} index={childIndex}>
        <li><Circle value={value} index={childIndex}></Circle></li>
        <li><Heading element={'p'}>{value}</Heading></li>
      </SpacingLine>
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
        circles={circles}
      />
    </Columns>
  </Wrapper>
)

export default StyleguideTypography
