import { ICart, IUser } from '@/interface';

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
