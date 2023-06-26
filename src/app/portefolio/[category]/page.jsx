import Button from '@/components/ui/button/Button';
import SecBtn from '@/components/ui/secBtn/SecBtn';
import Image from 'next/image';
import React from 'react';

// Quand mapage des éléments importé !!! pour l'effet reverse -- utiliser:
// {votreListe.map((item, index) => (
//   <div
//     key={index}
//     className={`${
//       index % 2 === 1 ? 'flex-row-reverse' : '' // Applique la classe flex-row-reverse aux éléments d'index impair
//     }`}
//   >
//     {/* Contenu de l'élément */}
//   </div>
// ))}
/////////////////////////////////////////

function Category({ params }) {
  console.log(params);
  return (
    <div>
      <h1 className='text-primary text-[50px]'>{params.category}</h1>
      <div className='flex gap-12 mt-12 mb-[100px]'>
        <div className='flex-1 flex flex-col gap-5 justify-center'>
          <h2 className='text-[40px]'>Test</h2>
          <p className='text-[20px]'>Description</p>
          <SecBtn text='see More' url='#' />
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
