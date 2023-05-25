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
    itemsToShow: { control: 'number' },
  },
}

const imageList = () => {
  const size = imagesTotry.length
  const listImg = []

  for (let i = 0; i < size; i += 3) {
    listImg.push(
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          height: 'max-content',
        }}
      >
        <StarwarsCard imagen={imagesTotry[i].img} text={imagesTotry[i].text} />
        <StarwarsCard
          imagen={imagesTotry[i + 1].img}
          text={imagesTotry[i + 1].text}
        />
        <StarwarsCard
          imagen={imagesTotry[i + 2].img}
          text={imagesTotry[i + 2].text}
        />
      </div>,
    )
  }
  return listImg
}

export const Default = () => (
  <Carousel infinite={false} invert={false}>
    {imageList().map(value => value)}
  </Carousel>
)

export const Infinite = () => (
  <Carousel infinite invert={false}>
    {imageList().map(value => value)}
  </Carousel>
)
