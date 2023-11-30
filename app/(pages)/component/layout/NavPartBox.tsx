import React, { ReactNode } from 'react';
import styles from './NavPartBox.module.scss';

export default function NavPartBox({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <h5 className={`${styles.title} d-block w-100`}>{title}</h5>
      {children}
    </>
  );
}
