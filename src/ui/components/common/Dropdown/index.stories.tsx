import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

// Components
import { Dropdown, Icon } from '@/ui/components';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    styles: {
      description: 'Custom css for dropdown container',
      control: 'text'
    },
    menuButton: {
      description: 'Label for click open content'
    },
    children: {
      description: 'Content inside the dropdown',
      control: 'text'
    },
    isOpen: {
      description: 'Controls visibility of the dropdown',
      control: 'boolean'
    },
    setVisible: {
      description: 'Function to toggle dropdown visibility'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setVisible] = useState<boolean>(false);

    return (
      <Dropdown {...args} isOpen={isOpen} setVisible={setVisible}>
        <p>{args.children}</p>
      </Dropdown>
    );
  },
  args: {
    menuButton: <Icon src="/arrow-bot.svg" alt="icon" width={24} height={24} />,
    children: 'Content inside the dropdown'
  }
};
