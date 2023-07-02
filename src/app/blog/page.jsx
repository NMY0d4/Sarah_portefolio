import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

async function getData() {
  const res = await fetch(`${process.env.APP_URL}/api/posts`, {
    cache: 'no-store',
  });
  // const posts = await res.json();
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className=''>
      {data.map((item) => (
        <Link
          key={item.id}
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
