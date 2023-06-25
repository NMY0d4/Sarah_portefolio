'use client';
import Image from 'next/image';
import HeroImg from '/public/assets/sarah-hero.png';
import Button from '@/components/ui/button/Button';

export default function Home() {
  const item = 'flex-1 flex flex-col gap-12';
  return (
    <div className='flex items-start gap-24'>
      <div className={item}>
        <h1 className='bg-gradient-to-t from-tertiary to-primaryDark text-transparent bg-clip-text leading-snug'>
          Laissez votre imagination prendre vie
        </h1>
        <p className='font-lg font-light'>
          Découvrez l&apos;univers visuel captivant d&apos;une graphiste
          passionnée : plongez dans un monde d&apos;expressions artistiques où
          chaque pixel raconte une histoire.
        </p>
        <Button text='Mes projets' />
      </div>
      <div className={item}>
        <Image
          src={HeroImg}
          alt='Sarah portfolio Hero image'
          className='w-full object-cover'
        />
      </div>
    </div>
  );
}
