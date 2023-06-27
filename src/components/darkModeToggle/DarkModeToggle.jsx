'use client';
import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div
      className='relative flex justify-between items-center p-[2px] w-[42px] h-[24px] border-[1.5px] border-primary rounded-full'
      onClick={toggle}
    >
      <div className='text-[12px]'>🌙</div>
      <div className='text-[12px]'>🌞</div>
      <div
        className={`w-[15px] h-[15px] bg-primary rounded-full absolute cursor-pointer ${
          mode === 'light' ? 'left-[2px]' : 'right-[2px]'
        }`}
      />
    </div>
  );
};

export default DarkModeToggle;
