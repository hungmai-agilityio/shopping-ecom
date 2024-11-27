import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { colors } from '@/mock';

import { ColorPicker } from '@/ui/components';

const meta: Meta<typeof ColorPicker> = {
  component: ColorPicker,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    colors: {
      description: 'List colors'
    },
    selectedColor: {
      description: 'Color that is currently selected',
      control: 'text'
    },
    onClick: {
      description: 'Callback when color changes',
      action: 'colorChanged'
    }
  }
};

export default meta;

type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = {
  render: () => {
    const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

    const handleColorChange = (color: string) => {
      setSelectedColor(color);
    };

    return (
      <ColorPicker
        colors={colors}
        selectedColor={selectedColor}
        onClick={handleColorChange}
      />
    );
  }
};
