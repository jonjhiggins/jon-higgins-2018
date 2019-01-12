import React from 'react'
import PropTypes from 'prop-types'
import PageWrapper from '~/src/components/page-wrapper'
import HomeAnimation from '~/src/components/home-animation'

const ThisPage = ({ location }) => {
  return (
    <PageWrapper location={location}>
      <HomeAnimation />
    </PageWrapper>
  )
}

ThisPage.propTypes = {
  location: PropTypes.object,
}

export default ThisPage
