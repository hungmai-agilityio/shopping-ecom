// Constants
import { END_POINT } from '@/constants';

// Interfaces
import { IWishlist } from '@/interface';

// Libs
import { postData } from '@/libs';

export const addWishList = async (data: IWishlist) => {
  return await postData({
    endpoint: END_POINT.WISHLIST,
    data: data
  });
};
