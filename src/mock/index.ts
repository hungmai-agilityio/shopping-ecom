import { ICart, IProduct, IUser, IWishlist } from '@/interface';

export const colors = ['White', 'Black', 'Green'];

export const categories = [
  {
    id: 'i7g6i9i2-8f89-6h15-9i0e-6j2f7j37211',
    title: 'phone',
    image: 'https://i.ibb.co/Z6f7PYW/cell-Phone.png'
  },
  {
    id: '29g6i9i2-8f89-6h15-9i0e-6j2f7266337211',
    title: 'computer',
    image: 'https://i.ibb.co/WsVyW5N/computer.png'
  },
  {
    id: 'i7g6i9i2-8f89-6h15-9id1f3329-1j37211',
    title: 'smartWatch',
    image: 'https://i.ibb.co/7vFrHFr/watch.png'
  },
  {
    id: 'i7g6i9i2-8f89-123jf-6j2f7j37211',
    title: 'camera',
    image: 'https://i.ibb.co/ZM77Kw5/camera.png'
  }
];

export const sizes = ['S', 'M', 'L', 'XL'];
export const sizeInch = ['24 inch', '27 inch', '32 inch'];

export const mockUser: IUser = {
  firstName: 'User1',
  email: 'abc@abc.com',
  password: '$2a$10$pKSplef3yz3/yJOSHU4lpeOWecVK0m20Y9zalCkGQZQTUKbxyXrp6',
  id: '4dd7ca05-6bf8-4003-b324-e5ec7a705da8',
  lastName: '',
  avatar: '',
  address: [],
  created_at: '2024-12-07T15:09:14.436Z',
  updated_at: '2024-12-07T15:09:14.436Z'
};

export const mockUserAddress: IUser = {
  id: 'user1',
  firstName: 'John ',
  lastName: 'Doe',
  email: 'john@example.com',
  avatar: '',
  password: 'pass123456',
  address: [
    {
      id: 'address1',
      street: '123 Main St',
      city: 'Hanoi',
      apartment: 'Apartment 101',
      phone: '0123456789',
      company: 'Tech Corp',
      isDefault: true
    },
    {
      id: 'address2',
      street: '456 Side St',
      city: 'Saigon',
      phone: '0987654321',
      isDefault: false
    }
  ],
  created_at: '',
  updated_at: ''
};

export const mockWishlist: IWishlist[] = [
  {
    id: '4jv05-d467958243tu87-37682100544',
    userId: 'i7g6i9i2-8f89-6h15-9i0e-6j2f7j33f9646',
    productId: 'i7g6i9i2-8f89-6h15-9i0e-6j2f7j33g6i6'
  },
  {
    id: '4jv05-d467958243tu87-37666100544',
    userId: 'i7g6i9i2-8f89-6h15-9i0e-1343f9646',
    productId: 'u3k8h9f1-9g22-3h67-2g13-5k6g9k45g4t3'
  }
];

export const mockCart: ICart[] = [
  {
    id: '4jv05-d467958243tu87-37682100544',
    userId: 'i7g6i9i2-8f89-6h15-9i0e-6j2f7j33f9646',
    productId: 'i7g6i9i2-8f89-6h15-9i0e-6j2f7j33g6i6',
    color: 'White',
    quantity: 2,
    size: ''
  },
  {
    id: '4jv05-d467958243tu87-37666100544',
    userId: 'i7g6i9i2-8f89-6h15-9i0e-1343f9646',
    productId: 'u3k8h9f1-9g22-3h67-2g13-5k6g9k45g4t3',
    color: 'Blue',
    quantity: 1,
    size: ''
  }
];

export const mockProduct = {
  id: 'product1',
  name: 'Test Product',
  price: 100,
  ratings: 4,
  colors: ['red', 'blue'],
  image: '/test-image.jpg',
  userId: mockUser.id,
  isNew: true,
  discount: 10,
  originalPrice: 120,
  bestSelling: false,
  reviewCount: 2222,
  stock: 23131,
  imageDetail: [],
  sizes: ['M', 'L'],
  category: 'phone',
  description: '',
  isFlashSale: true,
};

export const mockProducts: IProduct[] = [
  {
    id: 'product1',
    name: 'Test Product',
    price: 100,
    ratings: 4,
    colors: ['red', 'blue'],
    image: '/test-image.jpg',
    discount: 10,
    originalPrice: 120,
    bestSelling: false,
    category: 'phone',
    description: '',
    isFlashSale: true,
    isNew: false,
    reviewCount: 2222,
    stock: 23131,
    imageDetail: [],
    sizes: ['156GB', '256GB']
  },
  {
    id: 'product2',
    name: 'Test Product2',
    price: 200,
    ratings: 4,
    colors: ['red', 'blue'],
    image: '/test-image.jpg',
    discount: 10,
    originalPrice: 120,
    bestSelling: false,
    category: 'phone',
    description: '',
    isFlashSale: true,
    isNew: false,
    reviewCount: 2222,
    stock: 23131,
    imageDetail: [],
    sizes: ['156GB', '256GB']
  }
];
