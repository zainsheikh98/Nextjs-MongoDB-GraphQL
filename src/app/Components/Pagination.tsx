'use client';
import React, { Dispatch, SetStateAction } from 'react';

interface PaginationProps {
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
  records: number;
}

const Pagination = ({
  pageNumber,
  setPageNumber,
  records,
}: PaginationProps) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="list-style-none flex">
        <li>
          <button
            onClick={() => setPageNumber((prev) => prev - 1)}
            className="disabled:pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 disabled:text-neutral-500 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
            disabled={pageNumber <= 0}
          >
            Previous
          </button>
        </li>
        <li>
          <span className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 dark:text-white ">
            Page No. {pageNumber + 1}
          </span>
        </li>
        <li>
          <button
            disabled={records < 10}
            className="disabled:pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 disabled:text-neutral-500 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
            onClick={() => setPageNumber((prev) => prev + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
