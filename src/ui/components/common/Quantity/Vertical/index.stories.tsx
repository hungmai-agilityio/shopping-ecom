import type { Meta, StoryObj } from '@storybook/react';

// Components
import { QuantityVertical } from '@/ui/components';

const meta: Meta<typeof QuantityVertical> = {
  component: QuantityVertical,
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

type Story = StoryObj<typeof QuantityVertical>;

export const Primary: Story = {
  args: {
    value: 2,
    min: 1,
    max: 1000,
    onChange: (value: number) => console.log(value)
  }
};
