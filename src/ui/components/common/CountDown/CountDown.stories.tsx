import { Meta, StoryObj } from '@storybook/react';

// Components
import { Countdown } from '@/ui/components';

const meta: Meta<typeof Countdown> = {
  component: Countdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    days: {
      description: 'Days are counting down'
    },
    hours: {
      description: 'Hours are counting down'
    },
    minutes: {
      description: 'Minutes are counting down'
    },
    seconds: {
      description: 'Seconds are counting down'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Countdown>;

export const primary: Story = {
  args: {
    days: 3,
    hours: 12,
    minutes: 10,
    seconds: 5
  }
};
