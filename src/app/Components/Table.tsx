import { User } from '@/types';
import React from 'react';

interface TableProps {
  users: User[];
}

const Table = ({ users }: TableProps) => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full">
        <div className="inline-block w-full py-2 px-5">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Phone
                  </th>
                  <th scope="col" className="px-6 py-4">
                    LinkedIn URL
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Company Name
                  </th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user, index) => (
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
                      <a
                        className="rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-indigo-500 transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-indigo-500 focus:text-indigo-500 focus:outline-none focus:ring-0 active:text-indigo-500 dark:hover:bg-neutral-700"
                        href={user?.url}
                        target="_blank"
                      >
                        Visit
                      </a>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {user?.companyName}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
