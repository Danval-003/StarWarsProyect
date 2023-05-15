import RadButton from './RadButton'

export default {
  title: 'RadButton',
  component: RadButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'clicked' },
    type: {
      options: ['yellow', 'red', ''],
      control: { type: 'select' },
    },
  },
}

export const Default = {
  args: {
    label: 'Button',
    type: '',
  },
}

export const Yellow = {
  args: {
    label: 'Button',
    type: 'yellow',
  },
}

export const Red = {
  args: {
    label: 'Button',
    type: 'red',
  },
}
