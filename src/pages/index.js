import React from 'react'
import PageWrapper from '~/src/components/pageWrapper'
import Heading from '~/src/components/heading'
import StyleguideTypography from '~/src/components/styleguide-typography'

const IndexPage = () => (
  <PageWrapper>
    <Heading element={'h1'} marginTop={6} marginBottom={6} size={4}>
      Typography / spacing
    </Heading>
    <StyleguideTypography />
  </PageWrapper>
)

export default IndexPage
