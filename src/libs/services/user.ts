// Constants
import { END_POINT, KEY } from '@/constants';

// Interfaces
import { IUser } from '@/interface';

// Libs
import { fetchData, fetchDataId, postData } from '@/libs';

export const getUserId = async (id: string) => {
  return await fetchDataId({ endpoint: `${END_POINT.USERS}/`, id: id });
};

export const getUserCart = async (id: string) => {
  return await fetchDataId({ endpoint: `${END_POINT.CART}?userId=`, id: id });
};

export const getUserWishList = async (id: string) => {
  return await fetchDataId({
    endpoint: `${END_POINT.WISHLIST}?userId=`,
    id: id
  });
};

export const getUserEmail = async (email: string) => {
  return await fetchData({ endpoint: `${END_POINT.USERS}?email=${email}` });
};

export const addUser = async (data: IUser) => {
  return await postData({
    endpoint: END_POINT.USERS,
    data: data
  });
};

export const setCookieUser = async (user: any) => {
  try {
    const response = await fetch('/api/set-cookie', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user })
    });

    const data = await response.json();
    if (response.ok) console.log('Cookie set successfully:', data.message);
  } catch (error) {
    console.error('Error setting cookie:', error);
  }
};

export const getUserCookie = () => {
  const cookies = require('next/headers').cookies;

  const userCookie = cookies().get(KEY.USER);
  return userCookie ? JSON.parse(userCookie.value) : null;
};
