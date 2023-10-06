import styles from './layout.module.scss';
import LogoBox from '@/app/(pages)/LogoBox';
import NavBox from '@/app/(pages)/NavBox';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.headerBox}>
          <div className={styles.logoBox}>
            <LogoBox></LogoBox>
          </div>
          <div className={styles.profileBox}></div>
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
