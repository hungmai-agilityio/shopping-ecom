import { Meta, StoryObj } from '@storybook/react';

// Components
import { Tab } from '@/ui/components';

const meta: Meta<typeof Tab> = {
  component: Tab,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    value: {
      description: 'Tab value to check select'
    },
    selected: {
      description: 'Tab that is currently selected'
    },
    title: {
      description: 'Tab name'
    },
    onClick: {
      description: 'Callback when color changes',
      action: 'colorChanged'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Tab>;

export const primary: Story = {
  args: {
    value: '1',
    title: 'Item one'
  }
};

export const active: Story = {
  args: {
    value: '1',
    title: 'Item one',
    selected: '1'
  }
};
