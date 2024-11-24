import { Meta, StoryObj } from '@storybook/react';

// Components
import { CardImage } from '@/ui/components';

const meta: Meta<typeof CardImage> = {
  component: CardImage,
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
    children: {
      description: 'Content is descriptive or promotional'
    }
  }
};

export default meta;
type Story = StoryObj<typeof CardImage>;

export const Default: Story = {
  render: () => {
    return (
      <CardImage
        src="/arrival-2.png"
        alt="Women's Collections"
        width={570}
        height={284}
      >
        <div>
          <h2 className="text-xl font-bold">Women's Collections</h2>
          <p className="text-sm">
            Featured women collections that give you another vibe.
          </p>
        </div>
      </CardImage>
    );
  }
};
