import { useEffect, useState } from 'react';
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
      description: 'Callback when color changes'
    }
  }
};

export default meta;

type Story = StoryObj<typeof ColorPicker>;

export const primary: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<string | undefined>(
      args.selectedColor || args.colors[0]
    );

    useEffect(() => {
      setSelected(args.selectedColor);
    }, [args.selectedColor]);

    const handleColorChange = (color: string) => {
      setSelected(color);
      alert(color)
    };

    return (
      <ColorPicker
        colors={args.colors}
        selectedColor={selected}
        onClick={handleColorChange}
      />
    );
  },
  args: {
    colors: colors,
    selectedColor: 'White'
  }
};
