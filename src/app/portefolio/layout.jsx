import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className='w-full mx-auto'>
      <h1 className='text-[40px] xl:text-[60px]'>Mon travail</h1>
      {children}
    </div>
  );
};

export default Layout;
