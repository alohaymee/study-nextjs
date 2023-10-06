import React from 'react';
import { CaretRight } from '@phosphor-icons/react/dist/ssr';
import styles from './NavMenuItem.module.scss';
import { Stack } from 'react-bootstrap';

export default function NavMenuItem({ name = '하위메뉴1', opened = false }) {
  const styleType = opened ? 'opened' : 'closed';

  return (
    <>
      <Stack direction={'horizontal'} className={`${styles[styleType]} px-4 py-3`} gap={2}>
        <CaretRight size={12} color={'#CBDAFF'} weight={'duotone'}></CaretRight>
        <span>{name}</span>
      </Stack>
    </>
  );
}
