import type { Meta, StoryObj } from '@storybook/react';

// Sections
import { SkeletonProductDetail } from '@/ui/components';

const meta: Meta<typeof SkeletonProductDetail> = {
  component: SkeletonProductDetail,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true
    }
  }
};

export default meta;

type Story = StoryObj<typeof SkeletonProductDetail>;

export const Default: Story = {
  args: {}
};
