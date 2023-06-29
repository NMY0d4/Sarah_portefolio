'use client';
import React, { useEffect, useState } from 'react';
import { notFound, useRouter } from 'next/navigation';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';

function Dashboard() {
  // const [data, setData] = useState([]);
  // const [err, setError] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //       cache: 'no-store',
  //     });
  //     if (!res.ok) {
  //       // This will activate the closest `error.js` Error Boundary
  //       setError(true);
  //     }
  //     setData(await res.json());
  //     setIsLoading(false);
  //   };

  //   getData();
  // }, []);

  const session = useSession();
  console.log(session);

  const router = useRouter();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  );

  if (session.status === 'loading') {
    return <p>Loading...</p>;
  }

  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login');
  }

  if (session.status === 'authenticated') {
    return <div>Dashboard</div>;
  }
}

export default Dashboard;
