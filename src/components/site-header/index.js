import React from 'react'
import styled from 'react-emotion'

import Heading from '~/src/components/heading'
import Grid from '~/src/components/grid'
import { GRID_GUTTER_REM } from '~/src/settings/grid'
import { BREAKPOINTS } from '~/src/settings/breakpoints'
import {
  interUIStyles,
  BASELINE,
  BASELINE_REM,
} from '~/src/settings/typography'
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
  position: fixed;
  box-sizing: border-box;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 100vw;
  max-height: 100vh;
  background-color: ${COLOURS.WHITE};
  z-index: 5000;
  transform: translateX(-100%);
  padding: ${rem(BASELINE * 3)} ${GRID_GUTTER_REM.S};
  display: flex;
  align-items: center;

  ${BREAKPOINTS.L_MIN} {
    grid-column: 3 / 6;
    position: relative;
  }

  & > ul {
    list-style: none;
    margin: 0;
    padding: 0;
    flex: 0 1 100%;
  }

  & li {
    margin: 0 0 ${rem(BASELINE)};
    padding: 0;
    height: ${rem(54)};
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${rem(2)} solid ${COLOURS.GREY};
  }
`

const NavToggleButton = styled('button')({
  ...interUIStyles[0],
  border: 'none',
  position: 'absolute',
  top: `${BASELINE_REM}rem`,
  left: GRID_GUTTER_REM.S,
  backgroundColor: COLOURS.WHITE,
  '& span': {},
})

const BurgerIcons = styled('span')`
  width: ${BASELINE_REM / 2}rem;
  height: ${BASELINE_REM / 2}rem;
  display: inline-block;
  margin-right: 0.5em;
  box-sizing: border-box;
  position: relative;
  &::after,
  &::before,
  span {
    width: 100%;
    height: ${rem(2)};
    background-color: ${COLOURS.BLACK};
    position: absolute;
    left: 0;
    opacity: 0.3;
  }
  span {
    top: 50%;
    transform: translate(${rem(-4)}, -50%);
    height: ${rem(2)};
    width: calc(100% + ${rem(4)});
  }
  &::before {
    content: '';
    top: 0;
  }
  &::after {
    content: '';
    bottom: 0;
  }
`

class SiteHeader extends React.Component {
  constructor() {
    super()
    this.state = {
      navOpen: false,
    }
  }
  render() {
    return (
      <Header>
        <Grid>
          <NavToggleButton type="button">
            <BurgerIcons>
              <span />
            </BurgerIcons>
            {this.state.navOpen ? 'Close' : 'Menu'}
          </NavToggleButton>
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
  }
}

export default SiteHeader
