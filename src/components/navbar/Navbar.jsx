'use client';
import Link from 'next/link';
import React from 'react';

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
  return (
    <div className='container h-[100px] flex justify-between items-center'>
      <Link href={'/'} className='font-bold text-xl'>
        Sarah
      </Link>
      <div className='flex items-center gap-4'>
        {links.map((link) => (
          <Link href={link.url} key={link.id}>
            {link.title}
          </Link>
        ))}
        <button
          className='p-2 border-none bg-primaryDark text-lightness rounded-md'
          onClick={() => {
            console.log('logged out');
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
