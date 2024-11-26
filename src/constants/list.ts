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