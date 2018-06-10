import React from 'react'
import PropTypes from 'prop-types'

import PageWrapper from '~/src/components/page-wrapper'
import ArticleWrapper from '~/src/components/article-wrapper'
import Article from '~/src/components/article'
import ArticleContent from '~/src/components/article-content'
import ArticleHeaderMedia from '~/src/components/article-header-media'
import BodyText from '~/src/components/body-text'
import HeadingBackground from '~/src/components/heading-background'
import Heading from '~/src/components/heading'
import COLOURS from '~/src/settings/colours'

export default function Template({ data, transition }) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const {
    title,
    description,
    date,
    heroVideos,
    category,
    heroImages,
  } = frontmatter
  const mediaPath = `data/${category}/images/`
  const videoPath =
    heroVideos && heroVideos.length ? `${mediaPath}${heroVideos[0]}` : null
  return (
    <PageWrapper transition={transition}>
      <HeadingBackground>{title}</HeadingBackground>
      <ArticleWrapper>
        <Article hasMedia={videoPath || heroImages}>
          <ArticleContent>
            {(videoPath || heroImages) && (
              <ArticleHeaderMedia
                videoPath={videoPath}
                mediaPath={mediaPath}
                heroImages={heroImages}
              />
            )}
            <Heading
              element={'time'}
              marginBottom={2}
              colour={COLOURS.GREY_GREEN}
            >
              {date}
            </Heading>
            <Heading
              element={'h2'}
              sizeS={2}
              sizeM={3}
              marginBottomS={3}
              marginBottomM={6}
            >
              {description}
            </Heading>
            <BodyText dangerouslySetInnerHTML={{ __html: html }} />
          </ArticleContent>
        </Article>
      </ArticleWrapper>
    </PageWrapper>
  )
}

Template.propTypes = {
  transition: PropTypes.object,
  data: PropTypes.object,
}

export const pageQuery = graphql`
  query BlogPostByPath($fileAbsolutePath: String!) {
    markdownRemark(fileAbsolutePath: { eq: $fileAbsolutePath }) {
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        title
        description
        heroVideos
        heroImages {
          image
          caption
        }
        images
        category
      }
    }
  }
`
