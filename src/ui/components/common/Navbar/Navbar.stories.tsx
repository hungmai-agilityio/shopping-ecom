import type { Meta, StoryObj } from '@storybook/react';

// Constants
import { navItems } from '@/constants';

// Components
import { Navbar } from '@/ui/components';

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    items: {
      description: 'List item to render Navbar',
      control: 'object'
    },
    styles: {
      description: 'Custom styles CSS for the navbar',
      control: 'text'
    },
    onClick: {
      description: 'Function to handle onClick event for each item',
      action: 'clicked'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const primary: Story = {
  args: {
    items: navItems,
    styles: 'md:flex gap-7 block'
  }
};
