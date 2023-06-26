import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <h1 className='text-[60px]'>Mon travail</h1>
      {children}
    </div>
  );
};

export default Layout;
