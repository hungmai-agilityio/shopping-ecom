import type { Meta, StoryObj } from '@storybook/react';

// Sections
import { Header } from '@/ui/sections';

const meta: Meta<typeof Header> = {
  component: Header,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true
    }
  }
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {}
};
