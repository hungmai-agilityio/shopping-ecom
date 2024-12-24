import React from 'react';
import { SkeletonProduct } from '@/ui/components';

export const SkeletonProductList = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {Array.from(new Array(4)).map((_, index) => (
        <SkeletonProduct key={index} />
      ))}
    </div>
  );
};
