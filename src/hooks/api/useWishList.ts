import { useMutation, useQueryClient } from '@tanstack/react-query';

// Constants
import { QUERY } from '@/constants';

// Interfaces
import { IWishlist } from '@/interface';

// Libs
import { addWishList, deleteWishList } from '@/libs';

interface UseWishlistProps {
  wishlist: IWishlist[];
}

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

export const useRemoveFromWishlist = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteWishList(id),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [QUERY.WISHLIST] }),
    onError: (error) => {
      alert(`${error}. Please try again`);
    }
  });
};

export const useClearWishlist = ({ wishlist }: UseWishlistProps) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      await Promise.all(wishlist.map((item) => deleteWishList(item.id)));
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY.WISHLIST] }),
    onError: (error) => {
      alert(`${error}. Please try again`);
    }
  });
};
