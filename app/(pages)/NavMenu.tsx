import React from 'react';
import { CaretDown, CaretRight, Icon, Info } from '@phosphor-icons/react/dist/ssr';
import styles from './NavMenu.module.scss';
import { Stack } from 'react-bootstrap';

export default function NavMenu({
  Icon = Info,
  name = '메뉴1',
  opened = false,
  children,
}: {
  Icon: Icon;
  name: string;
  opened: boolean;
  children: React.ElementType;
}) {
  console.log(Icon);
  const styleType = opened ? 'opened' : 'closed';
  return (
    <>
      <Stack direction={'horizontal'} className={`${styles[styleType]} px-4 py-3`} gap={2}>
        <Icon size={16} color={'#CBDAFF'} weight={'bold'} />
        <span className={``}>{name}</span>
        {opened && <CaretDown className={`ms-auto`} size={12} color={'#CBDAFF'} weight={'bold'}></CaretDown>}
        {!opened && <CaretRight className={`ms-auto`} size={12} color={'#CBDAFF'} weight={'bold'}></CaretRight>}
      </Stack>
      {opened && children}
    </>
  );
}
