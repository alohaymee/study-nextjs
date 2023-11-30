import React from 'react';
import { CaretDown } from '@phosphor-icons/react/dist/ssr/index';
import { Stack } from 'react-bootstrap';

export default function ProfileBox() {
  return (
    <>
      <Stack direction={'horizontal'} gap={2}>
        <span className={`ms-auto`}>박혜미(haymee@naturemobility.com)</span>
        <CaretDown role={'button'} size={12} color={'#565758'}></CaretDown>
      </Stack>
    </>
  );
}
