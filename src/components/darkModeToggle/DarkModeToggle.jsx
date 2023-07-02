'use client';
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div onClick={toggle} class='toggleWrapper '>
      <input type='checkbox' onClick={toggle} class='dn' id='dn' />
      <label for='dn' class='toggle'>
        <span class='toggle__handler'>
          <span class='crater crater--1'></span>
          <span class='crater crater--2'></span>
          <span class='crater crater--3'></span>
        </span>
        <span class='star star--1'></span>
        <span class='star star--2'></span>
        <span class='star star--3'></span>
        <span class='star star--4'></span>
        <span class='star star--5'></span>
        <span class='star star--6'></span>
      </label>
    </div>
  );
  {
    /*<div
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
      </div>*/
  }
};

export default DarkModeToggle;
