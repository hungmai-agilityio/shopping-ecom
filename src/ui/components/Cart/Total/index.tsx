import { memo } from 'react';
import { clsx } from 'clsx';

// Constants
import { popping, SIZE } from '@/constants';

// Components
import { Button, CartItem } from '@/ui/components';

interface totalProps {
  subTotal: number;
  onCheckout: () => void;
  isDisable?: boolean;
}
const CartTotal = memo(({ subTotal, onCheckout, isDisable }: totalProps) => {
  return (
    <div
      className={clsx(
        'border-2 border-black rounded-md w-cart-md h-cart-md py-8 px-6',
        popping.className
      )}
    >
      <h4 className="text-xl capitalize font-medium">cart total</h4>
      <div className="my-6">
        <CartItem title="Subtotal" children={`$ ${subTotal}`} />
        <CartItem title="Shipping" children="Free" />
        <CartItem title="Total" children={`$ ${subTotal}`} underline={false} />

        <div className="w-64 mx-auto">
          <Button disabled={isDisable} onClick={onCheckout} size={SIZE.LARGE}>
            Process to checkout
          </Button>
        </div>
      </div>
    </div>
  );
});

export default CartTotal;
