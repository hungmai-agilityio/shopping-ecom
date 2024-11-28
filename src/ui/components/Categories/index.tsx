'use client';
import { clsx } from 'clsx';

// Constants
import { popping } from '@/constants';

// Interfaces
import { ICategory } from '@/interface';

// Components
import { Icon } from '@/ui/components';
import { memo } from 'react';

interface CategoriesProps {
  categories: ICategory[];
  selected?: string;
  onSelect?: (id: string) => void;
}

const Categories = memo(
  ({ categories, selected, onSelect }: CategoriesProps) => {
    const handleClick = (id: string) => {
      if (onSelect) onSelect(id);
    };

    return (
      <div className={clsx('flex gap-5', popping.className)}>
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={handleClick.bind(null, category.id)}
            className={clsx(
              'cursor-pointer group flex flex-col justify-center items-center w-44 h-36 border border-black rounded-sm transition duration-300',
              {
                'bg-primary text-white border-transparent':
                  selected === category.id,
                'hover:bg-primary hover:border-transparent':
                  selected !== category.id
              }
            )}
          >
            <Icon
              src={category.image}
              alt={category.title}
              width={56}
              height={56}
              className={clsx('transition duration-300', {
                'brightness-0 invert': selected === category.id,
                'group-hover:brightness-0 group-hover:invert':
                  selected !== category.id
              })}
            />
            <span
              className={clsx('mt-5 text-dark transition duration-300 capitalize', {
                'text-white': selected === category.id,
                'group-hover:text-white': selected !== category.id
              })}
            >
              {category.title}
            </span>
          </div>
        ))}
      </div>
    );
  }
);

export default Categories;
