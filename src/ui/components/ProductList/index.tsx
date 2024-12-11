'use client';

import { useCallback, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

// Constants
import { END_POINT, QUERY, SIZE } from '@/constants';

// Interfaces
import { IProduct, IUser, IWishlist } from '@/interface';

// Libs
import { getProductLimit, getUserWishList } from '@/libs';

// Components
import { Button, CardProduct } from '@/ui/components';

// Hooks
import { useAddToWishlist, useRemoveFromWishlist } from '@/hooks';

interface ProductListProps {
  products: IProduct[];
  user: IUser;
  isShowMore?: boolean;
  isNewProduct?: boolean;
  isDiscount?: boolean;
  query?: string;
}

const ProductList = ({
  products,
  user,
  isNewProduct,
  isShowMore,
  isDiscount,
  query = ''
}: ProductListProps) => {
  const [currentProducts, setCurrentProducts] = useState<IProduct[]>(products);
  const [start, setStart] = useState<number>(products.length);
  const addToWishlist = useAddToWishlist();
  const removeFromWishlist = useRemoveFromWishlist();

  const router = useRouter();

  const {
    data: items,
    isLoading,
    isError
  } = useQuery({
    queryKey: [QUERY.PRODUCTS, query, start],
    queryFn: () => getProductLimit(query, start, 4),
    enabled: start > products.length
  });

  const { data: wishlist = [] } = useQuery<IWishlist[]>({
    queryKey: [QUERY.WISHLIST],
    queryFn: () => getUserWishList(user.id),
    enabled: !!user
  });

  const handleShowMore = () => {
    setStart((prev) => prev + 4);
  };

  useEffect(() => {
    if (items?.data && Array.isArray(items.data)) {
      setCurrentProducts((prev) => [...prev, ...items.data]);
    }
  }, [items]);

  if (isError) {
    return (
      <p className="text-primary font-medium text-base">
        Unable to load products! Try later
      </p>
    );
  }

  /**
   * Check if this product is in your favorites list?
   * @param {string} productId
   */
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

  const handleRedirectPreview = (id: string) => {
    router.push(`${END_POINT.PRODUCT}/${id}`);
  };

  const isButtonDisabled = isLoading || items?.data.length === 0;

  return (
    <>
      <div className="flex flex-wrap lg:gap-x-32 gap-14 lg:justify-normal justify-center">
        {currentProducts.map((item) => (
          <CardProduct
            key={item.id}
            src={item.image}
            alt={item.name}
            icon={
              isProductInWishlist(item.id) ? '/heart-red.svg' : '/heart.svg'
            }
            id={item.id}
            name={item.name}
            price={item.price}
            rating={item.ratings}
            onAdd={() => alert(123)}
            onIconClick={handleToggleFavorite.bind(null, item)}
            onView={handleRedirectPreview}
            colors={item.colors}
            isNewProduct={isNewProduct ? item.isNew : undefined}
            discount={isDiscount ? item.discount : undefined}
            isShowAction={!!user}
          />
        ))}
      </div>
      {isLoading && <p>...Loading</p>}
      {isShowMore && (
        <div className="mt-10 text-center">
          <Button
            onClick={handleShowMore}
            size={SIZE.MEDIUM}
            disabled={isButtonDisabled}
          >
            View All Products
          </Button>
        </div>
      )}
    </>
  );
};

export default ProductList;
