import React from 'react'
import styled from 'react-emotion'

import COLOURS from '~/src/settings/colours'
import { BASELINE } from '~/src/settings/typography'
import { BREAKPOINTS } from '~/src/settings/breakpoints'
import { GRID_GUTTER } from '~/src/settings/grid'
import { rem } from '~/src/utils'

const ArticleHeaderMedia = styled('div')`
  background-color: ${COLOURS.PRIMARY};
  padding: ${rem(GRID_GUTTER.S)};
  margin: 0 ${rem(-GRID_GUTTER.S)} ${rem(BASELINE)};

  ${BREAKPOINTS.M_MIN} {
    margin: 0 0 ${rem(BASELINE * 8)};
    padding: ${rem(GRID_GUTTER.M)};
  }

  video,
  img {
    max-width: 100%;
    display: block;
    grid-column: article-full;
    box-shadow: 0 ${rem(BASELINE * 2)} ${rem(BASELINE * 3)} ${COLOURS.SHADOW};
  }
`

export default ({ videoPath, images }) => {
  return (
    <ArticleHeaderMedia>
      {videoPath && (
        <video
          src={require(`../../${videoPath}.mp4`)}
          autoPlay
          loop
          poster={require(`../../${videoPath}.jpg`)}
        />
      )}
      {!videoPath &&
        images &&
        images.map(img => <img src={require(img)} alt="" />)}
    </ArticleHeaderMedia>
  )
}
