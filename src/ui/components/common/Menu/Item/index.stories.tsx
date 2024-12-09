import { Meta, StoryObj } from '@storybook/react';

// Components
import { MenuItem } from '@/ui/components';

const meta: Meta<typeof MenuItem> = {
  component: MenuItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    image: {
      description: 'Image to render'
    },
    name: {
      description:
        'Describes the image and shows if the image is corrupted and set item name'
    },

    onClick: {
      description: 'Handle the event when clicking on the item'
    }
  }
};

export default meta;

type Story = StoryObj<typeof MenuItem>;

export const primary: Story = {
  args: {
    image: '/user-white.svg',
    name: 'user profile',
    onClick: () => {
      alert(123);
    }
  }
};
