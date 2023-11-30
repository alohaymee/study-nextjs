import React, { ReactElement, ReactNode } from 'react';
import { CaretDown, CaretRight, Info } from '@phosphor-icons/react/dist/ssr/index';
import styles from './NavMenu.module.scss';
import { Stack } from 'react-bootstrap';
import { Icon } from '@phosphor-icons/react';

export default function NavMenu({
  Icon = Info,
  name = '메뉴1',
  opened = false,
  children,
}: {
  Icon: Icon;
  name: string;
  opened?: boolean;
  children?: ReactNode;
}) {
  const styleType = opened ? 'opened' : 'closed';
  const iconWeight = opened ? 'bold' : 'regular';

  return (
    <>
      <Stack role={'button'} direction={'horizontal'} className={`${styles[styleType]} pointer`} gap={3}>
        <Icon size={16} color={'#CBDAFF'} weight={iconWeight} />
        <span className={``}>{name}</span>
        {children && opened && (
          <CaretDown className={`ms-auto`} size={12} color={'#CBDAFF'} weight={'bold'}></CaretDown>
        )}
        {children && !opened && (
          <CaretRight className={`ms-auto`} size={12} color={'#CBDAFF'} weight={'bold'}></CaretRight>
        )}
      </Stack>
      {opened && children}
    </>
  );
}
