import type { Meta, StoryObj } from '@storybook/react';

// Sections
import { SkeletonProductList } from '@/ui/components';

const meta: Meta<typeof SkeletonProductList> = {
  component: SkeletonProductList,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true
    }
  }
};

export default meta;

type Story = StoryObj<typeof SkeletonProductList>;

export const Default: Story = {
  args: {}
};
