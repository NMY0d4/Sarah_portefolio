'use client';
import React, { useEffect, useState } from 'react';
import { notFound, useRouter } from 'next/navigation';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import SecBtn from '@/components/ui/secBtn/SecBtn';

function Dashboard() {
  const session = useSession();
  console.log(session);
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  console.log(data);

  useEffect(() => {
    if (session.status === 'unauthenticated') {
      router?.push('/dashboard/login');
    }
  }, [session.status, router]);

  if (session.status === 'loading') {
    return <p>Loading...</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch('/api/posts', {
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === 'authenticated') {
    return (
      <div className='container'>
        <div className='posts'>
          {data ? (
            data.map((post) => (
              <div key={post.id} className='post'>
                <div className='relative imgContainer'>
                  <Image src={post.img} fill={true} alt='' />
                </div>
                <h2 className='title'>{post.title}</h2>
                <span className='delete'>X</span>
              </div>
            ))
          ) : (
            <p>Vous n&apos;avez créé aucun posts.</p>
          )}
        </div>
        <form className='' onSubmit={handleSubmit}>
          <h2 className='my-5 mx-0 text-4xl'>Add New Post</h2>
          <input type='text' placeholder='Title' className='inputStyle' />
          <input type='text' placeholder='Description' className='inputStyle' />
          <input type='text' placeholder='Image' className='inputStyle' />
          <textarea
            placeholder='Content'
            className='inputStyle'
            cols='30'
            rows='10'
          ></textarea>
          <SecBtn text='Send' />
        </form>
      </div>
    );
  }
}

export default Dashboard;
