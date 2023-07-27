'use client';
import Link from 'next/link';
import sarahLogo from '/public/logo/sa_logo.png';

import React, { useEffect, useState } from 'react';
import DarkModeToggle from '../darkModeToggle/DarkModeToggle';
import { signOut, useSession } from 'next-auth/react';
import Hamburger from '../ui/BurgerMenu/Hamburger';
import { motion } from 'framer-motion';

import styles from './Navbar.module.css';
import { useSelectedLayoutSegment } from 'next/navigation';
import Image from 'next/image';

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
  const activeSegment = useSelectedLayoutSegment() || '';

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
    <div className='h-[100px] flex justify-between items-center'>
      <Link href={'/'} className='relative font-bold text-xl'>
        <Image src={sarahLogo} alt='logo sarah portfolio' width={50} />
      </Link>
      {/* Menu burger */}
      <div className='relative md:hidden'>
        <div
          className='flex
       justify-center items-center'
        >
          <DarkModeToggle />
          <Hamburger isChecked={isChecked} setIsChecked={setIsChecked} />
        </div>
        <motion.div
          initial={{ opacity: 0, x: 5000 }} // Animation au chargement initial
          animate={{ opacity: isChecked ? 1 : 0, x: isChecked ? 0 : 500 }} // Animation lorsque le menu est ouvert ou fermé
          transition={{ duration: 0.4 }} // Durée de l'animation en secondes
          className={`fixed flex flex-col justify-center items-center gap-4 top-[80px] left-0 h-[90vh] w-[100vw] z-10 bg-secondaryDark md:hidden`}
        >
          {links.map((link) => (
            <Link
              href={link.url}
              className={`text-lightness ${styles.button} ${
                `/${activeSegment}` === link.url ? `${styles.active}` : ''
              }`}
              key={link.id}
              onClick={() => setIsChecked(false)}
            >
              {link.title}
            </Link>
          ))}
        </motion.div>
      </div>
      {/* End Menu Burger */}

      <div className='md:flex items-center md:gap-2 hidden ml-auto'>
        <DarkModeToggle />
        {links.map((link) => (
          <Link
            href={link.url}
            className={`${styles.button} ${
              `/${activeSegment}` === link.url ? `${styles.active}` : ''
            }`}
            key={link.id}
          >
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
