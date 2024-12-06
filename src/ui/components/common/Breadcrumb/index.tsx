'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import Link from 'next/link';

interface BreadcrumbProps {
  separator?: string;
  color?: string;
  customLastName?: string;
}

const Breadcrumb = ({
  separator = '/',
  color = 'text-gray-700',
  customLastName
}: BreadcrumbProps) => {
  const pathname = usePathname();
  const paths = ['Home', ...pathname.split('/').filter(Boolean)];
  const items = paths.length;

  const displayPaths =
    items > 3 ? [paths[0], '...', paths[items - 2], paths[items - 1]] : paths;

  return (
    <nav className={clsx('flex text-sm', color)}>
      {displayPaths.map((path, index) => {
        const isLast = index === displayPaths.length - 1;

        return (
          <div key={index} className="flex items-center">
            <Link
              href={`/${paths.slice(1, index + 1).join('/')}`}
              className={clsx(
                isLast ? 'font-semibold text-black' : 'hover:underline'
              )}
            >
              {isLast && customLastName ? customLastName : path}
            </Link>
            {index < displayPaths.length - 1 && (
              <span className="mx-2 text-gray-400">{separator}</span>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
