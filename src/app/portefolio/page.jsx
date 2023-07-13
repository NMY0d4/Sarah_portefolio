import { scale105 } from '@/components/ui/util';
import Link from 'next/link';
import React from 'react';

function Portfolio() {
  // STRING STYLE -------------
  const itemStyle = `border-[5px] rounded-md w-[300px] h-[400px] relative bg-cover ${scale105}`;
  const titleStyle = `absolute right-4 bottom-3 text-[35px] text-lightness font-bold`;
  // -------------------
  return (
    <div className='w-full mx-auto'>
      <h2 className='my-5 mx-0 text-2xl xl:text-4xl'>
        Choisissez une galerie.
      </h2>
      <div className='flex flex-wrap lg:flex-row justify-center gap-12'>
        <Link
          href='portefolio/illustrations'
          className={itemStyle}
          style={{ backgroundImage: `url(/assets/illustration.jpg)` }}
        >
          <span className={titleStyle}>Illustrations</span>
        </Link>

        <Link
          href='portefolio/videos'
          className={itemStyle}
          style={{ backgroundImage: `url(/assets/movie.jpg)` }}
        >
          <span className={titleStyle}>Vidéos</span>
        </Link>

        <Link
          href='portefolio/animations'
          className={itemStyle}
          style={{ backgroundImage: `url(/assets/animation.jpg)` }}
        >
          <span className={titleStyle}>Animations</span>
        </Link>
      </div>
    </div>
  );
}

export default Portfolio;
