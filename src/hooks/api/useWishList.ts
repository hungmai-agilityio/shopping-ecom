import { useMutation, useQueryClient } from '@tanstack/react-query';

// Constants
import { QUERY } from '@/constants';

// Interfaces
import { IWishlist } from '@/interface';

// Libs
import { addWishList } from '@/libs';

export const useAddToWishlist = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (item: IWishlist) => addWishList(item),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [QUERY.WISHLIST] }),
    onError: (error) => {
      alert(`${error}. Please try again`);
    }
  });
};
