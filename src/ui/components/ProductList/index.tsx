'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

// Constants
import { END_POINT, QUERY, SIZE } from '@/constants';

// Interfaces
import { IProduct } from '@/interface';

// Libs
import { getProductLimit } from '@/libs';

// Components
import { Button, CardProduct } from '@/ui/components';

interface ProductListProps {
  products: IProduct[];
  isShowMore?: boolean;
  isNewProduct?: boolean;
  isDiscount?: boolean;
  query?: string;
}

const ProductList = ({
  products,
  isNewProduct,
  isShowMore,
  isDiscount,
  query = ''
}: ProductListProps) => {
  const [currentProducts, setCurrentProducts] = useState<IProduct[]>(products);
  const [start, setStart] = useState<number>(products.length);

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
            icon="/heart.svg"
            id={item.id}
            name={item.name}
            price={item.price}
            rating={item.ratings}
            onAdd={() => alert(123)}
            onIconClick={() => alert('icon')}
            onView={handleRedirectPreview}
            colors={item.colors}
            isNewProduct={isNewProduct ? item.isNew : undefined}
            discount={isDiscount ? item.discount : undefined}
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
