import ArrowButton from './ArrowButton'

export default {
  title: 'Carousel/ArrowButton',
  component: ArrowButton,
  argTypes: {
    onClick: { action: 'clicked' },
    isAct: { control: 'boolean' },
    setAct: { action: 'setAct' },
    invert: { control: 'boolean' },
    left: { control: 'boolean' },
  },
}

export const Default = {
  args: {
    isAct: false,
  },
}

export const Invert = {
  args: {
    isAct: false,
    invert: true,
  },
}

export const Left = {
  args: {
    isAct: false,
    left: true,
  },
}
