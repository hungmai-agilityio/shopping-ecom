import { Meta, StoryObj } from '@storybook/react';

// Components
import { UserDropdown } from '@/ui/components';

// Components

const meta: Meta<typeof UserDropdown> = {
  component: UserDropdown,
  parameters: {
    layout: 'centered'
  }
};

export default meta;

type Story = StoryObj<typeof UserDropdown>;

export const Default: Story = {
  args: {}
};
