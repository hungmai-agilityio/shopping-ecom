import { Meta, StoryObj } from '@storybook/react';

// Components
import { QuantityHorizontal } from '@/ui/components';

const meta: Meta<typeof QuantityHorizontal> = {
  component: QuantityHorizontal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true
    }
  },
  argTypes: {
    value: {
      description: 'The quantity value'
    },
    min: {
      description: 'The minimum quantity value'
    },
    max: {
      description: 'The maximum quantity value'
    },
    onChange: {
      description: 'Callback function when the quantity value changes'
    }
  }
};

export default meta;

type Story = StoryObj<typeof QuantityHorizontal>;

export const primary: Story = {
  args: {
    value: 2,
    min: 1,
    max: 10
  }
};
