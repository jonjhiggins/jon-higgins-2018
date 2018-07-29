import React from 'react'
import PropTypes from 'prop-types'
import PageWrapper from '~/src/components/page-wrapper'
import HomeAnimation from '~/src/components/home-animation'

const ThisPage = ({ transition, location }) => {
  return (
    <PageWrapper transition={transition} location={location}>
      <HomeAnimation />
    </PageWrapper>
  )
}

ThisPage.propTypes = {
  transition: PropTypes.object,
}

export default ThisPage
