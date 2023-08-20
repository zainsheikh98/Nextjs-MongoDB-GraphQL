import React from 'react';

const Skeleton = () => {
  return (
    <div role="status" className="w-full px-5 animate-pulse">
      {[...new Array(10)].map((_, index) => (
        <div
          key={index}
          className="h-10 bg-gray-200 dark:bg-gray-700 w-full mb-4"
        ></div>
      ))}

      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Skeleton;
