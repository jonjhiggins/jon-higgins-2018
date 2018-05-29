import React from 'react'
import PageWrapper from '~/src/components/pageWrapper'
import Heading from '~/src/components/heading'

const Page = ({ transition, heading }) => (
  <div style={transition && transition.style}>
    <PageWrapper>
      <Heading element={'h1'} marginTop={6} marginBottom={6} size={4}>
        {heading}
      </Heading>
    </PageWrapper>
  </div>
)

export default Page
