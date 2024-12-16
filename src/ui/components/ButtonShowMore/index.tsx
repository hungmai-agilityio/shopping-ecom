'use client';

import { useState, useEffect } from 'react';

// Components
import {
  Button,
  CardProductAction,
  SkeletonProductList
} from '@/ui/components';

// Interfaces
import { IProduct, IUser } from '@/interface';

// Libs
import { getProductLimit } from '@/libs';

interface ButtonShowMoreProps {
  queryKey?: string;
  user: IUser;
  startQuery: number;
}

const ButtonShowMore = ({
  queryKey = '',
  user,
  startQuery
}: ButtonShowMoreProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);

  useEffect(() => {
    setProducts([]);
    setHasMoreData(true);
  }, [queryKey]);

  const handleShowMore = async () => {
    setIsLoading(true);
    const { data } = await getProductLimit(queryKey, startQuery, 4);

    if (!data.length) {
      setHasMoreData(false);
      setIsLoading(false);
      return;
    }

    setProducts((prev) => [...prev, ...data]);
    setIsLoading(false);
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap lg:gap-x-32 gap-14 lg:justify-normal justify-center">
        {isLoading && <SkeletonProductList />}
        {products.map((product) => (
          <CardProductAction
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            ratings={product.ratings}
            colors={product.colors || []}
            isDiscount={product.discount !== undefined}
            discount={product.discount}
            isNew={product.isNew}
            user={user}
            originalPrice={product.originalPrice}
            isNewProduct={product.isNew}
          />
        ))}
      </div>

      <div className="mt-5 flex justify-center">
        <Button onClick={handleShowMore} disabled={isLoading || !hasMoreData}>
          {isLoading
            ? 'Loading...'
            : hasMoreData
              ? 'Show More'
              : 'No More Data'}
        </Button>
      </div>
    </div>
  );
};

export default ButtonShowMore;
