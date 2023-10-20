import React from 'react';
import styles from './NavPartBox.module.scss';

export default function NavPartBox({ title, children }) {
  return (
    <>
      <h5 className={`${styles.title} d-block w-100 px-3 py-2`}>{title}</h5>
      {children}
    </>
  );
}
