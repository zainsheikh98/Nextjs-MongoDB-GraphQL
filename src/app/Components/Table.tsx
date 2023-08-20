import { User } from '@/types';
import React, { useState } from 'react';
import Sort from '../../../public/icons/Sort';

type Dataset = 'name' | 'companyName' | 'phone' | 'email';

interface TableProps {
  users: User[];
}

const TABLE_HEADING = [
  {
    name: 'Name',
    dataset: 'name',
  },
  {
    name: 'Email',
    dataset: 'email',
  },
  {
    name: 'Phone',
    dataset: 'phone',
  },
  {
    name: 'Company',
    dataset: 'companyName',
  },
  {
    name: 'LinkedIn',
  },
];

const Table = ({ users }: TableProps) => {
  const [sortedUsers, setSortedUsers] = useState(users);

  const handleSort = (sortedBy: Dataset) => {
    const sortedList = sortedUsers.sort((a, b) => {
      if (a[sortedBy] < b[sortedBy]) {
        return -1;
      }
      if (a[sortedBy] > b[sortedBy]) {
        return 1;
      }
      return 0;
    });
    setSortedUsers([...sortedList]);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="w-full">
        <div className="inline-block w-full py-2 px-5">
          {!sortedUsers?.length ? (
            <h1 className="text-center text-lg text-neutral-300">
              No Result Found
            </h1>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
                  <tr>
                    {TABLE_HEADING?.map(({ name, dataset }) => (
                      <th key={name} scope="col" className="px-6 py-4">
                        <div className="flex flex-row items-center content-center">
                          <span>{name}</span>
                          {dataset && (
                            <button
                              onClick={() => handleSort(dataset as Dataset)}
                              className="ml-1 rounded hover:bg-neutral-300 p-1"
                            >
                              <Sort />
                            </button>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sortedUsers?.map((user, index) => (
                    <tr
                      key={index}
                      className="border-b dark:border-neutral-500 hover:bg-neutral-800"
                    >
                      <td className="whitespace-nowrap px-6 py-4">
                        {user?.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user?.email}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user?.phone}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user?.companyName}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <a
                          className="rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-indigo-500 transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-indigo-500 focus:text-indigo-500 focus:outline-none focus:ring-0 active:text-indigo-500 dark:hover:bg-neutral-700"
                          href={user?.url}
                          target="_blank"
                        >
                          Visit
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Table;
