import { useMutation, useQueryClient } from '@tanstack/react-query';

// Services
import { addCartData, deleteCart, updateCart } from '@/libs';

// Constants
import { QUERY } from '@/constants';

// Interfaces
import { ICart } from '@/interface';

interface UseCartActionsProps {
  cartData: ICart[];
}

export const useAddDataToCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (item: ICart) => addCartData(item),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY.CART] }),
    onError: (error) => {
      alert(`${error}. Please try again`);
    }
  });
};

export const useUpdateDataToCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<ICart> }) =>
      updateCart(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY.CART] }),
    onError: (error) => {
      alert(`${error}. Please try again`);
    }
  });
};

export const useUpdateQuantity = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, newQuantity }: { id: string; newQuantity: number }) =>
      updateCart(id, { quantity: newQuantity }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY.CART] }),
    onError: (error) => {
      alert(`${error}. Please try again`);
    }
  });
};

export const useRemoveFromCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteCart(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY.CART] }),
    onError: (error) => {
      alert(`${error}. Please try again`);
    }
  });
};

export const useClearUserCart = ({ cartData }: UseCartActionsProps) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      await Promise.all(cartData.map((item) => deleteCart(item.id)));
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY.CART] }),
    onError: (error) => {
      alert(`${error}. Please try again`);
    }
  });
}