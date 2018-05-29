import React from 'react'
import PropTypes from 'prop-types'
import Page from '~/src/components/page'

const ThisPage = ({ transition }) => (
  <Page transition={transition} heading={'Home'} />
)

ThisPage.propTypes = {
  transition: PropTypes.object,
}

export default ThisPage
