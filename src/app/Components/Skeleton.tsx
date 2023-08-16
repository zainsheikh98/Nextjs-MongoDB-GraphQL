import React from 'react';

const Skeleton = () => {
  return (
    <div role="status" className="w-full animate-pulse">
      {[...new Array(10)].map((_, index) => (
        <div
          key={index}
          className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"
        ></div>
      ))}

      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Skeleton;
