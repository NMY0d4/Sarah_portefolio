import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import getUserPosts from '../../../lib/getUserPosts';

const Blog = async () => {
  const data = await getUserPosts();
  console.log(data);
  return (
    <div className=''>
      {data.map((item) => (
        <Link
          key={item._id}
          href={`/blog/${item._id}`}
          className='flex items-center gap-[50px] mb-[50px]'
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
};

export default Blog;
