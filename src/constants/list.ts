import { END_POINT } from "@/constants/endPoint";

export const navItems = [
  { name: 'Home', url: END_POINT.HOME },
  { name: 'Contact', url: END_POINT.CONTACT },
  { name: 'About', url: END_POINT.ABOUT_US }
];

export const listAbout = [
  { name: 'My Account', url: END_POINT.PROFILE },
  { name: 'Login / Register', url: END_POINT.SIGN_IN },
  { name: 'Cart', url: END_POINT.CART },
  { name: 'Wishlist', url: END_POINT.WISHLIST }
]

export const listQuick = [
  { name: 'Privacy Policy', url: '' },
  { name: 'Terms Of Use', url: '' },
  { name: 'FAQ', url: '' },
  { name: 'Contact', url: END_POINT.CONTACT }
]

export const slideHero = [
  {
    id: 'hero-1',
    image: '/hero_iphone.png',
    content: 'Up to 10% off Voucher',
    title: 'IPhone 14 Series',
    icon: '/icon-iphone.svg'
  },
  {
    id: 'hero-2',
    image: '/hero-canon.png',
    content: 'Capture stunning photos every time.',
    title: 'Canon camera'
  },
  {
    id: 'hero-3',
    image: '/hero-shoes.png',
    content: 'Durable, stylish, all-day comfort',
    title: 'Adidas Sneakers'
  },
  {
    id: 'hero-4',
    image: '/hero-cooler.png',
    content: 'Max Cooling Power - Liquid Cooling for Your PC!',
    title: 'Advanced Liquid Cooling System'
  },
  {
    id: 'hero-5',
    image: '/hero-ps5.png',
    content: 'Level Up with PS5 - Buy Now',
    title: 'PS5',
    icon: '/logo-sony.svg'
  }
];

export const slideStaff = [
  {
    id: 'staff-1',
    image: '/lead.png',
    name: 'Tom Cruise',
    desc: 'Founder & Chairman',
  },
  {
    id: 'staff-1',
    image: '/manager.png',
    name: 'Emma Watson',
    desc: 'Managing Director',
  },
  {
    id: 'staff-1',
    image: '/designer.png',
    name: 'Will Smith',
    desc: 'Product Designer',
  }
]