import Button from '@/components/ui/button/Button';
import SecBtn from '@/components/ui/secBtn/SecBtn';
import Image from 'next/image';
import { items } from './data.js';
import React from 'react';
import { notFound } from 'next/navigation';

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

function Category({ params }) {
  const data = getData(params.category);
  return (
    <div>
      <h1 className='text-primary text-[50px]'>{params.category}</h1>
      {data.map((item, i) => (
        <div
          key={item.id}
          className={`flex gap-12 mt-12 mb-[100px] ${
            i % 2 === 1 ? 'flex-row-reverse' : ''
          }`}
        >
          <div className='flex-1 flex flex-col gap-5 justify-center'>
            <h2 className='text-[40px]'>{item.title}</h2>
            <p className='text-[20px]'>{item.description}</p>
            <SecBtn text='see More' url='#' />
          </div>
          <div className='relative flex-1 h-[500px]'>
            <Image
              className='object-cover'
              src={item.image}
              fill={true}
              alt='Sarah portfolio project image'
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Category;
