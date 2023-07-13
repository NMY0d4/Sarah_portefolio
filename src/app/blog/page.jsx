import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import getUserPosts from '@/lib/getUserPosts';

export default async function BlogPage() {
  const postsData = getUserPosts();
  const posts = await postsData;
  // const posts = [];
  if (!posts) return;
  return (
    <div className=''>
      {posts.length > 0 &&
        posts.map((item) => (
          <Link
            key={item._id}
            href={`/blog/${item._id}`}
            className='flex flex-col-reverse lg:flex-row items-center lg:gap-[50px] gap-[20px] xl:mb-[50px] mb-[30px]'
          >
            <Image
              src={item.img}
              alt=''
              width={400}
              height={250}
              className='object-cover'
            />

            <div className=''>
              <h2 className='text-[30px] mb-3'>{item.title}</h2>
              <p className='text-[18px]'>{item.desc}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}
