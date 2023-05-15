import React from 'react'
import imagesTotry from '@imageCardsMedium'
import Carousel from './Carousel'
import StarwarsCard from '../starwarsCard'

export default {
  title: 'Carousel/Carousel',
  component: Carousel,
  argTypes: {
    infinite: { control: 'boolean' },
    invert: { control: 'boolean' },
    dots: { control: 'boolean' },
  },
}

export const Default = () => (
  <Carousel itemsToShow={3} edgeDistance={1500} infinite={false} invert={false}>
    {imagesTotry.map(item => (
      <StarwarsCard imagen={item.img} text={item.text} />
    ))}
  </Carousel>
)

export const Infinite = () => (
  <Carousel itemsToShow={3} edgeDistance={1500} infinite invert={false}>
    {imagesTotry.map(item => (
      <StarwarsCard imagen={item.img} text={item.text} />
    ))}
  </Carousel>
)
