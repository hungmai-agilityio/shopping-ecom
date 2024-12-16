import React from 'react';
import { SkeletonProduct } from '@/ui/components';

export const SkeletonProductList = () => {
  return (
    <div className="flex flex-wrap lg:gap-x-32 gap-14 lg:justify-normal justify-center">
      {Array.from(new Array(4)).map((_, index) => (
        <SkeletonProduct key={index} />
      ))}
    </div>
  );
};
