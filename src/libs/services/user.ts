// Constants
import { END_POINT } from '@/constants';

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

export const getUserEmail = async (email: string) => {
  return await fetchData({ endpoint: `${END_POINT.USERS}?email=${email}` });
};

export const addUser = async (data: IUser) => {
  return await postData({
    endpoint: END_POINT.USERS,
    data: data
  });
};
