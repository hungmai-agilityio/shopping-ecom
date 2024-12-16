'use client';

import { memo, useCallback, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

// Components
import { Categories } from '@/ui/components';

// Interfaces
import { ICategory } from '@/interface';

interface CategorySectionProps {
  categories: ICategory[];
  queryParam: string;
}

const CategorySection = memo(
  ({ categories, queryParam }: CategorySectionProps) => {
    const { push } = useRouter();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams.toString());
    const initCategory = searchParams.get(queryParam) || '';

    const [selected, setSelected] = useState<string | undefined>(initCategory);

    const handleSelect = useCallback((category: string) => {
      setSelected(category);

      params.set(queryParam, category);
      push(`?${params.toString()}`, { scroll: false });
    }, []);

    return (
      <div>
        <Categories
          categories={categories}
          selected={selected}
          onSelect={handleSelect}
        />
      </div>
    );
  }
);

export default CategorySection;
