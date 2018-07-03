import ANIMATION from '~/src/settings/animation'

const getTransitionStyles = timeout => {
  return {
    entering: {
      opacity: 0,
    },
    entered: {
      transition: `opacity ${timeout}ms ${ANIMATION.EASING_OUT}`,
      opacity: 1,
    },
    exiting: {
      transition: `opacity ${timeout}ms ${ANIMATION.EASING_IN}`,
      opacity: 0,
    },
  }
}

const getTransitionStyle = ({ timeout, status }) =>
  getTransitionStyles(timeout)[status]

export default getTransitionStyle
