import { Meta, StoryObj } from '@storybook/react';

// Components
import Icon from '@/ui/components/common/Icon';
import { TYPE } from '@/constants';

const meta: Meta<typeof Icon> = {
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    src: {
      description: 'Image to render'
    },
    alt: {
      description: 'Describes the image and shows if the image is corrupted'
    },
    width: {
      description: 'Width for images'
    },
    height: {
      description: 'Height for images'
    },
    variant: {
      description: 'Set type optional for icon'
    },
    onClick: {
      description: 'Handle the event when clicking on the button'
    },
    isDisabled: {
      description: 'Set disabled icon'
    },
    styles: {
      description: 'Set styles for icon'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
  args: {
    src: '/cart.svg',
    alt: 'Cart Icon',
    width: 24,
    height: 24,
    onClick: () => {
      alert(123);
    }
  }
};

export const Second: Story = {
  args: {
    src: '/cart.svg',
    alt: 'Cart Icon',
    width: 24,
    height: 24,
    onClick: () => {
      alert(123);
    },
    variant: TYPE.SECOND
  }
};

export const NotAction: Story = {
  args: {
    src: '/heart.svg',
    alt: 'Cart Icon',
    width: 30,
    height: 30
  }
};

export const Disable: Story = {
  args: {
    src: '/heart.svg',
    alt: 'Cart Icon',
    width: 30,
    height: 30,
    isDisabled: true
  }
};