import React from 'react';
import styles from './SecBtn.module.css';
import Link from 'next/link';

const SecBtn = ({ text, url, classPerso = '', ...rest }) => {
  if (url) {
    return (
      <Link {...rest} className={`${styles.secBtn} ${classPerso}`} href={url}>
        {text}
      </Link>
    );
  }

  return (
    <button
      {...rest}
      type='submit'
      className={`${styles.secBtn} ${classPerso}`}
    >
      {text}
    </button>
  );
};

export default SecBtn;
