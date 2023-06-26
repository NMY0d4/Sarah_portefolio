import React from 'react';
import styles from './SecBtn.module.css';
import Link from 'next/link';

const SecBtn = ({ text, url }) => {
  return (
    <Link href={url} className={styles.secBtn}>
      <span className='h-full flex justify-center items-center'>{text}</span>
    </Link>
  );
};

export default SecBtn;
