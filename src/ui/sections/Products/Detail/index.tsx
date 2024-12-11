'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';
import { clsx } from 'clsx';

// Constants
import { inter, popping, QUERY, SIZE } from '@/constants';

// Interfaces
import { ICart, IProduct, IUser, IWishlist } from '@/interface';

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
import { getUserCart, getUserWishList, updateCart } from '@/libs';

// Hooks
import {
  useAddDataToCart,
  useAddToWishlist,
  useRemoveFromWishlist
} from '@/hooks';

interface DetailProps {
  product: IProduct;
  user: IUser;
}

const ProductDetail = ({ product, user }: DetailProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [color, setColor] = useState<string>(product.colors?.[0] || '');
  const [size, setSize] = useState<string>(product.sizes?.[0] || '');
  const addDataToCart = useAddDataToCart();
  const addToWishlist = useAddToWishlist();
  const removeFromWishlist = useRemoveFromWishlist();

  // Fetch cart items
  const { data: cartItems = [] } = useQuery<ICart[]>({
    queryKey: [QUERY.CART],
    queryFn: () => getUserCart(user.id)
  });

  const { data: wishlist = [] } = useQuery<IWishlist[]>({
    queryKey: [QUERY.WISHLIST],
    queryFn: () => getUserWishList(user.id),
    enabled: !!user
  });

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
        userId: user.id,
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
        cartItem.size === size
    );

    if (existingItem) {
      await updateCart(existingItem.id, {
        quantity: existingItem.quantity + quantity
      });
    }

    if (!existingItem) {
      const cartData: ICart = {
        id: uuidv4(),
        userId: user.id,
        productId: product.id,
        color: color || product.colors?.[0] || '',
        size: size || product.sizes?.[0] || '',
        quantity: quantity
      };

      addDataToCart.mutate(cartData);
    }
  }, [product, color, quantity, addDataToCart, cartItems]);

  return (
    <section
      className={clsx(
        'md:flex flex-wrap gap-10 container my-10',
        popping.className
      )}
    >
      <div className="lg:block hidden gap-6 p-0">
        {product.imageDetail?.map((item, index) => (
          <div
            key={index}
            className="bg-gray-light w-44 h-32 mb-5 flex justify-center items-center"
          >
            <Image
              src={item}
              alt="detail-img"
              width={110}
              height={110}
              objectFit="contain"
              priority
            />
          </div>
        ))}
      </div>
      <div className="lg:w-card-detail lg:h-card-detail w-full h-[250px] bg-gray-light rounded-md flex justify-center items-center">
        <Image
          src={product.image}
          alt={product.name}
          width={446}
          height={315}
          objectFit="contain"
          className="lg:w-[446px] lg:h-[315px] w-[200px] h-[200px]"
          priority
        />
      </div>
      <div>
        <div className="border-b border-dark">
          <h1
            className={clsx(
              'font-semibold md:text-2xl text-base',
              inter.className
            )}
          >
            {product.name}
          </h1>
          <div className="mt-4 flex items-center md:gap-5 gap-2">
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
              'md:text-2xl text-base my-5 text-gray-600',
              inter.className
            )}
          >
            ${product.price}
          </p>

          <p className="my-5 md:text-base text-xs">{product.description}</p>
        </div>
        <div className="my-5">
          <div className="flex gap-7 items-center">
            <p
              className={clsx(
                'lg:text-2xl text-base my-5 text-gray-600',
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
          {product.sizes && (
            <div className="my-5 flex gap-7 items-center">
              <p
                className={clsx(
                  'lg:text-2xl text-base my-5 text-gray-600',
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

          <div className="flex flex-wrap my-5 gap-5 items-center">
            <QuantityHorizontal
              value={1}
              onChange={handleQuantityChange}
              max={product.stock}
            />
            {user && (
              <>
                <Button size={SIZE.MEDIUM} onClick={handleAddToCart}>
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
          <div className="mt-10 max-w-card-md h-full border border-dark rounded-md">
            <div className="border-b border-dark p-5 flex gap-5">
              <Icon
                src="/ship-dark.svg"
                alt="ship icon"
                width={40}
                height={40}
              />
              <div className="flex-col gap-3">
                <p className="font-medium text-xl">Free Delivery</p>
                <span className="underline text-sm">
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
                <p className="font-medium text-xl">Return Delivery</p>
                <span className="underline text-sm">
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
