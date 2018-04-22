import React from 'react'
import Link from 'gatsby-link'
import spacing from '~/src/settings/spacing'
import { interUIStyles, vollkornStyles } from '~/src/settings/typography'
const IndexPage = () => (
  <div>
    {interUIStyles.map((item, index) => (<p key={index} style={item}>Lorem ipsum</p>))}
    {vollkornStyles.map((item, index) => (<p key={index} style={item}>Lorem ipsum</p>))}
  </div>
)

export default IndexPage
