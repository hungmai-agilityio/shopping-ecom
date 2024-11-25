import { Meta, StoryObj } from '@storybook/react';

// Components
import { CardPromo } from '@/ui/components';

const meta: Meta<typeof CardPromo> = {
  component: CardPromo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    src: {
      description: 'Link image to render',
      control: 'text'
    },
    alt: {
      description: 'Describes the image and shows if the image is corrupted',
      control: 'text'
    },
    width: {
      description: 'Width for images',
      control: 'number'
    },
    height: {
      description: 'Height for images',
      control: 'number'
    },
    children: {
      description: 'Content is descriptive or promotional',
      control: 'text'
    }
  }
};

export default meta;
type Story = StoryObj<typeof CardPromo>;

export const primary: Story = {
  args: {
    src: '/arrival-2.png',
    alt: "Women's Collections",
    width: 570,
    height: 284,
    children: <p>content</p>
  }
};
