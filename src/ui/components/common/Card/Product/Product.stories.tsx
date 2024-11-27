import { Meta, StoryObj } from '@storybook/react';

// Components
import { CardProduct } from '@/ui/components';

const meta: Meta<typeof CardProduct> = {
  component: CardProduct,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    src: {
      description: 'URL of the image to display for the product.',
      control: 'text'
    },
    alt: {
      description: 'Alternative text for the image, used for accessibility.',
      control: 'text'
    },
    id: {
      description: 'Unique identifier for the product.',
      control: 'text'
    },
    name: {
      description: 'The name or title of the product.',
      control: 'text'
    },
    rating: {
      description: 'The rating value of the product, usually between 1 and 5.',
      control: 'number'
    },
    price: {
      description: 'The current price of the product.',
      control: 'number'
    },
    oldPrice: {
      description:
        'The original price of the product before any discounts (optional).',
      control: 'number'
    },
    colors: {
      description: 'List of available colors for the product.',
      control: 'object'
    },
    isNewProduct: {
      description:
        'Indicates if the product is new (displays a "NEW" label if true).',
      control: 'boolean'
    },
    discount: {
      description: 'Discount percentage on the product (optional).',
      control: 'number'
    },
    icon: {
      description:
        'Icon image URL for the product action button (e.g., cart or heart).',
      control: 'text'
    },
    selectedColor: {
      description:
        'Currently selected color of the product (default is the first in the colors list).',
      control: 'text'
    },
    onAdd: {
      description:
        'Callback function that handles adding the product to the cart when clicked.'
    },
    onIconClick: {
      description:
        'Callback function that handles the click on the icon (e.g., heart or cart).'
    },
    onView: {
      description:
        'Callback function to view more details about the product when clicked (optional).'
    }
  }
};

export default meta;
type Story = StoryObj<typeof CardProduct>;

export const primary: Story = {
  args: {
    src: 'https://i.ibb.co/Jx5zGXk/head-1.webp',
    alt: 'Example Product Image',
    id: 'product-1',
    name: 'Example Product',
    colors: ['Red', 'Blue'],
    rating: 4,
    price: 120,
    icon: '/heart.svg',
    selectedColor: 'Red',
    onAdd: () => alert('Added to cart'),
    onIconClick: () => alert('Icon clicked')
  }
};

export const hasDiscount: Story = {
  args: {
    src: 'https://i.ibb.co/Jx5zGXk/head-1.webp',
    alt: 'Example Product Image',
    id: 'product-2',
    name: 'Another Product',
    discount: 5,
    rating: 5,
    price: 95,
    oldPrice: 100,
    colors: ['Red', 'Blue'],
    icon: '/heart.svg',
    selectedColor: 'Red',
    onAdd: () => alert('Added to cart'),
    onIconClick: () => alert('Icon clicked'),
    onView: () => alert('View detail')
  }
};

export const hasNewProduct: Story = {
  args: {
    src: 'https://i.ibb.co/Jx5zGXk/head-1.webp',
    alt: 'Example Product Image',
    id: 'product-2',
    name: 'Another Product',
    rating: 5,
    price: 95,
    colors: ['Red', 'Blue'],
    isNewProduct: true,
    icon: '/heart.svg',
    selectedColor: 'Red',
    onAdd: () => alert('Added to cart'),
    onIconClick: () => alert('Icon clicked'),
    onView: () => alert('View detail')
  }
};
