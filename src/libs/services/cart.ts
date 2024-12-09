// Constants
import { END_POINT } from '@/constants';

// Interfaces
import { ICart } from '@/interface';

// Libs
import { deleteData, postData, updateData } from '@/libs';

export const addCartData = async (data: ICart) => {
  return await postData({ endpoint: END_POINT.CART, data: data });
};

export const updateCart = async (id: string, data: Partial<ICart>) => {
  return updateData({
    endpoint: END_POINT.CART,
    id,
    data: data,
    updateMethod: 'PATCH'
  });
};

export const deleteCart = async (id: string) => {
  return deleteData({
    endpoint: END_POINT.CART,
    id: id
  });
};
