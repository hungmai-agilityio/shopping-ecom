import type { Meta, StoryObj } from '@storybook/react';

// Components
import Logo from '@/ui/components/common/Logo';

const meta: Meta<typeof Logo> = {
  component: Logo,
  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true
    }
  },

  argTypes: {
    url: {
      description: 'path to a certain location'
    },
    color: {
      description: 'Text color class (ex: `text-red-500`, `text-blue-700`)'
    },
    label: {
      description: 'Logo name'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const primary: Story = {
  args: {}
};

export const customColor: Story = {
  args: {
    color: 'text-red-500'
  }
};

export const customLabel: Story = {
 render: () => (
  <div className='flex gap-10'>
    <Logo label='Apple'/>
    <Logo label='Android' color='text-green-500'/>
  </div>
 )
};