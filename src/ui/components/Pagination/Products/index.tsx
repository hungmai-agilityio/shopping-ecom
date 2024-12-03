'use client';

import { useSearchParams, useRouter } from 'next/navigation';

// Components
import { Icon } from '@/ui/components';

// Constants
import { TYPE } from '@/constants';

interface PaginationProductProps {
  queryPage: string;
  start: number;
}

const PaginationProduct = ({ queryPage, start }: PaginationProductProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams.toString());

  const handleNext = () => {
    const nextStart = start + 4;
    params.set(queryPage, nextStart.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handlePrev = () => {
    const prevStart = Math.max(0, start - 4);
    params.set(queryPage, prevStart.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="lg:w-28 w-full h-10 flex gap-5 lg:justify-normal justify-center lg:mt-0 mt-10">
      <Icon
        src="/arrow-left.svg"
        alt="arrow-left icon"
        variant={TYPE.SECOND}
        width={24}
        height={24}
        onClick={handlePrev}
      />
      <Icon
        src="/arrow-right.svg"
        alt="arrow-right icon"
        variant={TYPE.SECOND}
        width={24}
        height={24}
        onClick={handleNext}
      />
    </div>
  );
};

export default PaginationProduct;
