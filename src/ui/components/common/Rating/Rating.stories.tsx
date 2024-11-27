import type { Meta, StoryObj } from '@storybook/react';

// Components
import { Rating } from '@/ui/components';

const meta: Meta<typeof Rating> = {
  component: Rating,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    icon: {
      description: 'Link image for render icon rating',
      control: 'text'
    },
    count: {
      description: 'Number of rating icons to be displayed (max = 5)',
      control: 'number'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Rating>;

export const primary: Story = {
  args: {
    count: 5,
    icon: '/star.svg'
  }
};

export const customIcon: Story = {
  args: {
    count: 5,
    icon: '/heart.svg'
  }
};
