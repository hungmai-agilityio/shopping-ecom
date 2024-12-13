import { Meta, StoryObj } from '@storybook/react';

// Components
import { UserDropdown } from '@/ui/components';

// Components

const meta: Meta<typeof UserDropdown> = {
  component: UserDropdown,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    cartLength: {
      description:
        'Set the number of products in the cart, It can only be rendered on a tablet or mobile screen'
    },
    wishlistLength: {
      description:
        'Set the number of products in the wishlist, It can only be rendered on a tablet or mobile screen'
    }
  }
};

export default meta;

type Story = StoryObj<typeof UserDropdown>;

export const Default: Story = {
  args: {
    cartLength: 0,
    wishlistLength: 0
  }
};
