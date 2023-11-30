import styles from './layout.module.scss';
import LogoBox from '@/(pages)/component/layout/LogoBox';
import React from 'react';
import ProfileBox from '@/(pages)/component/layout/ProfileBox';
import NavBox from '@/(pages)/component/layout/NavBox';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.headerBox}>
          <div className={styles.logoBox}>
            <LogoBox></LogoBox>
          </div>
          <div className={styles.profileBox}>
            <ProfileBox></ProfileBox>
          </div>
        </div>
        <div className={styles.mainBox}>
          <div className={styles.navBox}>
            <NavBox></NavBox>
          </div>
          <div className={styles.contentBox}>{children}</div>
        </div>
      </div>
    </>
  );
}
