'use client';
import React, { useEffect, useState } from 'react';
import { notFound, useRouter } from 'next/navigation';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import SecBtn from '@/components/ui/secBtn/SecBtn';

function Dashboard() {
  const session = useSession();
  // console.log(session.data.user);
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  useEffect(() => {
    if (session.status === 'unauthenticated') {
      router.push('/dashboard/login');
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
        method: 'POST',
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      e.target[0].value = '';
      e.target[1].value = '';
      e.target[2].value = '';
      e.target[3].value = '';
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });

      mutate();
    } catch (error) {
      console.log(err);
    }
  };

  if (session.status === 'authenticated') {
    return (
      <div className='flex gap-[100px]'>
        <div className='flex-1'>
          {isLoading && <p>Loading...</p>}
          {data?.length > 0 ? (
            data.map((post) => (
              <div
                key={post._id}
                className='flex items-center justify-between my-[50px]'
              >
                <div className='relative w-[200px] h-[100px] imgContainer'>
                  <Image
                    src={post.img}
                    fill={true}
                    className='object-cover'
                    alt=''
                  />
                </div>
                <h2 className='title'>{post.title}</h2>
                <span
                  className='cursor-pointer text-danger'
                  onClick={() => handleDelete(post._id)}
                >
                  X
                </span>
              </div>
            ))
          ) : (
            <p className='text-inherit'>Vous n&apos;avez créé aucun posts.</p>
          )}
        </div>
        <form className='flex-1 flex flex-col gap-5' onSubmit={handleSubmit}>
          <h2 className='my-5 mx-0 text-4xl'>Add New Post</h2>
          <input
            type='text'
            placeholder='Title'
            className='inputStyle'
            required
          />
          <input
            type='text'
            placeholder='Description'
            className='inputStyle'
            required
          />
          <input
            type='text'
            placeholder='Image'
            className='inputStyle'
            required
          />
          <textarea
            placeholder='Content'
            className='inputStyle'
            cols='30'
            rows='10'
            required
          ></textarea>
          <SecBtn text='Send' />
        </form>
      </div>
    );
  }
}

export default Dashboard;
