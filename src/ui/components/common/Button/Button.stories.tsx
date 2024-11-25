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
      description: 'Name of the button or Content inside'
    },
    variant: {
      description: 'Set type optional for Button',
      control: 'radio',
      options: Object.values(TYPE)
    },
    size: {
      description: 'Set size optional for Button',
      control: 'radio',
      options: Object.values(SIZE)
    },
    onClick: {
      description: 'Handle the event when clicking on the button'
    },
    disabled: {
      description: 'Set disabled button',
      control: 'boolean'
    },
    styles: {
      description: 'Set styles for buttons'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const basicButton: Story = {
  args: {
    children: 'Submit',
    variant: TYPE.PRIMARY,
    onClick: () => alert('submit'),
    styles: 'w-[156px]'
  }
};

export const outLinedButton: Story = {
  args: {
    children: 'Submit',
    variant: TYPE.SECOND,
    onClick: () => alert('submit'),
    styles: 'w-[156px]'
  }
};

export const textButton: Story = {
  args: {
    children: 'Forgot password',
    variant: TYPE.THIRD,
    size: SIZE.SMALL
  }
};

export const sizeButton: Story = {
  parameters: {
    layout: 'left'
  },
  render: () => (
    <div className="flex flex-col gap-5">
      <Button variant={TYPE.PRIMARY} size={SIZE.SMALL} styles="w-[143px]">
        Submit
      </Button>
      <Button variant={TYPE.PRIMARY} size={SIZE.MEDIUM} styles="w-[240px]">
        Submit
      </Button>
      <Button variant={TYPE.PRIMARY} size={SIZE.LARGE}>
        Submit
      </Button>
    </div>
  )
};

export const Disabled: Story = {
  args: {
    children: 'Send',
    disabled: true,
    styles: 'w-[156px]'
  }
};
