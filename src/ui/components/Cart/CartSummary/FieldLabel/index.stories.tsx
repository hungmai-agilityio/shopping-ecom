import { Meta, StoryObj } from '@storybook/react';

// Components
import { FieldLabel } from '@/ui/components';

const meta: Meta<typeof FieldLabel> = {
  component: FieldLabel,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: "Item's title"
    },
    children: {
      description: 'Content of the cart item'
    },
    underline: {
      description: 'The option renders a strikethrough line below the item',
      control: 'boolean'
    }
  }
};

export default meta;

type Story = StoryObj<typeof FieldLabel>;

export const primary: Story = {
  args: {
    children: '$1253',
    title: 'Subtotal'
  }
};

export const notUnderline: Story = {
  args: {
    children: '$1253',
    title: 'Total',
    underline: false
  }
};
