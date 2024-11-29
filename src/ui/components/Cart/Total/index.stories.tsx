import { Meta, StoryObj } from '@storybook/react';

// Components
import { CartTotal } from '@/ui/components';

const meta: Meta<typeof CartTotal> = {
  component: CartTotal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    subTotal: {
      description: 'Amount of the order'
    },
    onCheckout: {
      description: 'Handle checkout'
    },
    isDisable: {
      description: 'Set disable button',
      control: 'boolean'
    }
  }
};

export default meta;

type Story = StoryObj<typeof CartTotal>;

export const primary: Story = {
  args: {
    subTotal: 125,
    onCheckout: () => {
      alert('Checkout !!!!');
    }
  }
};

export const disabledButton: Story = {
  args: {
    subTotal: 125,
    onCheckout: () => {
      alert('Checkout !!!!');
    },
    isDisable: true
  }
};
