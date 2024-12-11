import { Meta, StoryObj } from '@storybook/react';

// Components
import { Modal } from '@/ui/components';

const meta: Meta<typeof Modal> = {
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    btnSecond: {
      description: 'name of Button confirm',
      control: 'text'
    },
    children: {
      description: 'Content in modal'
    },
    isOpen: {
      description: 'Open modal',
      control: 'boolean'
    },
    onClose: {
      description: 'Handle to close modal'
    },
    onClick: {
      description: 'Handle the action for the confirm button'
    },
    title: {
      description: 'Title for modal'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const primary: Story = {
  args: {
    onClose: () => alert('Close modal'),
    children: 'This is content',
    isOpen: true,
    title: 'Modal Title'
  },
  render: (args) => (
    <div className="w-[500px] h-[500px]">
      <Modal {...args} />
    </div>
  )
};

export const confirm: Story = {
  args: {
    onClose: () => alert('Close modal'),
    children: 'This is content',
    isOpen: true,
    title: 'Modal Title',
    btnSecond: 'Confirm',
    onClick: () => alert('Confirm')
  },
  render: (args) => (
    <div className="w-[500px] h-[500px]">
      <Modal {...args} />
    </div>
  )
};
