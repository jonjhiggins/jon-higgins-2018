import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Heading from '~/src/components/heading'
import Grid from '~/src/components/grid'
import { GRID_GUTTER_REM } from '~/src/settings/grid'
import { BREAKPOINTS } from '~/src/settings/breakpoints'
import { BASELINE } from '~/src/settings/typography'
import { rem } from '~/src/utils'
import COLOURS from '~/src/settings/colours'
import Z_INDEX from '~/src/settings/z-index'
import ANIMATION from '~/src/settings/animation'

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

const NavigationWrapper = styled('nav')(
  {
    [BREAKPOINTS.S_MAX]: {
      transition: `400ms transform ${ANIMATION.EASING}`,
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
    [BREAKPOINTS.M_MIN]: {
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
      height: `${rem(BASELINE * 3.5)}`,
      transform: 'translateX(0)',

      [BREAKPOINTS.M_MIN]: {
        marginBottom: 0,
      },

      '& a': {
        border: `${rem(2)} solid ${COLOURS.GREY}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        color: 'inherit',
        textDecoration: 'none',
        transition: `400ms border-color ${
          ANIMATION.EASING_IN
        }, 400ms border-style ${ANIMATION.EASING_IN}`,
        boxSizing: 'border-box',
        '&:hover': {
          borderColor: `${COLOURS.PRIMARY}`,
          transition: `400ms border-color ${
            ANIMATION.EASING_OUT
          }, 400ms border-style ${ANIMATION.EASING_OUT}`,
        },
      },
    },
  },
  props => ({
    [BREAKPOINTS.S_MAX]: {
      transform: props.open ? 'translateX(0)' : 'translateX(-100%)',
      boxShadow: props.open
        ? `0 ${rem(BASELINE * 3)} ${rem(BASELINE * 3)} ${COLOURS.SHADOW}`
        : null,
    },
  })
)

class Navigation extends React.Component {
  render() {
    return (
      <NavigationWrapper open={this.props.open}>
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
