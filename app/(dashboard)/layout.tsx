import '../globals.css';
import './style.css';
import React from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={'wrapper-box'}>
      <div className={'header-box'}>
        <div className={'header-left-box'}>header-left-box</div>
        <div className={'header-right-box'}>
          <div className={'profile-box'}>profile-box</div>
        </div>
      </div>
      <div className={'body-box'}>
        <div className={'nav-box'}>nav-box</div>
        <div className={'content-box'}>{children}</div>
      </div>
    </div>
  );
}
