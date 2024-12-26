export const SkeletonProductDetail = () => {
  return (
    <section className="container md:flex flex-wrap gap-10 my-10 w-full animate-pulse">
      <div className="lg:block hidden gap-6 p-0">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 w-44 h-32 mb-7 flex justify-center items-center rounded-md"
          />
        ))}
      </div>
      <div className="lg:w-card-detail h-card-detail w-full mb-5 bg-gray-200 rounded-md flex justify-center items-center" />

      <div className="flex-1 space-y-6">
        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
        <div className="flex items-center gap-5">
          <div className="h-4 bg-gray-200 rounded w-1/6"></div>
          <div className="h-4 bg-gray-200 rounded w-1/6"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>
        <div className="h-8 bg-gray-200 rounded w-1/3"></div>
        <div className="space-y-2">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="h-4 bg-gray-200 rounded w-full"></div>
          ))}
        </div>
        <div className="flex gap-5 items-center">
          <div className="h-6 bg-gray-200 rounded w-16"></div>
          <div className="flex gap-3">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="w-8 h-8 bg-gray-200 rounded-full"
              ></div>
            ))}
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="h-6 bg-gray-200 rounded w-16"></div>
          <div className="flex gap-3">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="w-10 h-10 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
        <div className="flex gap-5">
          <div className="h-10 bg-gray-200 rounded w-1/4"></div>
          <div className="h-10 bg-gray-200 rounded w-12"></div>
        </div>
      </div>
    </section>
  );
};
