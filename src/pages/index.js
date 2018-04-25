import React from 'react'

import Heading from '~/src/components/heading'
import { rem } from '~/src/utils'
import StyleguideTypography from '~/src/components/styleguide-typography'

const IndexPage = () => (
  <div style={{margin: `0 ${rem(50)}`}}>
    <Heading element={'h1'} marginTop={6} marginBottom={6} size={4}>Typography / spacing</Heading>
    <StyleguideTypography/>
  </div>
)

export default IndexPage
