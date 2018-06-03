import React from 'react'
import PropTypes from 'prop-types'
import PageWrapper from '~/src/components/page-wrapper'

const ThisPage = ({ transition }) => (
  <PageWrapper transition={transition} heading={'Home'} />
)

ThisPage.propTypes = {
  transition: PropTypes.object,
}

export default ThisPage
