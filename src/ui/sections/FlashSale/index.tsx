// Libs
import { getProductLimit } from '@/libs';

// Components
import {
  Countdown,
  Heading,
  PaginationProduct,
  ProductList,
  Tag
} from '@/ui/components';

const FlashSale = async () => {
  const { data, error } = await getProductLimit('isFlashSale=true', 0, 4);

  const start = 4;

  return (
    <div className="container my-20">
      <Tag label="Today's" />

      <div className="flex justify-between flex-wrap items-end mb-12">
        <div className="md:flex mt-7 lg:gap-28 gap-9 items-end">
          <Heading>Flash sales</Heading>
          <Countdown days={3} hours={1} minutes={25} seconds={5} />
        </div>

        <PaginationProduct queryPage="flash-sale-page" start={start} />
      </div>

      {error ? (
        <p className="text-center text-5xl text-primary">
          Unable to load products! Try later
        </p>
      ) : (
        <ProductList
          products={data}
          isDiscount
          isShowMore
          query={'isFlashSale=true'}
        />
      )}
    </div>
  );
};

export default FlashSale;
