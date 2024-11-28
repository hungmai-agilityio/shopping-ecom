import type { Meta, StoryObj } from '@storybook/react';

// Constants
import { slideHero } from '@/constants';

// Components
import { Carousel } from '@/ui/components';

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    items: {
      description: 'List item to render slideshow'
    },
    autoPlay: {
      description: 'Set to automatically move to the next slide'
    },
    showNavigation: {
      description: 'Display button to click change slide'
    },
    duration: {
      description: 'Time for the slide to automatically advance to the next'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const primary: Story = {
  args: {
    items: slideHero
  }
};

export const notAutoPlay: Story = {
  args: {
    items: slideHero,
    autoPlay: false
  }
};
