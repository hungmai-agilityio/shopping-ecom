import type { Meta, StoryObj } from '@storybook/react';

// Constants
import { navItems } from '@/constants';

// Components
import { BurgerMenu } from '@/ui/components';

const meta: Meta<typeof BurgerMenu> = {
  component: BurgerMenu,
  tags: ['autodocs'],
  parameters: {
    nextjs: {
      appDirectory: true
    }
  },
  argTypes: {
    items: {
      description: 'List item to render menu'
    }
  }
};

export default meta;

type Story = StoryObj<typeof BurgerMenu>;

export const Default: Story = {
  render: () => {
    return (
      <div className="h-[500px]">
        <BurgerMenu items={navItems} />
      </div>
    );
  }
};
