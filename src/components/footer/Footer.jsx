import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className='h-[50px] flex items-center justify-between mt-12'>
      <div>&copy;2023 Sarah. Tous droits réservés.</div>
      <div className='flex gap-2 opacity-60'>
        <Image
          src='/assets/socialIcons/discord.jpg'
          width={20}
          height={20}
          alt='Sarah portfolio discord icon'
          className='cursor-pointer'
        />
        <Image
          src='/assets/socialIcons/facebook.png'
          width={20}
          height={20}
          alt='Sarah portfolio facebook icon'
          className='cursor-pointer'
        />
        <Image
          src='/assets/socialIcons/instagram.jpg'
          width={20}
          height={20}
          alt='Sarah portfolio instagram icon'
          className='cursor-pointer'
        />
        <Image
          src='/assets/socialIcons/linkedin.png'
          width={20}
          height={20}
          alt='Sarah portfolio linkedin icon'
          className='cursor-pointer'
        />
      </div>
    </div>
  );
};

export default Footer;
