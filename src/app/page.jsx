'use client';
import Image from 'next/image';
import HeroImg from '/public/assets/sarah-hero2.png';
import Button from '@/components/ui/button/Button';

export default function Home() {
  // STRING STYLE -------------
  const item = 'flex-1 flex flex-col gap-8 xl:gap-12';
  // ---------------------
  return (
    <div className='flex flex-col-reverse items-start gap-10 xl:gap-20 lg:flex-row lg:items-center'>
      <div className={`${item} w-[90%] mx-auto sm:w-[80%]`}>
        <h1
          className='font-poppins font-extrabold bg-gradient-to-t from-tertiary to-primaryDark text-transparent bg-clip-text 
        leading-[2.5rem] sm:leading-[3.5rem] xl:leading-[4.2rem]'
        >
          Laissez votre imagination prendre vie
        </h1>
        <p className='text-sm sm:text-lg font-semibold'>
          Découvrez l&apos;univers visuel captivant d&apos;une graphiste
          passionnée : plongez dans un monde d&apos;expressions artistiques où
          chaque pixel raconte une histoire.
        </p>
        <Button text='Mes projets' url={'/portefolio'} />
      </div>
      <div className={`${item} mx-auto`}>
        <Image
          src={HeroImg}
          alt='Sarah portfolio Hero image w-full h-full'
          className='w-full object-cover image-move'
        />
      </div>
    </div>
  );
}
