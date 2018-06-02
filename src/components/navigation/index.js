import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Heading from '~/src/components/heading'
import Grid from '~/src/components/grid'
import { GRID_GUTTER_REM } from '~/src/settings/grid'
import { BREAKPOINTS } from '~/src/settings/breakpoints'
import { BASELINE } from '~/src/settings/typography'
import { rem } from '~/src/utils'
import COLOURS from '~/src/settings/colours'
import Z_INDEX from '~/src/settings/z-index'

const BORDER_WIDTH = 2

const links = [
  {
    name: 'Work',
    link: '/work',
  },
  {
    name: 'Words',
    link: '/words',
  },
  {
    name: 'Who',
    link: '/who',
  },
]

const activeNavLink = {
  fontWeight: 'bold',
  border: `${rem(BORDER_WIDTH)} dashed ${COLOURS.PRIMARY}`,
}

const NavigationWrapper = styled('nav')({
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
      transition: '400ms border-color ease, 400ms border-style ease',
      '&:hover': {
        borderColor: `${COLOURS.PRIMARY}`,
      },
    },
  },
})

class Navigation extends React.Component {
  constructor() {
    super()
    this.state = {
      mobile: true,
    }
  }
  componentDidMount() {
    const mediaQueryList = window.matchMedia(
      BREAKPOINTS.L_MIN.replace('@media ', '')
    )
    mediaQueryList.addListener(this.handleBreakpointChange.bind(this))
    this.handleBreakpointChange(mediaQueryList)
  }
  handleBreakpointChange(e) {
    this.setState({ mobile: !e.matches })
  }
  render() {
    return (
      <NavigationWrapper
        style={{
          transform:
            !this.props.open && this.state.mobile
              ? 'translateX(-100%)'
              : 'translateX(0)',
        }}
      >
        <Grid element={'ul'} cols={3}>
          {links.map(({ name, link }, index) => (
            <li key={index}>
              <Link
                to={link}
                onClick={this.props.handleMenuClick}
                activeStyle={activeNavLink}
              >
                <Heading element={'h3'} size={1} light={true}>
                  {name}
                </Heading>
              </Link>
            </li>
          ))}
        </Grid>
      </NavigationWrapper>
    )
  }
}

Navigation.propTypes = {
  open: PropTypes.bool,
  handleMenuClick: PropTypes.func,
}

export default Navigation
