import { Meta, StoryObj } from '@storybook/react';

// Constants
import { SIZE } from '@/constants';

// Components
import { Avatar } from '@/ui/components';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      description: 'Link avatar'
    },
    alt: {
      description: 'Alternative text for the image, used for accessibility.'
    },
    size: {
      description: 'Set size optional for Avatar',
      control: 'radio',
      options: Object.values(SIZE)
    },
    styles: {
      description: 'Add custom css'
    },
    circle: {
      description: 'Render Avatar with border radius full'
    },
    onClick: {
      description: 'Handle the event when clicking on the avatar'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const primary: Story = {
  args: {
    src: '',
    size: SIZE.SMALL,
    alt: 'Test User'
  }
};

export const hasImage: Story = {
  args: {
    src: '/avatar.jpg',
    alt: 'Test User'
  }
};

export const size: Story = {
  render: () => {
    return (
      <div className="flex gap-5 items-end">
        <Avatar src="/avatar.jpg" alt="test user" />
        <Avatar src="/avatar.jpg" alt="test user" size={SIZE.MEDIUM} />
        <Avatar src="/avatar.jpg" alt="test user" size={SIZE.LARGE} onClick={() => {}}/>
      </div>
    );
  }
};

export const avatarCircle: Story = {
  args: {
    src: '/avatar.jpg',
    size: SIZE.LARGE,
    alt: 'Test User',
    circle: true
  }
};
