import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { toped } from '@images'
import ArrowButton from '../ArrowButton'
import {
  carousel,
  carouselInner,
  carouselSlide,
  cardsBottom,
  miniCard,
  act,
  acted,
  bar,
  cardsBottomed,
} from './Carousel.module.css'

const CardMonst = ({ slide, setPosition }) => (
  <div>
    <div className={cardsBottom}>
      {toped.map(top => (
        <div className={`${miniCard} ${top.number === slide ? act : ''}`}>
          <div className={`${bar} ${top.number === slide ? acted : ''}`} />
          <img src={top.image} alt='' />
        </div>
      ))}
    </div>
    <div className={cardsBottomed}>
      {toped.map(top => (
        <div
          className={top.number === slide ? act : ''}
          onClick={() => setPosition(top.number)}
          onKeyDown={event => {
            if (event.key === 'Enter') {
              setPosition(top.number)
            }
          }}
          role='button'
          tabIndex={0}
        >
          <p>{top.text}</p>
        </div>
      ))}
    </div>
  </div>
)

CardMonst.propTypes = {
  slide: PropTypes.number.isRequired,
  setPosition: PropTypes.func.isRequired,
}

const Carousel = ({ children, invert, infinite, timer }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isNextArrowActive, setNextArrowActive] = useState(true)
  const [showPrev, setShowPrev] = useState(false)
  const [showNext, setShowNext] = useState(true)
  const [mounted, setMounted] = useState(false)

  const handleNext = () => {
    setShowNext(infinite || currentSlide !== children.length - 2)
    setShowPrev(infinite || currentSlide !== -1)
    setCurrentSlide(prevSlide =>
      prevSlide === children.length - 1 ? 0 : prevSlide + 1,
    )
  }
  const handlePrev = () => {
    setShowNext(infinite || currentSlide !== children.length)
    setShowPrev(infinite || currentSlide !== 1)
    setCurrentSlide(prevSlide =>
      prevSlide === 0 ? children.length - 1 : prevSlide - 1,
    )
  }

  useEffect(() => {
    if (timer) {
      const movedInterval = setInterval(() => {
        handlePrev()
        if (!isNextArrowActive || !timer) {
          clearInterval(movedInterval)
        }
      }, 5000)
    }
  }, [mounted])

  useEffect(() => {
    setMounted(timer)
  }, [])

  return (
    <div className={carousel}>
      <div
        className={carouselInner}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {children.map(child => (
          <div className={carouselSlide}>{child}</div>
        ))}
      </div>
      <ArrowButton
        onClick={handleNext}
        isAct={isNextArrowActive}
        setAct={() => setNextArrowActive(true)}
        invert={invert}
        show={showNext || infinite}
      />
      <ArrowButton
        onClick={handlePrev}
        isAct={!isNextArrowActive}
        setAct={() => setNextArrowActive(false)}
        left
        invert={invert}
        show={showPrev || infinite}
      />
      {timer ? (
        <CardMonst
          slide={currentSlide}
          setPosition={value => {
            setCurrentSlide(value)
          }}
        />
      ) : null}
    </div>
  )
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  infinite: PropTypes.bool,
  invert: PropTypes.bool,
  timer: PropTypes.bool,
}

Carousel.defaultProps = {
  infinite: false,
  invert: false,
  timer: false,
}

export default Carousel
