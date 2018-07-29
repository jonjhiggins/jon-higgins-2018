import styled from 'react-emotion'
import React from 'react'

import { GRID_GUTTER_REM } from '~/src/settings/grid'
import { BASELINE_REM } from '~/src/settings/typography'
import { rem } from '~/src/utils'
import COLOURS from '~/src/settings/colours'
import { BREAKPOINTS } from '~/src/settings/breakpoints'
import Heading from '~/src/components/heading'

const PERSPECTIVE = BASELINE_REM * 30
const CUBE_HEIGHT = BASELINE_REM * 5
const CUBE_DEPTH = CUBE_HEIGHT
const CUBE_Z = CUBE_HEIGHT / 2

/**
 * Calculate what transform is needed for each cube face
 * @param {object} props
 */
const getCubeFaceTransform = props => {
  if (props.side) {
    return `rotateY(${
      props.left ? '-90deg' : '90deg'
    }) translateZ(${CUBE_Z}rem)`
  }

  return `rotateX(${props.index * 90}deg) translateZ(${CUBE_Z}rem)`
}

const HomeAnimationWrapper = styled('div')`
  display: flex;
  min-height: 40vh;
  align-items: center;
  transform: translateY(-${BASELINE_REM * 1}rem);

  ${BREAKPOINTS.M_MIN} {
    transform: translateY(${BASELINE_REM * 2}rem) l;
  }

  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`

const BlockList = styled('ul')`
  flex-basis: 100%;
  display: grid;
  grid-gap: ${GRID_GUTTER_REM.S};

  ${BREAKPOINTS.M_MIN} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: ${GRID_GUTTER_REM.M};
  }
`

const BlockListItem = styled('li')`
  perspective: ${PERSPECTIVE}rem;
`

const Cube = styled('ul')`
  position: relative;
  transform-style: preserve-3d;
  position: relative;
  width: 100%;
  height: ${CUBE_HEIGHT}rem;
  transform: translateZ(${-CUBE_Z}rem);
`

const CubeFace = styled('li')`
  border: ${rem(2)} solid ${COLOURS.PRIMARY};
  box-sizing: border-box;
  position: absolute;
  top: 0;
  /* align the right "side" face to right, everything else to left  */
  left: ${props => (props.side && props.right ? null : '0')};
  right: ${props => (props.side && props.right ? '0' : null)};
  width: ${props => (props.side ? `${CUBE_DEPTH}rem` : '100%')};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  transform: ${props => getCubeFaceTransform(props)};
  backface-visibility: hidden;
`

export default class HomeAnimation extends React.Component {
  constructor() {
    super()
    this.words = {
      code: ['clean', 'concise', 'comprehensible'],
      build: ['performant', 'accsesible', 'inclusive', 'engaging', 'useful'],
      buildItems: ['products', 'websites', 'experiences'],
      learn: ['new', 'emerging', 'useful'],
      learnItems: ['things', 'technologies', 'skills'],
    }

    this.blocks = [
      ['A', 'writes', 'builds', 'learns'],
      ['developer', this.words.code, this.words.build, this.words.learn],
      ['who', 'code', this.words.buildItems, this.words.learnItems],
    ]
  }
  render() {
    return (
      <HomeAnimationWrapper>
        <BlockList>
          {this.blocks.map((blockItems, index) => (
            <BlockListItem key={index}>
              <Cube>
                <CubeFace side={true} left={true} />
                <CubeFace side={true} right={true} />
                {blockItems.map((blockItem, blockItemIndex) => (
                  <CubeFace key={blockItemIndex} index={blockItemIndex}>
                    <Heading element={'h3'} size={3}>
                      {typeof blockItem === 'string' ? blockItem : blockItem[0]}
                    </Heading>
                  </CubeFace>
                ))}
              </Cube>
            </BlockListItem>
          ))}
        </BlockList>
      </HomeAnimationWrapper>
    )
  }
}
