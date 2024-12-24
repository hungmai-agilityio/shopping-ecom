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
    img: {
      description:
        'The src attribute for the img element.(link image to render)',
      control: 'text'
    },
    name: {
      description: 'Describes the image and shows if the image is corrupted',
      control: 'text'
    },
    width: {
      description: 'Set width for images',
      control: 'number'
    },
    height: {
      description: 'Set height for images',
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
    img: '/arrival-2.png',
    name: "Women's Collections",
    width: 432,
    height: 284,
    children: <p>content</p>
  }
};
