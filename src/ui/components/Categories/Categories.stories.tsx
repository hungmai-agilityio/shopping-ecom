import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

// Mock
import { categories } from '@/mock';

// Components
import { Categories } from '@/ui/components';

const meta: Meta<typeof Categories> = {
  component: Categories,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    categories: {
      description: 'List of categories',
      control: 'object'
    },
    selected: {
      description: 'ID of the currently selected category',
      control: 'text'
    },
    onSelect: {
      description: 'Function called when a category is selected'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Categories>;

export const Primary: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<string | undefined>(args.selected);

    const handleSelect = (id: string) => {
      setSelected(id);
      args.onSelect?.(id);
    };

    return (
      <Categories
        categories={args.categories}
        selected={selected}
        onSelect={handleSelect}
      />
    );
  },
  args: {
    categories: categories,
    selected: ''
  }
};
