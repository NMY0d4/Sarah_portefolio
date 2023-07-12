'use client';
import Link from 'next/link';
import React from 'react';
import DarkModeToggle from '../darkModeToggle/DarkModeToggle';
import { signOut, useSession } from 'next-auth/react';
import Hamburger from '../ui/BurgerMenu/Hamburger';

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
  const session = useSession();
  return (
    <div className='container h-[100px] flex justify-between items-center'>
      <Link href={'/'} className='font-bold text-xl'>
        Sarah
      </Link>
      <div
        className='flex
       justify-center items-center md:hidden'
      >
        <DarkModeToggle />
        <Hamburger />
      </div>
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
