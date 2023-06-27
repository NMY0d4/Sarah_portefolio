import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  });
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
          href='/blog/testId'
          className='flex items-center gap-[50px] mb-[50px]'
        >
          <Image
            src='https://images.pexels.com/photos/3601081/pexels-photo-3601081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            width={400}
            height={250}
            className='object-cover'
          />

          <div className=''>
            <h2 className='text-[30px] mb-3'>{item.title}</h2>
            <p className='text-[18px]'>{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
