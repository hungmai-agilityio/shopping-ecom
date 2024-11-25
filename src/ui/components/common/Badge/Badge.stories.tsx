import { Meta, StoryObj } from '@storybook/react';

// Components
import { Badge, Icon } from '@/ui/components';

const meta: Meta<typeof Badge> = {
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    quantity: {
      description: 'Display quantity',
      control: 'number'
    },
    children: {
      description: 'Content or icon show badge',
      control: 'text'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const primary: Story = {
  args: {
    quantity: 0,
    children: (
      <Icon
        src="/cart.svg"
        alt="cart"
        width={24}
        height={24}
        onClick={() => alert('Click badge')}
      />
    )
  }
};

export const haveQuantity: Story = {
  args: {
    quantity: 10,
    children: (
      <Icon
        src="/cart.svg"
        alt="cart"
        width={24}
        height={24}
        onClick={() => alert('Click badge')}
      />
    )
  }
};

export const maxQuantity: Story = {
  args: {
    quantity: 1000,
    children: (
      <Icon
        src="/cart.svg"
        alt="cart"
        width={24}
        height={24}
        onClick={() => alert('Click badge')}
      />
    )
  }
};
