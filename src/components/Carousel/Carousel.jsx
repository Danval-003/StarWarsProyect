import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ArrowButton from '../ArrowButton'
import { sliderContainer, carousel } from './Carousel.module.css'

const Carousel = ({
  itemsToShow,
  edgeDistance,
  children,
  infinite,
  invert,
  dots,
}) => {
  const [isNextArrowActive, setNextArrowActive] = useState(true)
  const [index, setIndex] = useState(0)
  const [showedPrev, setShowedPrev] = useState(false)
  const [showedNext, setShowedNext] = useState(true)

  const handleInifite = value => {
    setIndex(index + value)
  }

  useEffect(() => {
    console.log(index)
    setShowedPrev(index !== 0 || infinite)
    setShowedNext(
      index !== React.Children.count(children) - itemsToShow || infinite,
    )
  }, [index])

  const settings = {
    dots,
    infinite,
    speed: 500,
    slidesToShow: itemsToShow,
    slidesToScroll: itemsToShow,
    centerPadding: `${edgeDistance}px ${edgeDistance + 40}px`,
    nextArrow: (
      <ArrowButton
        onClick={() => handleInifite(itemsToShow)}
        isAct={isNextArrowActive}
        setAct={() => setNextArrowActive(true)}
        invert={invert}
        show={showedNext}
      />
    ),
    prevArrow: (
      <ArrowButton
        onClick={() => handleInifite(-itemsToShow)}
        isAct={!isNextArrowActive}
        setAct={() => setNextArrowActive(false)}
        left
        invert={invert}
        show={showedPrev}
      />
    ),
  }

  return (
    <div
      className={sliderContainer}
      style={{
        width: `${edgeDistance}px`,
      }}
    >
      <Slider
        dots={settings.dots}
        infinite={settings.infinite}
        speed={settings.speed}
        slidesToShow={settings.slidesToShow}
        slidesToScroll={settings.slidesToScroll}
        centerPadding={settings.centerPadding}
        nextArrow={settings.nextArrow}
        prevArrow={settings.prevArrow}
        className={carousel}
      >
        {React.Children.map(children, child => (
          <div>{child}</div>
        ))}
      </Slider>
    </div>
  )
}

Carousel.propTypes = {
  itemsToShow: PropTypes.number.isRequired,
  edgeDistance: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  infinite: PropTypes.bool,
  invert: PropTypes.bool,
  dots: PropTypes.bool,
}

Carousel.defaultProps = {
  infinite: true,
  dots: false,
  invert: false,
}

export default Carousel
