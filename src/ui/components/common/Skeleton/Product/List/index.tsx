import React from 'react';
import { SkeletonProduct } from '@/ui/components';

export const SkeletonProductList = () => {
  return (
    <div className="flex flex-wrap gap-10 w-screen">
      {Array.from(new Array(4)).map((_, index) => (
        <SkeletonProduct key={index} />
      ))}
    </div>
  );
};
