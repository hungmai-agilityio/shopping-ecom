import { useEffect, useState } from 'react';
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
      description: 'Title of the currently selected category',
      control: 'radio',
      options: categories.map((item) => item.title)
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

    useEffect(() => {
      setSelected(args.selected);
    }, [args.selected]);

    const handleSelect = (category: string) => {
      setSelected(category);
      args.onSelect?.(category);
      alert(`Selected category: ${category}`);
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
