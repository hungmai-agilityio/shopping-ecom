'use client';

import { useQuery } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Constants
import { QUERY, SIZE, TYPE, popping } from '@/constants';

// Interfaces
import { IProduct, IUser, IWishlist, ICart } from '@/interface';

// Libs
import {
  getProductLimit,
  getUserCart,
  getUserWishList,
  updateCart
} from '@/libs';

// Components
import { Button, CardProduct, ProductList, Tag } from '@/ui/components';

// Hooks
import {
  useAddDataToCart,
  useClearWishlist,
  useRemoveFromWishlist,
  useUpdateDataToCart
} from '@/hooks';

interface WishlistProps {
  user: IUser;
  products: IProduct[];
  productSelling: IProduct[];
}

const WishListSection = ({ products, user, productSelling }: WishlistProps) => {
  const [displayedProducts, setDisplayedProducts] =
    useState<IProduct[]>(productSelling);
  const [start, setStart] = useState<number>(0);

  const { data: wishlist = [], error: wishlistError } = useQuery<IWishlist[]>({
    queryKey: [QUERY.WISHLIST],
    queryFn: () => getUserWishList(user.id)
  });

  const removeFromWishlist = useRemoveFromWishlist();
  const addToCart = useAddDataToCart();
  const updateDataToCart = useUpdateDataToCart();
  const clearWishlist = useClearWishlist({ wishlist });

  if (wishlistError) {
    return (
      <div className="container my-10">
        <p className="text-center text-primary">
          Error: Failed to fetch wishlist products. Please try again later.
        </p>
      </div>
    );
  }

  /**
   * Handle removing an item from the wishlist by its id.
   * @param {string} id - The id of the wishlist item to remove.
   */
  const handleRemoveWishList = useCallback(
    (id: string) => {
      if (id) {
        removeFromWishlist.mutate(id);
      }
    },
    [removeFromWishlist]
  );

  /**
   * Handle adding a product to the cart.
   * If the product already exists in the cart, its quantity is incremented by 1.
   * If not, a new cart item is added.
   * @param {string} productId
   */
  const handleAddToCart = useCallback(
    async (productId: string) => {
      const cartItems = await getUserCart(user!.id);

      const existingItem = cartItems.find(
        (cartItem: ICart) =>
          cartItem.productId === productId && cartItem.userId === user?.id
      );

      if (existingItem) {
        updateDataToCart.mutate({
          id: existingItem.id,
          data: { quantity: existingItem.quantity + 1 }
        });

        alert('Add quantity +1 to existing products');
      }
      if (!existingItem) {
        const newItem: ICart = {
          id: uuidv4(),
          userId: user!.id,
          productId: productId,
          color: '',
          size: '',
          quantity: 1
        };
        addToCart.mutate(newItem);
        alert('Add success');
      }
    },
    [user]
  );

  // Handle adding all products from the wishlist to the cart and remove all wishlist
  const handleAddAllProduct = useCallback(() => {
    const dataWishlist = wishlist.map((item) => {
      const product = products.find((p) => p.id === item.productId);
      if (!product) return;

      return getUserCart(user.id).then((cartItems) => {
        const existingItem = cartItems.find(
          (cartItem: ICart) =>
            cartItem.productId === product.id &&
            cartItem.color === (product.colors?.[0] || '') &&
            cartItem.size === (product.sizes?.[0] || '')
        );

        if (existingItem) {
          updateCart(existingItem.id, {
            quantity: existingItem.quantity + 1
          });
          return;
        }

        const cartData: ICart = {
          id: uuidv4(),
          userId: user.id,
          productId: product.id,
          color: product.colors?.[0] || '',
          size: product.sizes?.[0] || '',
          quantity: 1
        };

        addToCart.mutate(cartData);
      });
    });

    Promise.all(dataWishlist).then(() => {
      // clearWishlist.mutate();
    });
  }, [wishlist, products, addToCart, user.id]);

  /**
   * Load more products when the "See All" button is clicked.
   */
  const handleShowMoreProduct = useCallback(async () => {
    const limit = 4;
    const newStart = start + limit;
    setStart(newStart);

    const newProducts = await getProductLimit(
      'bestSelling=true',
      newStart,
      limit
    );
    setDisplayedProducts((prev) => [...prev, ...newProducts.data]);
  }, [start]);

  return (
    <section className={`${popping.className}`}>
      <div className="flex justify-between items-center my-20 container">
        <p className="text-xl">Wishlist ({wishlist.length})</p>
        <Button
          variant={TYPE.SECOND}
          onClick={handleAddAllProduct}
          disabled={!wishlist.length}
        >
          Move All To Bag
        </Button>
      </div>
      <div className="my-10 flex flex-wrap lg:gap-28 gap-10 container lg:justify-normal justify-center">
        {wishlist.map((item) => {
          const product = products.find((p) => p.id === item.productId);

          if (!product) return null;

          return (
            <CardProduct
              key={item.id}
              src={product.image}
              alt={product.name}
              icon="icon-delete.svg"
              id={item.id}
              name={product.name}
              price={product.price}
              rating={product.ratings}
              colors={product.colors}
              discount={product.discount}
              isNewProduct={product.isNew}
              selectedColor={product.colors![0]}
              oldPrice={product.originalPrice}
              onAdd={handleAddToCart.bind(null)}
              onIconClick={handleRemoveWishList}
            />
          );
        })}
      </div>

      <div className="flex justify-between items-center my-20 container">
        <Tag label="Just For You" />
        <Button
          variant={TYPE.SECOND}
          size={SIZE.SMALL}
          onClick={handleShowMoreProduct}
        >
          See All
        </Button>
      </div>
      <div className="container">
        <ProductList
          products={displayedProducts}
          isDiscount
          isNewProduct
          user={user}
        />
      </div>
    </section>
  );
};

export default WishListSection;
