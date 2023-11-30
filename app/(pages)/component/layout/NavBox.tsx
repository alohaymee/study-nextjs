import React from 'react';
import styles from './NavBox.module.scss';
import { Stack } from 'react-bootstrap';
import NavPartBox from '@/(pages)/component/layout/NavPartBox';
import NavMenu from '@/(pages)/component/layout/NavMenu';
import NavMenuItem from '@/(pages)/component/layout/NavMenuItem';
import { Graph, Info, ShoppingCart, User } from '@phosphor-icons/react/dist/ssr/index';

export default function NavBox() {
  return (
    <>
      <Stack className={`${styles.wrapper}`}>
        <NavPartBox title={'마케팅'}>
          <NavMenu Icon={Info} name={'컨텐츠 관리'} opened>
            <NavMenuItem name={'공지사항'} opened></NavMenuItem>
            <NavMenuItem name={'배너'}></NavMenuItem>
            <NavMenuItem name={'이벤트'}></NavMenuItem>
          </NavMenu>
          <NavMenu Icon={Graph} name={'예약 통계'} />
        </NavPartBox>
        <NavPartBox title={'CS 센터'}>
          <NavMenu Icon={ShoppingCart} name={'예약 관리'} opened></NavMenu>
          <NavMenu Icon={User} name={'회원 관리'}></NavMenu>
        </NavPartBox>
      </Stack>
    </>
  );
}
