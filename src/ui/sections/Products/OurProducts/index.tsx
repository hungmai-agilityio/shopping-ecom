// Interfaces
import { ISearchParams } from '@/interface/util';

// Components
import { Heading, PaginationProduct, Tag } from '@/ui/components';
import OurProductList from '@/ui/sections/Products/OurProducts/List';

// Sections
import { IUser } from '@/interface';

interface OurProductProps {
  searchParams: ISearchParams;
  user: IUser;
}

const OurProductSection = async ({ searchParams, user }: OurProductProps) => {
  const start = parseInt(searchParams['category'] || '0', 10);

  const query = searchParams?.['product-query'] ?? '';
  const queryCategory = query ? `category=${query}` : '';

  return (
    <div>
      <Tag label="Our Products" />
      <div className="md:flex justify-between my-7 lg:gap-28 gap-9 items-center">
        <Heading styles="my-10">Explore Our Products</Heading>
        <PaginationProduct queryPage="category" start={start} />
      </div>
      <OurProductList page={start} queryCategory={queryCategory} user={user} />
    </div>
  );
};

export default OurProductSection;
