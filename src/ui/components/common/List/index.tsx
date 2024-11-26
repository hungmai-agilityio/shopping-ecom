import Link from 'next/link';

// Constants
import { popping } from '@/constants';

interface ListProps {
  heading: string;
  items: Array<{ name: string; url?: string }>;
  color?: string;
}
const List = ({ heading, items, color = 'text-black' }: ListProps) => {
  return (
    <div className={`${popping.className}`}>
      <h3 className="capitalize font-medium text-xl">{heading}</h3>

      <div className="mt-5">
        {items.map((item, index) => (
          <Link
            href={item.url || '#'}
            className={`${color} block mb-4 capitalize text-sm cursor-pointer hover:text-purple-700`}
            key={index}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default List;
