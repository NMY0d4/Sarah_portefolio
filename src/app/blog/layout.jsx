import React from 'react';

const BlogLayout = ({ children }) => {
  return (
    <div>
      <h1>Hi this is blog</h1>
      <section>{children}</section>
    </div>
  );
};

export default BlogLayout;
