import { Meta, StoryObj } from '@storybook/react';

// Components
import { Tag } from '@/ui/components';

const meta: Meta<typeof Tag> = {
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    label: {
      description: 'The label text to be displayed inside the tag'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    label: 'This Month'
  }
};
