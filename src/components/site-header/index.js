import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

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
import Z_INDEX from '~/src/settings/z-index'

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

  & a {
    text-decoration: none;
    color: inherit;
  }

  ${BREAKPOINTS.L_MIN} {
    grid-column: 1 / 3;
  }
`
const Navigation = styled('nav')(
  {
    [BREAKPOINTS.S_MAX]: {
      transition: '400ms transform ease-out',
      position: 'fixed',
      boxSizing: 'border-box',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      maxWidth: '100vw',
      maxHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: `${COLOURS.WHITE}`,
      padding: `${rem(BASELINE * 3)} ${GRID_GUTTER_REM.S}`,
      zIndex: `${Z_INDEX.NAV_OPEN}`,
    },
    [BREAKPOINTS.L_MIN]: {
      gridColumn: '3 / 6',
      position: 'relative',
    },
    '& > ul': {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      flex: '0 1 100%',
    },
    '& li': {
      margin: `0 0 ${rem(BASELINE)}`,
      padding: 0,
      height: `${rem(54)}`,
      transform: 'translateX(0)',
      '& a': {
        border: `${rem(2)} solid ${COLOURS.GREY}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        color: 'inherit',
        textDecoration: 'none',
      },
    },
  },
  ({ open }) => {
    return {
      [BREAKPOINTS.S_MAX]: {
        transform: open ? 'translateX(0)' : 'translateX(-100%)',
      },
    }
  }
)

const NavToggleButton = styled('button')({
  ...interUIStyles[0],
  border: 'none',
  position: 'absolute',
  top: `${BASELINE_REM}rem`,
  left: GRID_GUTTER_REM.S,
  backgroundColor: 'transparent',
  zIndex: `${Z_INDEX.NAV_OPEN + 1}`,
  [BREAKPOINTS.L_MIN]: {
    display: 'none;',
  },
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
    opacity: 0.3;
    position: absolute;
    left: 0;
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

const activeNavLink = {
  fontWeight: 'bold',
  border: `${rem(BORDER_WIDTH)} dashed ${COLOURS.PRIMARY}`,
}

class SiteHeader extends React.Component {
  constructor() {
    super()
    this.state = {
      navOpen: false,
    }
  }
  handleNavToggleClick() {
    this.setState({ navOpen: !this.state.navOpen })
  }
  render() {
    return (
      <Header>
        <Grid>
          <NavToggleButton
            type="button"
            onClick={this.handleNavToggleClick.bind(this)}
          >
            <BurgerIcons>
              <span />
            </BurgerIcons>
            {this.state.navOpen ? 'Close' : 'Menu'}
          </NavToggleButton>
          <Description>
            <Link to="/">
              <Heading
                element={'h1'}
                marginBottom={0.5}
                size={1}
                html={this.props.titleHTML}
              />
            </Link>
          </Description>
          <Navigation open={this.state.navOpen}>
            <Grid element={'ul'} cols={3}>
              {links.map(({ name, link }, index) => (
                <li key={index}>
                  <Link to={link} activeStyle={activeNavLink}>
                    <Heading element={'h3'} size={1} light={true}>
                      {name}
                    </Heading>
                  </Link>
                </li>
              ))}
            </Grid>
          </Navigation>
        </Grid>
      </Header>
    )
  }
}

SiteHeader.propTypes = {
  titleHTML: PropTypes.string,
}

export default SiteHeader
