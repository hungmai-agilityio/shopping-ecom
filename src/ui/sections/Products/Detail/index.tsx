'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import { clsx } from 'clsx';

// Constants
import { inter, MESSAGE_API, popping, SIZE } from '@/constants';

// Interfaces
import { ICart, IProduct, IWishlist } from '@/interface';

// Components
import {
  Button,
  ColorPicker,
  Icon,
  QuantityHorizontal,
  Rating,
  SizePicker
} from '@/ui/components';

// Libs
import { updateCart } from '@/libs';

// Hooks
import {
  useAddDataToCart,
  useAddToWishlist,
  useCartData,
  useRemoveFromWishlist,
  useWishlistData
} from '@/hooks';
import { useUserStore } from '@/stores';
import { useToast } from '@/stores/toast';

interface DetailProps {
  product: IProduct;
}

const ProductDetail = ({ product }: DetailProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [color, setColor] = useState<string>(product.colors?.[0] || '');
  const [size, setSize] = useState<string>(product.sizes?.[0] || '');
  const toast = useToast();
  const addDataToCart = useAddDataToCart();
  const addToWishlist = useAddToWishlist();
  const removeFromWishlist = useRemoveFromWishlist();
  const { userId } = useUserStore();
  // Fetch cart items
  const { data: cartItems } = useCartData(userId!);
  const { data: wishlist } = useWishlistData(userId!);

  // Handle set quantity
  const handleQuantityChange = useCallback((newQuantity: number) => {
    setQuantity(newQuantity);
  }, []);

  // Handle set color
  const handleColorChange = useCallback((newColor: string) => {
    setColor(newColor);
  }, []);

  // Handle set color
  const handleSizeChange = useCallback((newSize: string) => {
    setSize(newSize);
  }, []);

  const isProductInWishlist = (productId: string) =>
    wishlist.some((item: IWishlist) => item.productId === productId);

  /**
   * Handle toggle add/remove product with Wishlist
   * @param {IProduct} product
   */
  const handleToggleFavorite = useCallback(
    (product: IProduct) => {
      if (isProductInWishlist(product.id)) {
        const wishlistItem = wishlist.find(
          (item: IWishlist) => item.productId === product.id
        );
        if (wishlistItem) {
          removeFromWishlist.mutate(wishlistItem.id);
        }
        return;
      }

      const newItem: IWishlist = {
        id: uuidv4(),
        userId: userId!,
        productId: product.id
      };

      addToWishlist.mutate(newItem);
    },
    [removeFromWishlist, addToWishlist]
  );

  // Handle add product to cart
  const handleAddToCart = useCallback(async () => {
    const existingItem = cartItems.find(
      (cartItem: ICart) =>
        cartItem.productId === product.id &&
        cartItem.color === color &&
        cartItem.size === size &&
        cartItem.userId === userId
    );

    if (existingItem) {
      await updateCart(existingItem.id, {
        quantity: existingItem.quantity + quantity
      });

      toast.success(MESSAGE_API.UPDATE_QUANTITY);
    }

    if (!existingItem) {
      const cartData: ICart = {
        id: uuidv4(),
        userId: userId!,
        productId: product.id,
        color: color || product.colors?.[0] || '',
        size: size || product.sizes?.[0] || '',
        quantity: quantity
      };

      addDataToCart.mutate(cartData);

      toast.success(MESSAGE_API.ADD_PRODUCT_SUCCESS);
    }
  }, [product, color, quantity, addDataToCart, cartItems]);

  return (
    <section
      className={clsx(
        'md:flex flex-wrap gap-10 my-10 w-full',
        popping.className
      )}
    >
      <div className="lg:block hidden gap-6 p-0">
        {product.imageDetail?.map((item, index) => (
          <div
            key={index}
            className="bg-gray-light w-44 h-32 mb-7 flex justify-center items-center"
          >
            <Image
              src={item}
              alt="detail-img"
              width={0}
              height={0}
              className="object-contain h-[110px] w-[110px] mx-auto"
              sizes="100vw"
              priority
            />
          </div>
        ))}
      </div>
      <div className="lg:w-card-detail h-card-detail w-full mb-5 bg-gray-light rounded-md flex justify-center items-center">
        <Image
          src={product.image}
          alt={product.name}
          width={0}
          height={0}
          className="object-contain md:h-[273px] md:w-[200px] w-[300px] mx-auto"
          sizes="100vw"
          priority
        />
      </div>
      <div className="flex-1">
        <div className="border-b border-dark">
          <h1
            className={clsx(
              'font-semibold md:text-2xl text-base',
              inter.className
            )}
          >
            {product.name}
          </h1>
          <div className="mt-4 flex items-center md:gap-5 gap-2 ">
            <Rating count={product.ratings} />
            <p className="text-gray-400 md:text-base text-xs">
              ({product.reviewCount} Reviews)
            </p>
            <p className="border-l border-gray-600 px-6 md:text-base text-xs text-success">
              In Stock
            </p>
          </div>
          <p
            className={clsx(
              'md:text-2xl text-base my-5 text-dark',
              inter.className
            )}
          >
            ${product.price}
          </p>
          <p className="my-5 text-sm">{product.description}</p>
        </div>
        <div className="my-6">
          {product.colors && (
            <div className="flex gap-7 items-center">
              <p
                className={clsx(
                  'lg:text-2xl text-base text-dark',
                  inter.className
                )}
              >
                Colours:
              </p>

              <ColorPicker
                colors={product.colors!}
                onClick={handleColorChange}
                selectedColor={color}
              />
            </div>
          )}
          {product.sizes && (
            <div className="flex gap-7 items-center">
              <p
                className={clsx(
                  'lg:text-2xl text-base my-5 text-dark',
                  inter.className
                )}
              >
                Size:
              </p>
              {product.sizes?.map((item, index) => (
                <SizePicker
                  key={index}
                  size={item}
                  onClick={handleSizeChange.bind(null, item)}
                  selected={size}
                />
              ))}
            </div>
          )}
          <div className="flex flex-wrap gap-5 items-center">
            <QuantityHorizontal
              value={1}
              onChange={handleQuantityChange}
              max={product.stock}
            />
            {userId && (
              <>
                <Button size={SIZE.SMALL} onClick={handleAddToCart}>
                  Buy Now
                </Button>
                <div className="w-10 h-10 border border-dark rounded-lg flex justify-center items-center">
                  <Icon
                    src={
                      isProductInWishlist(product.id)
                        ? '/heart-red.svg'
                        : '/heart.svg'
                    }
                    alt="heart-icon"
                    width={32}
                    height={32}
                    onClick={handleToggleFavorite.bind(null, product)}
                  />
                </div>
              </>
            )}
          </div>
          <div className="mt-10 max-w-card-md border h-[180px] border-dark rounded-md ">
            <div className="border-b border-dark py-5 px-4 flex gap-5">
              <Icon
                src="/ship-dark.svg"
                alt="ship icon"
                width={40}
                height={40}
              />
              <div className="flex-col gap-3">
                <p className="font-medium text-base">Free Delivery</p>
                <span className="underline text-xs">
                  Enter your postal code for Delivery Availability
                </span>
              </div>
            </div>
            <div className="p-5 flex gap-5">
              <Icon
                src="/return.svg"
                alt="return icon"
                width={40}
                height={40}
              />
              <div className="flex-col gap-3">
                <p className="font-medium text-base">Return Delivery</p>
                <span className="text-xs">
                  Free 30 Days Delivery Returns. Details
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
