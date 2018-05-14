import React from 'react'
import styled from 'react-emotion'

import Heading from '~/src/components/heading'
import Grid from '~/src/components/grid'
import { GRID_GUTTER_REM } from '~/src/settings/grid'
import { BREAKPOINTS } from '~/src/settings/breakpoints'
import { BASELINE } from '~/src/settings/typography'
import { rem } from '~/src/utils'
import COLOURS from '~/src/settings/colours'

const BORDER_WIDTH = 2

const links = [
  {
    name: 'Work',
    link: 'work',
  },
  {
    name: 'Words',
    link: 'words',
  },
  {
    name: 'Work',
    link: 'who',
  },
]

const Header = styled('header')`
  margin: 0 ${GRID_GUTTER_REM.S};
  padding: ${rem(BASELINE * 3)} 0;

  ${BREAKPOINTS.L_MIN} {
    margin: 0 ${GRID_GUTTER_REM.L};
  }
`

const Description = styled('div')`
  border-top: ${rem(BORDER_WIDTH)} solid ${COLOURS.GREY};
  padding-top: ${rem(BASELINE - BORDER_WIDTH)};

  ${BREAKPOINTS.L_MIN} {
    grid-column: 1 / 3;
  }
`

const Navigation = styled('nav')`
  ${BREAKPOINTS.L_MIN} {
    grid-column: 3 / 6;
  }

  & > ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  & li {
    margin: 0;
    padding: 0;
    height: ${rem(54)};
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${rem(2)} solid ${COLOURS.GREY};
  }
`

const SiteHeader = () => (
  <Header>
    <Grid>
      <Description>
        <Heading
          element={'h1'}
          marginBottom={0.5}
          size={1}
          html={`Jon Higgins <span>&#x2011; Melbourne-based front&#x2011;end developer</span>`}
        />
      </Description>
      <Navigation>
        <Grid element={'ul'} cols={3}>
          {links.map(({ name, link }, index) => (
            <li key={index}>
              <Heading element={'h3'} size={1}>
                {name}
              </Heading>
            </li>
          ))}
        </Grid>
      </Navigation>
    </Grid>
  </Header>
)

export default SiteHeader
