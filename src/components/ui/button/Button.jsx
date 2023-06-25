import React from 'react';
import styles from './Button.module.css';
import Link from 'next/link';

const Button = ({ text, url }) => {
  return (
    <Link href={url} className={styles.btn}>
      {text}
    </Link>
  );
};

export default Button;
