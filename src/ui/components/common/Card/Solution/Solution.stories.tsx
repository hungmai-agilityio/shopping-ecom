import { Meta, StoryObj } from '@storybook/react';

// Components
import { CardSolution } from '@/ui/components';

const meta: Meta<typeof CardSolution> = {
  component: CardSolution,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    title: {
      description: 'Title for card',
      control: 'text'
    },
    desc: {
      description: 'Description describes the card content',
      control: 'text'
    },
    src: {
      description: 'Link image',
      control: 'text'
    },
    alt: {
      description:
        'Describes the content of the image when the image is corrupted',
      control: 'text'
    },
    isBorder: {
      description: 'Set render for card with border or not',
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof CardSolution>;

export const primary: Story = {
  args: {
    title: 'Card Title',
    desc: 'Description card',
    src: '/icon_bag.svg',
    alt: 'icon bags'
  }
};

export const hasBorder: Story = {
  args: {
    title: 'Card Title',
    desc: 'Description card',
    src: '/icon_bag.svg',
    alt: 'icon bags',
    isBorder: true
  }
};
