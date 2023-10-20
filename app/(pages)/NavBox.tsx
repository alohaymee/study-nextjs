import React from 'react';
import styles from './NavBox.module.scss';
import { Stack } from 'react-bootstrap';
import NavPartBox from '@/app/(pages)/NavPartBox';
import NavMenu from '@/app/(pages)/NavMenu';
import NavMenuItem from '@/app/(pages)/NavMenuItem';
import { Graph, ShoppingCart, User } from '@phosphor-icons/react/dist/ssr';

export default function NavBox() {
  return (
    <>
      <Stack className={`${styles.wrapper} pt-3`}>
        <NavPartBox title={'마케팅'}>
          <NavMenu name={'컨텐츠 관리'} opened>
            <NavMenuItem name={'공지사항'} opened></NavMenuItem>
            <NavMenuItem name={'배너'}></NavMenuItem>
            <NavMenuItem name={'이벤트'}></NavMenuItem>
          </NavMenu>
          <NavMenu Icon={Graph} name={'예약 통계'} opened={false} />
        </NavPartBox>
        <NavPartBox title={'CS 센터'}>
          <NavMenu Icon={ShoppingCart} name={'예약 관리'}></NavMenu>
          <NavMenu Icon={User} name={'회원 관리'}></NavMenu>
        </NavPartBox>
      </Stack>
    </>
  );
}
