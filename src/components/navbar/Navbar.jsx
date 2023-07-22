'use client';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import DarkModeToggle from '../darkModeToggle/DarkModeToggle';
import { signOut, useSession } from 'next-auth/react';
import Hamburger from '../ui/BurgerMenu/Hamburger';
import { motion } from 'framer-motion';

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portefolio',
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 4,
    title: 'About',
    url: '/about',
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard',
  },
];

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);
  const session = useSession();

  useEffect(() => {
    function handleResize() {
      setIsChecked(window.innerWidth > 768 && false);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isChecked) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isChecked]);

  return (
    <div className='container h-[100px] flex justify-between items-center'>
      <Link href={'/'} className='font-bold text-xl'>
        Sarah
      </Link>
      {/* Menu burger */}
      <div className='relative'>
        <div
          className='flex
       justify-center items-center md:hidden'
        >
          <DarkModeToggle />
          <Hamburger isChecked={isChecked} setIsChecked={setIsChecked} />
          {/* {isChecked && (
            <div className='fixed flex flex-col justify-center items-center gap-4 top-[80px] left-0 h-[90vh] w-[100vw] z-10 bg-orange-700'>
              {links.map((link) => (
                <Link className='' href={link.url} key={link.id}>
                  {link.title}
                </Link>
              ))}
            </div>
          )} */}
        </div>
        <motion.div
          initial={{ opacity: 0, x: 40 }} // Animation au chargement initial
          animate={{ opacity: isChecked ? 1 : 0, x: isChecked ? 0 : 40 }} // Animation lorsque le menu est ouvert ou fermé
          transition={{ duration: 0.4 }} // Durée de l'animation en secondes
          className={`fixed flex flex-col justify-center items-center gap-4 top-[80px] left-0 h-[90vh] w-[100vw] z-10 bg-secondaryDark`}
        >
          {links.map((link) => (
            <Link
              className='text-lightness'
              href={link.url}
              key={link.id}
              onClick={() => setIsChecked(false)}
            >
              {link.title}
            </Link>
          ))}
        </motion.div>
      </div>
      {/* End Menu Burger */}

      <div className='relative md:flex md:items-center md:gap-4 hidden'>
        <DarkModeToggle />
        {links.map((link) => (
          <Link href={link.url} key={link.id}>
            {link.title}
          </Link>
        ))}
        {session.status === 'authenticated' && (
          <button
            className='p-2 border-none bg-primaryDark text-lightness rounded-md'
            onClick={signOut}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
