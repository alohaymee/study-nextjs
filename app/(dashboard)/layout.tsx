import '../styles/globals.scss';
import './style.css';
import React from 'react';
import {
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretDown,
  CaretRight,
  DotsThree,
  Gift,
  Graph,
  Info,
  ShoppingCart,
  SmileyAngry,
  User,
} from '@phosphor-icons/react/dist/ssr/index';
import Image from 'next/image';
import { Metadata } from 'next';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={'wrapper-box'}>
      <div className={'header-box'}>
        <div className={'header-left-box'}>
          <CaretDoubleRight className={'open'} size={20} color={'#CBDAFF'} weight={'bold'}></CaretDoubleRight>
          <div className={'header-logo-box'}>
            <Image
              src={'https://zzimcar.s3.ap-northeast-2.amazonaws.com/common/image/logo/logo_white.svg'}
              alt={'zzimcar-logo'}
              width={88}
              height={22}
            ></Image>
            <SmileyAngry size={24} color={'#FFFFFF'} weight={'regular'}></SmileyAngry>
          </div>
          <DotsThree className={'profile-btn'} size={20} color={'#CBDAFF'} weight={'bold'}></DotsThree>
          <CaretDoubleLeft className={'close'} size={20} color={'#CBDAFF'} weight={'bold'}></CaretDoubleLeft>
        </div>
        <div className={'header-right-box'}>
          <div className={'profile-box'}>
            <span>박혜미(haymee@naturemobility.com)</span>
            <CaretDown size={12} color={'#565758'}></CaretDown>
          </div>
        </div>
      </div>
      <div className={'body-box'}>
        <div className={'nav-box'}>
          <div className={'nav-group-box'}>
            <h5>마케팅</h5>
            <div className={['nav-item-box', 'active'].join(' ')}>
              <div className={'nav-item-name-box'}>
                <Info size={16} color={'#CBDAFF'} weight={'regular'}></Info>
                <span>컨텐츠 관리</span>
              </div>
              <CaretDown size={12} color={'#CBDAFF'} weight={'bold'}></CaretDown>
            </div>
            <div className={['nav-sub-box', 'sub-active'].join(' ')}>
              <CaretRight size={12} color={'#CBDAFF'} weight={'duotone'}></CaretRight>
              <span>공지사항</span>
            </div>
            <div className={'nav-sub-box'}>
              <CaretRight size={12} color={'#CBDAFF'} weight={'duotone'}></CaretRight>
              <span>배너</span>
            </div>
            <div className={'nav-sub-box'}>
              <CaretRight size={12} color={'#CBDAFF'} weight={'duotone'}></CaretRight>
              <span>이벤트</span>
            </div>
            <div className={'nav-item-box'}>
              <div className={'nav-item-name-box'}>
                <Graph size={16} color={'#CBDAFF'} weight={'regular'}></Graph>
                <span>예약 통계</span>
              </div>
              <CaretRight size={12} color={'#CBDAFF'} weight={'bold'}></CaretRight>
            </div>
            <div className={'nav-item-box'}>
              <div className={'nav-item-name-box'}>
                <Gift size={16} color={'#CBDAFF'} weight={'regular'}></Gift>
                <span>하위 메뉴 없는 경우</span>
              </div>
            </div>
            <div className={['nav-item-box', 'active'].join(' ')}>
              <div className={'nav-item-name-box'}>
                <Gift size={16} color={'#CBDAFF'} weight={'regular'}></Gift>
                <span>하위 없고 클릭했을 때</span>
              </div>
            </div>
          </div>
          <div className={'nav-group-box'}>
            <h5>CS 센터</h5>
            <div className={'nav-item-box'}>
              <div className={'nav-item-name-box'}>
                <ShoppingCart size={16} color={'#CBDAFF'} weight={'regular'}></ShoppingCart>
                <span>예약 관리</span>
              </div>
              <CaretRight size={12} color={'#CBDAFF'} weight={'bold'}></CaretRight>
            </div>
            <div className={'nav-item-box'}>
              <div className={'nav-item-name-box'}>
                <User size={16} color={'#CBDAFF'} weight={'regular'}></User>
                <span>회원 관리</span>
              </div>
              <CaretRight size={12} color={'#CBDAFF'} weight={'bold'}></CaretRight>
            </div>
          </div>
        </div>
        <div className={'content-box'}>{children}</div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: '찜카 관리자 v2.0',
};
