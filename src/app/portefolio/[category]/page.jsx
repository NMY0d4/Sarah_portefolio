import Button from '@/components/ui/button/Button';
import Image from 'next/image';
import React from 'react';

function Category({ params }) {
  console.log(params);
  return (
    <div>
      <h1 className='text-primary'>{params.category}</h1>
      <div className='flex gap-12 mt-12 mb-[100px]'>
        <div className='flex-1 flex flex-col gap-5 justify-center'>
          <h1 className='text-[40px]'>Test</h1>
          <p className='text-[20px]'>Description</p>
          <Button text='see More' url='#' />
        </div>
        <div className='relative flex-1 h-[500px]'>
          <Image
            className='object-cover'
            src='https://images.pexels.com/photos/2088208/pexels-photo-2088208.jpeg'
            fill={true}
            alt='Sarah portfolio project image'
          />
        </div>
      </div>
    </div>
  );
}

export default Category;
