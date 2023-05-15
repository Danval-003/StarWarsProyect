import React from 'react'
import PropTypes from 'prop-types'
import {
  cardContainer,
  light,
  imgContainer,
  cardBottom,
  textContainer,
  carder,
} from './StarwarsCard.module.css'

const StarwarsCard = ({ imagen, text }) => (
  <div
    className={carder}
    style={{
      width: '402.6px',
    }}
  >
    <img src={imagen} alt='cardImage' className={imgContainer} />
    <div className={cardContainer}>
      <div className={light} />
      <div className={textContainer}>{text}</div>
    </div>
    <div className={cardBottom} />
  </div>
)

StarwarsCard.propTypes = {
  imagen: PropTypes.string.isRequired,
  text: PropTypes.string,
}

StarwarsCard.defaultProps = {
  text: '',
}

export default StarwarsCard
