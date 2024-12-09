import { Meta, StoryObj } from '@storybook/react';

// Components
import { Menu, MenuItem } from '@/ui/components';

const meta: Meta<typeof Menu> = {
  component: Menu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true
    }
  },
  argTypes: {
    children: {
      description: 'Content for menu'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const primary: Story = {
  args: {
    children: (
      <div>
        <MenuItem image="/user-white.svg" name="user profile" link="/profile" />
        <MenuItem image="/logout.svg" name="logout" link="/sign-in" />
      </div>
    )
  }
};
