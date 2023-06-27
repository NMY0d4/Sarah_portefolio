import Image from 'next/image';
import React from 'react';

function BlogPost() {
  return (
    <div className=''>
      <div className='flex'>
        <div className='flex-1 flex flex-col justify-between'>
          <h1 className='text-[40px]'>
            Un titre pour tester juste le style avant les data
          </h1>
          <p className='text-[18px] font-light'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            voluptas impedit laborum exercitationem, molestias officia alias sed
            vel obcaecati, corporis enim ducimus nesciunt dolor fugit fugiat
            explicabo illo quas voluptatum.
          </p>
          <div className='flex items-center gap-3'>
            <Image
              src='https://images.pexels.com/photos/633432/pexels-photo-633432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Sarah portfolio blog detail'
              width={50}
              height={50}
              className='object-cover rounded-[150%]'
            />
            <span className=''>John Doe</span>
          </div>
        </div>
        <div className='relative flex-1 h-[300px]'>
          <Image
            src='https://images.pexels.com/photos/325807/pexels-photo-325807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='Sarah portfolio blog detail'
            fill={true}
            className='object-cover'
          />
        </div>
      </div>
      <div className='mt-[50px] text-[20px] font-light text-justify'>
        <p className=''>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          facere sit eligendi explicabo eaque, et eum aut! Deserunt autem fugit
          blanditiis voluptate ab reiciendis pariatur, enim tenetur illum, quas
          quidem!Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Eos odio eaque totam eveniet commodi! Obcaecati deserunt officiis
          autem laboriosam laudantium vel soluta saepe. Perspiciatis eaque
          expedita, rem odio deleniti unde! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Qui consequatur veritatis tempore.
          Pariatur ad nemo atque distinctio ipsam error, unde earum vero
          deleniti officia, enim corporis maxime neque odit dolorem?
        </p>
      </div>
    </div>
  );
}

export default BlogPost;
