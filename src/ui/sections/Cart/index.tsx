'use client';

import { useState, useEffect, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';

// Interfaces
import { IProduct, IUser, ICart } from '@/interface';

// Components
import { CartTotal } from '@/ui/components';
import { CartTable } from '@/ui/sections';

// libs
import { getUserCart } from '@/libs';

// Constants
import { END_POINT, QUERY } from '@/constants';

// Hooks
import { useUpdateQuantity, useRemoveFromCart } from '@/hooks';
import { useRouter } from 'next/navigation';

interface CartSectionProps {
  products: IProduct[];
  user: IUser;
}

const CartSection = ({ products, user }: CartSectionProps) => {
  const [subtotal, setSubtotal] = useState(0);
  const router = useRouter();

  const { data: cart = [], error: cartError } = useQuery<ICart[]>({
    queryKey: [QUERY.CART],
    queryFn: () => getUserCart(user.id),
    enabled: !!user
  });

  const updateQuantity = useUpdateQuantity();
  const removeProduct = useRemoveFromCart();

  useEffect(() => {
    const total = cart.reduce((sum, item) => {
      const product = products.find((p) => p.id === item.productId);
      return product ? sum + item.quantity * product.price : sum;
    }, 0);
    setSubtotal(total);
  }, [cart, products]);

  const handleQuantityChange = useCallback(
    (id: string, newQuantity: number) => {
      updateQuantity.mutate({ id, newQuantity });
    },
    [updateQuantity]
  );

  const handleRemoveProduct = useCallback(
    (productId: string) => {
      removeProduct.mutate(productId);
    },
    [removeProduct]
  );

  const handleRedirectCheckout = () => {
    router.push(END_POINT.CHECKOUT);
  };

  if (cartError) {
    return (
      <div className="container my-10">
        <p className="text-center text-primary">
          Error: Failed to fetch cart data. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <>
      <section className="my-20">
        <CartTable
          products={products}
          cart={cart}
          onChangeQuantity={handleQuantityChange}
          onRemoveProduct={handleRemoveProduct}
        />
      </section>
      <section className="my-20 flex lg:justify-end justify-center">
        <CartTotal
          onCheckout={handleRedirectCheckout}
          subTotal={subtotal}
          isDisable={subtotal === 0}
        />
      </section>
    </>
  );
};

export default CartSection;
