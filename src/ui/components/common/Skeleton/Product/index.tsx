import React from 'react';

export const SkeletonProduct = () => {
  return (
    <div className="flex flex-col w-card-sm h-card-md p-4 bg-gray-200 rounded-lg shadow-lg">
      <div className="h-32 bg-gray-300 animate-pulse rounded-lg mb-4"></div>
      <div className="w-4/5 h-6 bg-gray-300 animate-pulse rounded-md mb-2"></div>
      <div className="w-3/4 h-6 bg-gray-300 animate-pulse rounded-md mb-2"></div>
      <div className="w-32 h-6 bg-gray-300 animate-pulse rounded-md"></div>
    </div>
  );
};
