'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto text-center my-28 mb-7.5">
      <h2 className="text-red-600 font-medium md:text-[162px] text-heading">
        Error
      </h2>
      <p className="text-sm text-dark-100 text-center mt-2">
        Oops! Something went wrong we're sorry, but it looks like we've hit a
        snag.
      </p>
      <p className="text-sm text-dark-100 text-center mb-14">
        The page you were trying to reach is currently unavailable.
      </p>
      <button
        className="w-52 p-3 bg-red-500 text-white"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
