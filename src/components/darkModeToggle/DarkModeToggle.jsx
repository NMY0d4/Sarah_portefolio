import React from 'react';

const DarkModeToggle = () => {
  const mode = 'light';
  return (
    <div className='relative flex justify-between items-center p-[2px] w-[42px] h-[24px] border-[1.5px] border-primary rounded-full'>
      <div className='text-[12px]'>🌙</div>
      <div className='text-[12px]'>🌞</div>
      <div
        className='w-[15px] h-[15px] bg-primary rounded-full absolute cursor-pointer'
        style={mode === 'light' ? { left: '2px' } : { right: '2px' }}
      />
    </div>
  );
};

export default DarkModeToggle;
