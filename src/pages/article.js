import React from 'react'
import styled from 'react-emotion'

import PageWrapper from '~/src/components/page-wrapper'
import HeadingBackground from '~/src/components/heading-background'
import Heading from '~/src/components/heading'
import { BASELINE } from '~/src/settings/typography'
import { BREAKPOINTS } from '~/src/settings/breakpoints'
import { GRID_GUTTER_REM } from '~/src/settings/grid'
import COLOURS from '~/src/settings/colours'
import { rem } from '~/src/utils'

const Shift = styled('div')`
  position: relative;
  left: -${GRID_GUTTER_REM.S};

  ${BREAKPOINTS.M_MIN} {
    left: -${GRID_GUTTER_REM.M};
  }
`

const ArticleWrapper = styled('div')`
  ${BREAKPOINTS.M_MIN} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: ${GRID_GUTTER_REM.M};
  }
`

const Article = styled('div')`
  border: ${rem(2)} solid ${COLOURS.PRIMARY};
  padding-top: ${rem(BASELINE * 15 - 2)};
  padding-bottom: ${rem(BASELINE * 11)};
  margin-top: -${rem(BASELINE * 5.5)};
  margin-bottom: ${rem(BASELINE * 4)};
  ${BREAKPOINTS.M_MIN} {
    grid-column: 1 / 5;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: ${GRID_GUTTER_REM.M};
  }
`

const ArticleContent = styled('div')`
  ${BREAKPOINTS.M_MIN} {
    grid-column: 2 / 4;
  }
`

const IndexPage = () => (
  <PageWrapper>
    <HeadingBackground element={'h1'} marginBottom={6}>
      Propre, ouvert, intelligent.
    </HeadingBackground>
    <Shift>
      <Heading element={'h2'} sizeS={2} sizeM={4} marginBottom={0} light={true}>
        Comprendre les enquêtes de laboratoire
      </Heading>
    </Shift>
    <ArticleWrapper>
      <Article>
        <ArticleContent>
          <Heading element={'h3'} sizeS={2} sizeM={4}>
            Hyperlink.
          </Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem
            est, posuere quis euismod eget, convallis a velit. Etiam molestie,
            justo ut consequat cursus, libero purus dictum nunc, id cursus augue
            nisl at libero. Nunc commodo enim et lorem varius, ac aliquam elit
            viverra. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Comprendre les enquêtes de laboratoire.
          </p>
          <p>
            Fusce felis velit, eleifend maximus ante nec, varius commodo leo.
            Nam porta elementum leo a fringilla. Sed ultricies consequat
            placerat. Vestibulum eu nibh a arcu semper dignissim. Nulla mollis,
            diam in mattis facilisis, orci libero scelerisque mauris, non
            aliquet ipsum purus a arcu. Interdum et malesuada fames ac ante
            ipsum primis in faucibus.
          </p>

          <Heading element={'h3'} sizeS={2} sizeM={3}>
            Comprendre les enquêtes de laboratoire.
          </Heading>
          <p>
            Vivamus id nibh vitae enim blandit consectetur. Nam volutpat, nunc
            at finibus ullamcorper, dolor metus molestie dui, vel vehicula
            sapien tellus non ligula. Mauris consequat lobortis magna id
            rhoncus. Cras ac est sed est ultricies aliquam. Fusce gravida nulla
            nec metus laoreet fermentum sit amet sit amet nisl. Mauris mollis ut
            urna ut condimentum. Curabitur finibus eros a sodales semper.
            Phasellus nibh nibh, bibendum quis gravida vitae, tempor ut nibh.
            Duis mollis feugiat lacus, vel facilisis lacus egestas at. Donec
            nulla enim, maximus ut mi at, fringilla iaculis purus. Comprendre
            les enquêtes de laboratoire. Aenean gravida maximus ex vitae
            eleifend. Aenean cursus dignissim magna, sed eleifend est accumsan
            eu. Maecenas lectus ex, porttitor ac risus et, fringilla congue
            mauris. Sed eu rhoncus odio. Nam ac dictum odio, eget iaculis metus.
            Ut tristique posuere turpis, in gravida arcu tempor sed. Curabitur
            lobortis neque eu tortor vehicula pellentesque.
          </p>
        </ArticleContent>
      </Article>
    </ArticleWrapper>
  </PageWrapper>
)

export default IndexPage
