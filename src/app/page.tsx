'use client';

import { Nav, Pagination, Table, Skeleton } from '@/app/Components';
import { GET_USERS } from '@/lib/graphql/queries';
import { useLazyQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [filter, setFilter] = useState('');
  const pageSize = 10;

  const [getUsers, { loading, data, error }] = useLazyQuery(GET_USERS, {
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    if (!filter) {
      getUsers({
        variables: {
          data: {
            pageSize,
            pageNumber: pageNumber,
            filter: '',
          },
        },
      });
    }
    if (filter) {
      getUsers({
        variables: {
          data: {
            pageSize,
            pageNumber: pageNumber,
            filter,
          },
        },
      });
    }
  }, [filter, getUsers, pageNumber]);

  if (error) {
    return (
      <div
        className="mb-4 rounded-lg bg-danger-100 px-6 py-5 text-base text-danger-700"
        role="alert"
      >
        {error?.message}
      </div>
    );
  }

  const { users } = data || {};

  return (
    <main className="flex min-h-screen flex-col items-center justify-between content-center">
      <Nav setFilter={setFilter} setPageNumber={setPageNumber} />
      {loading || !users?.length ? <Skeleton /> : <Table users={users} />}
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </main>
  );
};

export default HomePage;
