import { Meta, StoryObj } from '@storybook/react';

// Components
import { Card } from '@/ui/components';

const meta: Meta<typeof Card> = {
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    children: {
      description: 'Content is descriptive or promotional'
    },
    styles: {
      description: 'Set style accordingly tailwindcss',
      control: 'text'
    },
    title: {
      description: 'Set title for card',
      control: 'text'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Card>;

export const primary: Story = {
  args: {
    children: (
      <div className="w-[500px] h-[300px] flex justify-center bg-dark text-white">
        <p>content</p>
      </div>
    )
  }
};

export const hasTitle: Story = {
  args: {
    title: 'Header',
    children: (
      <div className="w-[500px] h-[300px] flex justify-center bg-dark text-white">
        <p>content</p>
      </div>
    )
  }
};