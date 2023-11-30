import React from 'react';
import { CaretRight } from '@phosphor-icons/react/dist/ssr/index';
import styles from './NavMenuItem.module.scss';
import { Stack } from 'react-bootstrap';

export default function NavMenuItem({ name = '하위메뉴1', opened = false }) {
  const styleType = opened ? 'opened' : 'closed';

  return (
    <>
      <Stack direction={'horizontal'} className={`${styles[styleType]}`} gap={3} role={'button'}>
        <CaretRight size={12} color={opened ? '#F9A825' : '#CBDAFF'} weight={'duotone'}></CaretRight>
        <span>{name}</span>
      </Stack>
    </>
  );
}