import { Meta, StoryObj } from '@storybook/react';

// Components
import Button from '@/ui/components/common/Button';

// Constants
import { SIZE, TYPE } from '@/constants';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    children: {
      description: 'Name of the button or Content inside '
    },
    variant: {
      description: 'Set type optional for Button'
    },
    size: {
      description: 'Set size optional for Button'
    },
    onClick: {
      description: 'Handle the event when clicking on the button'
    },
    disabled: {
      description: 'Set disabled button'
    },
    styles: {
      description: 'Set styles for buttons'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Submit',
    variant: TYPE.PRIMARY,
    onClick: () => alert('submit'),
    styles: 'w-[156px]'
  }
};

export const Secondary: Story = {
  args: {
    children: 'Submit',
    variant: TYPE.SECOND,
    onClick: () => alert('submit'),
    styles: 'w-[156px]'
  }
};

export const Third: Story = {
  args: {
    children: 'Forgot password',
    variant: TYPE.THIRD,
    size: SIZE.SMALL
  }
};

export const Large: Story = {
  parameters: {
    layout: 'left'
  },
  args: {
    children: 'Submit',
    variant: TYPE.PRIMARY,
    size: SIZE.LARGE,
    onClick: () => alert('submit')
  }
};

export const Disabled: Story = {
  args: {
    children: 'Send',
    disabled: true,
    styles: 'w-[156px]'
  }
};
