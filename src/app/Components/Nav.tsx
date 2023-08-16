import React, {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useRef,
} from 'react';

interface NavProps {
  setFilter: Dispatch<SetStateAction<string>>;
  setPageNumber: Dispatch<SetStateAction<number>>;
}

const Nav = ({ setFilter, setPageNumber }: NavProps) => {
  const searchRef: MutableRefObject<HTMLInputElement | null> = useRef(null);

  const handleSearch = () => {
    setFilter(searchRef?.current?.value || '');
    setPageNumber(0);
  };

  return (
    <nav className="relative flex w-full flex-wrap items-center justify-between bg-neutral-900 py-2 text-neutral-100 shadow-lg hover:text-neutral-100 focus:text-neutral-100 lg:py-4">
      <div className="ml-5 flex w-[30%] items-center justify-between">
        <input
          ref={searchRef}
          type="search"
          className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-100 outline-none transition duration-200 ease-in-out focus:z-[3]  focus:text-neutral-100 focus:outline-none motion-reduce:transition-none dark:border-neutral-600 dark:bg-neutral-600 dark:text-neutral-100 dark:placeholder:text-neutral-200"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
          name="filter"
        />

        <span
          className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-white dark:text-neutral-200"
          id="basic-addon2"
        >
          <button
            onClick={handleSearch}
            className="mr-3 inline-block rounded bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#000000"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>
    </nav>
  );
};

export default Nav;
