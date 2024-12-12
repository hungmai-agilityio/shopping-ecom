import type { Meta, StoryObj } from '@storybook/react';

// Sections
import { SkeletonProduct } from '@/ui/components';

const meta: Meta<typeof SkeletonProduct> = {
  component: SkeletonProduct,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true
    }
  }
};

export default meta;

type Story = StoryObj<typeof SkeletonProduct>;

export const Default: Story = {
  args: {}
};
