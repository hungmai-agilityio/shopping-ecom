'use client';

import { clsx } from 'clsx';
import Image from 'next/image';
import { memo, useCallback, useEffect, useState } from 'react';

// Interfaces
import { IProduct } from '@/interface';

// Constants
import { popping } from '@/constants';

// Components
import { Button, FieldLabel } from '@/ui/components';

// Hooks
import { useClearUserCart, useCartData } from '@/hooks';

interface CartOrderProps {
  userId: string;
  products: IProduct[];
}

const CartOrder = memo(({ products, userId }: CartOrderProps) => {
  const { data: cart, isLoading } = useCartData(userId);

  const [subtotal, setSubtotal] = useState<number>(0);
  const clearUserCart = useClearUserCart({ cartData: cart });

  useEffect(() => {
    const total = cart.reduce((sum, item) => {
      const product = products.find((p) => p.id === item.productId);
      return product ? sum + item.quantity * product.price : sum;
    }, 0);
    setSubtotal(total);
  }, [cart, products]);

  // Handle order product
  const handleOrderProduct = useCallback(() => {
    clearUserCart.mutate();
  }, [clearUserCart]);

  if (isLoading) {
    return <p className="text-center mt-10">Loading your cart...</p>;
  }

  if (!cart.length) {
    return (
      <div className="flex flex-col justify-center items-center h-full">
        <Image
          src="/cart-empty.png"
          alt="cart empty"
          width={500}
          height={500}
          className="mx-auto mt-10"
        />
        <p className="text-center mt-5 text-lg font-medium">
          Your cart is empty
        </p>
      </div>
    );
  }

  return (
    <section className={clsx('w-full', popping.className)}>
      <div className="lg:h-cart-md h-full max-h-card-md overflow-y-auto scrollbar">
        {cart.map((item) => {
          const product = products.find((p) => p.id === item.productId);
          if (!product) return null;

          const total = item.quantity * product.price;

          return (
            <div
              key={item.id}
              className="flex justify-between items-center my-5"
            >
              <div className="flex gap-5 items-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={60}
                  height={60}
                />
                <p className="font-medium text-base">{product.name}</p>
              </div>
              <p>${total}</p>
            </div>
          );
        })}
      </div>

      <section className="my-16">
        <FieldLabel title="Subtotal" children={`$ ${subtotal}`} underline />
        <FieldLabel title="Shipping" underline children="Free" />
        <FieldLabel title="Total" children={`$ ${subtotal}`} />
      </section>

      <Button onClick={handleOrderProduct}>Place Order</Button>
    </section>
  );
});

export default CartOrder;
