import { Meta, StoryObj } from '@storybook/react';
import ToastMessage from '.';
import { POSITION, STATUS } from '@/constants';

const meta: Meta<typeof ToastMessage> = {
  component: ToastMessage,
  tags: ['autodocs'],
  argTypes: {
    status: {
      description:
        'Set status for Toast message, it will show UI with corresponding styles',
      control: 'radio',
      options: Object.values(STATUS)
    },
    message: {
      description: 'Message to show'
    },
    duration: {
      description: 'Set the amount of time for Toast to be invisible'
    },
    position: {
      description: 'Set the position for Toast to display',
      control: 'radio',
      options: Object.values(POSITION)
    }
  }
};

export default meta;

type Story = StoryObj<typeof ToastMessage>;

export const success: Story = {
  args: {
    status: STATUS.SUCCESS,
    message: 'show message success',
    position: POSITION.TOP_RIGHT,
    duration: 100000
  },
  render: (args) => (
    <div className="w-[500px] h-[200px]">
      <ToastMessage {...args} />
    </div>
  )
};

export const error: Story = {
  args: {
    status: STATUS.ERROR,
    message: 'show message error',
    position: POSITION.TOP_RIGHT,
    duration: 100000
  },
  render: (args) => (
    <div className="w-[500px] h-[200px]">
      <ToastMessage {...args} />
    </div>
  )
};

export const warning: Story = {
  args: {
    status: STATUS.WARNING,
    message: 'show message warning',
    position: POSITION.TOP_RIGHT,
    duration: 100000
  },
  render: (args) => (
    <div className="w-[500px] h-[200px]">
      <ToastMessage {...args} />
    </div>
  )
};
