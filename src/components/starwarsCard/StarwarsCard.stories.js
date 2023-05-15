import primera from '@imageCardsMedium/1.jpeg'
import StarwarsCard from './StarwarsCard'

export default {
  title: 'Card/StarwarsCard',
  component: StarwarsCard,
  argTypes: {
    imagen: { control: 'text' },
    text: { control: 'text' },
  },
}

export const Default = {
  args: {
    imagen: primera,
    text: 'Primera película',
  },
}
