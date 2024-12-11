'use client';
import { clsx } from 'clsx';
import { memo } from 'react';

// Constants
import { categoryLabels, popping } from '@/constants';

// Interfaces
import { ICategory } from '@/interface';

// Components
import { Icon } from '@/ui/components';

interface CategoriesProps {
  categories: ICategory[];
  selected?: string;
  onSelect?: (category: string) => void;
}

const Categories = memo(
  ({ categories, selected, onSelect }: CategoriesProps) => {
    const handleClick = (category: string) => {
      if (onSelect) onSelect(category);
    };

    return (
      <div className={clsx('flex gap-5', popping.className)}>
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={handleClick.bind(null, category.title)}
            className={clsx(
              'cursor-pointer group flex flex-col justify-center items-center w-44 h-36 border border-black rounded-sm transition duration-300',
              {
                'bg-primary text-white border-transparent':
                  selected === category.title,
                'hover:bg-primary hover:border-transparent':
                  selected !== category.title
              }
            )}
          >
            <Icon
              src={category.image}
              alt={category.title}
              width={56}
              height={56}
              className={clsx('transition duration-300', {
                'brightness-0 invert': selected === category.title,
                'group-hover:brightness-0 group-hover:invert':
                  selected !== category.title
              })}
            />
            <span
              className={clsx(
                'mt-5 text-dark transition duration-300 capitalize',
                {
                  'text-white': selected === category.title,
                  'group-hover:text-white': selected !== category.title
                }
              )}
            >
              {categoryLabels[category.title] || category.title}
            </span>
          </div>
        ))}
      </div>
    );
  }
);

export default Categories;
