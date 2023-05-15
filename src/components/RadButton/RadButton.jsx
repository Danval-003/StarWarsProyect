import React from 'react'
import PropTypes from 'prop-types'
import { radButton, yellowed, reded } from './RadButton.module.css'

const RadButton = ({ label, onClick, type }) => {
  const classEspecial = () => {
    switch (type) {
      case 'yellow':
        return yellowed
      case 'red':
        return reded
      default:
        return null
    }
  }

  return (
    <button
      onClick={onClick}
      className={`${radButton} ${classEspecial()}`}
      type='button'
    >
      {label}
    </button>
  )
}

RadButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
}

RadButton.defaultProps = {
  type: 'yellow',
}

export default RadButton
