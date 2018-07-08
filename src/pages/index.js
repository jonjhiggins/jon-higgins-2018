import React from 'react'
import PropTypes from 'prop-types'
import PageWrapper from '~/src/components/page-wrapper'

const ThisPage = ({ transition, location }) => {
  return (
    <PageWrapper transition={transition} location={location} heading={'Home'} />
  )
}

ThisPage.propTypes = {
  transition: PropTypes.object,
}

export default ThisPage
