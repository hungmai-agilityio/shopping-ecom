import { popping } from '@/constants';
import React from 'react';

interface TagProps {
  label: string;
}

const Tag = ({ label }: TagProps) => {
  return (
    <div className={`flex items-center gap-2 ${popping.className}`}>
      <span className="w-5 h-10 rounded bg-primary"></span>
      <span className="text-base font-semibold text-primary">{label}</span>
    </div>
  );
};

export default Tag;
