import { Meta, StoryObj } from '@storybook/react';
import mockRouter from 'next-router-mock';

// Components
import { Breadcrumb } from '@/ui/components';

const meta: Meta<typeof Breadcrumb> = {
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true
    }
  },
  tags: ['autodocs'],
  argTypes: {
    separator: {
      description: 'Character or icon used to separate breadcrumb items',
      control: 'text'
    },
    color: {
      description: 'Set color for text',
      control: 'text'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Primary: Story = {
  args: {
    separator: '/'
  },
  decorators: [
    (Story) => {
      mockRouter.push('/test');
      return <Story />;
    }
  ]
};

export const CustomSeparator: Story = {
  args: {
    separator: '>'
  },
  decorators: [
    (Story) => {
      mockRouter.push('/shop/order');
      return <Story />;
    }
  ]
};

export const CustomColor: Story = {
  args: {
    color: 'text-red-500'
  },
  decorators: [
    (Story) => {
      mockRouter.push('/shop/product/order');
      return <Story />;
    }
  ]
};
