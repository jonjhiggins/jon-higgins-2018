import React from 'react'
import PageWrapper from '~/src/components/pageWrapper'
import Heading from '~/src/components/heading'

const Page = () => (
  <PageWrapper>
    <Heading element={'h1'} marginTop={6} marginBottom={6} size={4}>
      Home
    </Heading>
  </PageWrapper>
)

export default Page
