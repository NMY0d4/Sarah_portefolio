import React from 'react';
import styles from './SecBtn.module.css';
import Link from 'next/link';

const SecBtn = ({ text, url, ...rest }) => {
  if (url) {
    return (
      <Link className={styles.secBtn} href={url} {...rest}>
        {text}
      </Link>
    );
  }

  return (
    <button type='submit' className={styles.secBtn} {...rest}>
      {text}
    </button>
  );
};

export default SecBtn;
