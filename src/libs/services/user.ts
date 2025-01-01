// Constants
import { END_POINT, KEY } from '@/constants';

// Interfaces
import { IUser } from '@/interface';

// Libs
import { fetchData, fetchDataId, postData, updateData } from '@/libs';

export const getUserId = async (id: string) => {
  return await fetchDataId({ endpoint: `${END_POINT.USERS}/`, id: id });
};

export const getUserCart = async (id: string) => {
  try {
    const data = await fetchDataId({
      endpoint: `${END_POINT.CART}?userId=`,
      id: id
    });
    return data || [];
  } catch (error) {
    return error;
  }
};

export const getUserWishList = async (id: string) => {
  try {
    const data = await fetchDataId({
      endpoint: `${END_POINT.WISHLIST}?userId=`,
      id: id
    });
    return data || [];
  } catch (error) {
    return error;
  }
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

export const updateUser = async (id: string, data: IUser) => {
  return await updateData({
    endpoint: END_POINT.USERS,
    id: id,
    data: data,
    updateMethod: 'PATCH'
  });
};

export const getUserCookie = () => {
  const cookies = require('next/headers').cookies;

  const userCookie = cookies().get(KEY.USER);
  return userCookie ? JSON.parse(userCookie.value) : null;
};
