import React from 'react'
import PageWrapper from '~/src/components/page-wrapper'
import StyleguideTypography from '~/src/components/styleguide-typography'

const IndexPage = ({ location }) => (
  <PageWrapper heading={'Typography / spacing'} location={location}>
    <StyleguideTypography />
  </PageWrapper>
)

export default IndexPage
