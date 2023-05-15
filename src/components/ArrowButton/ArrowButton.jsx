import React from 'react'
import PropTypes from 'prop-types'
import {
  arrowButton,
  isActive,
  horizontalInvert,
  verticalInvert,
  normal,
  isNotAct,
} from './ArrowButton.module.css'

const ArrowButton = ({ onClick, isAct, setAct, invert, left, show }) => {
  const handleClick = () => {
    onClick()
    setAct(isAct)
  }

  return (
    <div>
      {show ? (
        <button
          className={`${arrowButton} ${isAct ? isActive : isNotAct} ${
            left ? verticalInvert : null
          } 
      ${invert ? horizontalInvert : normal}`}
          type='button'
          aria-label='Mover Slider'
          onClick={() => handleClick()}
        />
      ) : null}
    </div>
  )
}

ArrowButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isAct: PropTypes.bool.isRequired,
  setAct: PropTypes.func.isRequired,
  invert: PropTypes.bool,
  left: PropTypes.bool,
  show: PropTypes.bool,
}

ArrowButton.defaultProps = {
  invert: false,
  left: false,
  show: true,
}

export default ArrowButton
