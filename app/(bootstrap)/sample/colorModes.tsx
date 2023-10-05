'use client';
import { Dropdown, DropdownButton } from 'react-bootstrap';

export default function ColorModeSample() {
  return (
    <>
      <h4>Custom Dropbox</h4>
      <DropdownButton title={'Custom Dropdown'} data-bs-theme={'zzimcar'}>
        <Dropdown.Item>Marry</Dropdown.Item>
        <Dropdown.Item>Christmas</Dropdown.Item>
      </DropdownButton>
    </>
  );
}
