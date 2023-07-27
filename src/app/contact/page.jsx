import SecBtn from '@/components/ui/secBtn/SecBtn';
import Image from 'next/image';
import React from 'react';

export const metadata = {
  title: 'Sarah 👉 Contactez-moi',
  description: 'portefolio graphiste, designer',
};

function Contact() {
  return (
    <div className=''>
      <h1 className='font-poppins font-bold text-5xl mb-14 text-center text-secondary'>
        Entrons en contact
      </h1>
      <div className='flex flex-col-reverse xl:flex-row justify-center items-center gap-10 xl:gap-24'>
        <div className='relative xl:flex-1 w-full h-[300px]'>
          <Image
            className='object-contain image-move'
            src='/assets/contact-sarah.png'
            fill={true}
            alt='Sarah portfolio contact image'
          />
        </div>
        <form className='flex-1'>
          <input type='text' placeholder='Nom' className='inputStyle' />
          <input type='email' placeholder='Email' className='inputStyle' />
          <textarea
            className='inputStyle'
            placeholder='Message'
            cols='30'
            rows='10'
          ></textarea>
          <SecBtn classPerso='z-50' text='Envoyer' />
        </form>
      </div>
    </div>
  );
}

export default Contact;
