import Image from 'next/image';
import React from 'react';
import styles from './LogoBox.module.scss';
import { Stack } from 'react-bootstrap';
import { CaretDoubleRight } from '@phosphor-icons/react/dist/ssr/CaretDoubleRight';
import { SmileyAngry } from '@phosphor-icons/react/dist/ssr/SmileyAngry';
import { CaretDoubleLeft, DotsThree } from '@phosphor-icons/react/dist/ssr/index';

export default function LogoBox() {
  return (
    <>
      <Stack direction={'horizontal'} className={`${styles.wrapper} p-3`}>
        <CaretDoubleRight
          role={'button'}
          className={`${styles.openBtn} me-2`}
          size={20}
          color={'#CBDAFF'}
          weight={'bold'}
        ></CaretDoubleRight>
        <Image
          className={`${styles.logoImg} me-2`}
          src={'https://zzimcar.s3.ap-northeast-2.amazonaws.com/common/image/logo/logo_white.svg'}
          alt={'zzimcar-logo'}
          width={88}
          height={22}
        ></Image>
        <SmileyAngry size={24} color={'#FFFFFF'} weight={'regular'}></SmileyAngry>
        <DotsThree className={`${styles.profileBtn} ms-auto`} size={20} color={'#CBDAFF'} weight={'bold'}></DotsThree>
        <CaretDoubleLeft
          role={'button'}
          className={`${styles.closeBtn} ms-auto`}
          size={20}
          color={'#CBDAFF'}
          weight={'bold'}
        ></CaretDoubleLeft>
      </Stack>
    </>
  );
}
