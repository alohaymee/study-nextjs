import React from 'react';
import NavMenu from '@/app/(pages)/NavMenu';

export default function NavPartBox({ children }) {
  return (
    <>
      <h5 className={`d-block w-100`}>마케팅</h5>
      {children}
    </>
  );
}
