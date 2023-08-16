'use client';
import React, { Dispatch, SetStateAction } from 'react';

interface PaginationProps {
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
}

const Pagination = ({ pageNumber, setPageNumber }: PaginationProps) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="list-style-none flex">
        <li>
          <button
            onClick={() => setPageNumber((prev) => prev - 1)}
            className="disabled:pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm disabled:text-neutral-500 transition-all duration-300 dark:text-neutral-100"
            disabled={pageNumber <= 0}
          >
            Previous
          </button>
        </li>
        <li>
          <span className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white">
            Page No. {pageNumber + 1}
          </span>
        </li>
        <li>
          <button
            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
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
