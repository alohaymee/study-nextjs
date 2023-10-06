import React from 'react';
import '../styles/globals.scss';

export default function UnsecuredLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>Unsecured... layout</header>
      <div className="main-container">
        <div className="main">{children}</div>
      </div>
    </>
  );
}
