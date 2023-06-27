import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Blog() {
  return (
    <div className='flex flex-col gap-5'>
      <Link
        href='/blog/testId'
        className='flex items-center gap-[50px] mb-[50px]'
      >
        <div className=''>
          <Image
            src='https://images.pexels.com/photos/3601081/pexels-photo-3601081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            width={400}
            height={250}
            className='object-cover'
          />
        </div>
        <div className=''>
          <h2 className='text-[30px] mb-3'>Test</h2>
          <p className='text-[18px] '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            quos labore, voluptates maxime ipsa ab vero repellat illo? Non
            debitis recusandae, odit cumque quidem est sint ad fugit soluta?
            Accusantium!
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Blog;
