import React from 'react';
import styles from './NavBox.module.scss';
import { Stack } from 'react-bootstrap';
import NavPartBox from '@/app/(pages)/NavPartBox';
import NavMenu from '@/app/(pages)/NavMenu';
import NavMenuItem from '@/app/(pages)/NavMenuItem';

export default function NavBox() {
  return (
    <>
      <Stack className={`${styles.wrapper}`}>
        <NavPartBox>
          <NavMenu name={'컨텐츠 관리'} opened>
            <NavMenuItem name={'공지사항'} opened></NavMenuItem>
            <NavMenuItem name={'배너'}></NavMenuItem>
            <NavMenuItem name={'이벤트'}></NavMenuItem>
          </NavMenu>
          <NavMenu name={'예약 통계'} opened={false}></NavMenu>
        </NavPartBox>
      </Stack>
    </>
  );
}
