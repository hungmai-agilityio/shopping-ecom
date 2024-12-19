'use client';

import { useState, useEffect, memo, useCallback } from 'react';

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

const ButtonShowMore = memo(
  ({ queryKey = '', user, startQuery }: ButtonShowMoreProps) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [hasMoreData, setHasMoreData] = useState<boolean>(true);
    const [start, setStart] = useState<number>(startQuery);
    const limit = 4;

    useEffect(() => {
      setProducts([]);
      setHasMoreData(true);
      setStart(startQuery);
    }, [queryKey, startQuery]);

    /**
     *  Handle show more product when click button
     *  Callback when fetching limited data from the last data previously fetched
     **/
    const handleShowMore = useCallback(async () => {
      setIsLoading(true);
      const { data } = await getProductLimit(queryKey, start, limit);

      if (!data.length) {
        setHasMoreData(false);
        setIsLoading(false);
        return;
      }

      setProducts((prev) => [...prev, ...data]);
      setStart((prevStart) => prevStart + limit);
      setIsLoading(false);
    }, [start]);

    return (
      <div className="w-full mt-5">
        <div className="flex flex-wrap lg:gap-x-32 gap-14 lg:justify-normal justify-center">
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
          {isLoading && <SkeletonProductList />}
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
  }
);

export default ButtonShowMore;
