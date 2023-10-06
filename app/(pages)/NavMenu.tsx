import React from 'react';
import { CaretRight, CaretUp, Info } from '@phosphor-icons/react/dist/ssr';
import styles from './NavMenu.module.scss';
import { Stack } from 'react-bootstrap';

export default function NavMenu({ name = '메뉴1', opened = true, children }) {
  const styleType = opened ? 'opened' : 'closed';

  return (
    <>
      <Stack direction={'horizontal'} className={`${styles[styleType]} px-4 py-3`} gap={2}>
        <Info size={16} color={'#CBDAFF'} weight={'bold'}></Info>
        <span className={``}>{name}</span>
        {opened && <CaretUp className={`ms-auto`} size={12} color={'#CBDAFF'} weight={'bold'}></CaretUp>}
        {!opened && <CaretRight className={`ms-auto`} size={12} color={'#CBDAFF'} weight={'bold'}></CaretRight>}
      </Stack>
      {opened && children}
    </>
  );
}
