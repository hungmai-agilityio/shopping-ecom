import { Meta, StoryObj } from '@storybook/react';

// Components
import { CardInfo } from '@/ui/components';

const meta: Meta<typeof CardInfo> = {
  component: CardInfo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    image: {
      description: 'URL of the image displayed in the CardInfo component.',
      control: 'text'
    },
    name: {
      description: 'Name displayed in the CardInfo component.',
      control: 'text'
    },
    desc: {
      description: 'A short description of the person or content.',
      control: 'text'
    }
  }
};

export default meta;
type Story = StoryObj<typeof CardInfo>;

export const primary: Story = {
  args: {
    image: '/lead.png',
    name: 'Tom Cruise',
    desc: 'Founder & Chairman'
  }
};
