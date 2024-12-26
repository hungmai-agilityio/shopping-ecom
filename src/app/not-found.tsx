import Link from 'next/link';
import { inter, popping } from '@/constants';

export default function NotFound() {
  return (
    <div className={`container ${popping.className} py-24 lg:px-0 px-4`}>
      <Link href="/" className="text-gray-500">
        Home /
      </Link>
      <span className="text-sm text-dark ml-2">404 Error</span>
      <div className="flex flex-col justify-center items-center mt-28">
        <h2
          className={`${inter.className} lg:text-heading-page md:text-5xl text-3xl font-medium text-dark leading-normal text-center`}
        >
          404 Not Found
        </h2>
        <p className={`${popping.className} lg:text-base text-sm mt-10`}>
          Your visited page not found. You may go home page.
        </p>
        <Link
          href="/"
          className="p-3 border bg-primary text-white w-60 rounded-md mt-28 flex items-center justify-center"
        >
          Back to home page
        </Link>
      </div>
    </div>
  );
}
