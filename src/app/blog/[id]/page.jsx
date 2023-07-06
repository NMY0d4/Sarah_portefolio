import Image from 'next/image';
import React from 'react';
import getPostDetails from '../../../../lib/getPostDetails';

export async function generateMetadata({ params }) {
  const post = await getPostDetails(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getPostDetails(params.id);

  return (
    <div className=''>
      <div className='flex'>
        <div className='flex-1 flex flex-col justify-between'>
          <h1 className='text-[40px]'>{data.title}</h1>
          <p className='text-[18px] font-light'>{data.desc}</p>
          <div className='flex items-center gap-3'>
            <Image
              src='https://images.pexels.com/photos/633432/pexels-photo-633432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Sarah portfolio blog detail'
              width={50}
              height={50}
              className='object-cover rounded-[150%]'
            />
            <span className=''>{data.username}</span>
          </div>
        </div>
        <div className='relative flex-1 h-[300px]'>
          <Image
            src={data.img}
            alt='Sarah portfolio blog detail'
            fill={true}
            className='object-cover'
          />
        </div>
      </div>
      <div className='mt-[50px] text-[20px] font-light text-justify'>
        <p className=''>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
