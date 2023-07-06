'use client';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div className='toggleWrapper'>
      <input
        type='checkbox'
        checked={mode === 'dark' ? true : false}
        onClick={toggle}
        className='dn'
        id='dn'
        readOnly
      />
      <label htmlFor='dn' className='toggle'>
        <span className='toggle__handler'>
          <span className='crater crater--1'></span>
          <span className='crater crater--2'></span>
          <span className='crater crater--3'></span>
        </span>
        <span className='star star--1'></span>
        <span className='star star--2'></span>
        <span className='star star--3'></span>
        <span className='star star--4'></span>
        <span className='star star--5'></span>
        <span className='star star--6'></span>
      </label>
    </div>
  );
  {
    /*<div
      classNameName='relative flex justify-between items-center p-[2px] w-[42px] h-[24px] border-[1.5px] border-primary rounded-full'
      onClick={toggle}
    >
      <div className='text-[12px]'>🌙</div>
      <div className='text-[12px]'>🌞</div>
      <div
        className={`w-[15px] h-[15px] bg-primary rounded-full absolute cursor-pointer ${
          mode === 'light' ? 'left-[2px]' : 'right-[2px]'
        }`}
      />
      </div>*/
  }
};

export default DarkModeToggle;
