import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { colors, sizeInch, sizes } from '@/mock';

import { SizePicker } from '@/ui/components';

const meta: Meta<typeof SizePicker> = {
  component: SizePicker,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'size item'
    },
    selected: {
      description: 'Size that is currently selected'
    },
    onClick: {
      description: 'Callback when color changes',
      action: 'colorChanged'
    }
  }
};

export default meta;

type Story = StoryObj<typeof SizePicker>;

export const primary: Story = {
  render: (args) => {
    const [selectedSize, setSelectedSize] = useState<string>('');

    const handleSelect = (size: string) => {
      setSelectedSize(size);
    };
    return (
      <SizePicker
        size={args.size}
        selected={selectedSize}
        onClick={handleSelect.bind(null, sizes[0])}
      />
    );
  },
  args: {
    size: sizes[0]
  }
};

export const listSize: Story = {
  render: () => {
    const [selectedSize, setSelectedSize] = useState<string>(sizeInch[0]);

    const handleSelect = (size: string) => {
      setSelectedSize(size);
    };
    return (
      <div className="flex gap-4">
        {sizeInch.map((size, index) => (
          <SizePicker
            key={index}
            size={size}
            selected={selectedSize}
            onClick={handleSelect.bind(null, size)}
          />
        ))}
      </div>
    );
  }
};
