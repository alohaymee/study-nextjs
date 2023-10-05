import ButtonSample from './buttons';
import AlertSample from '@/app/(bootstrap)/sample/alerts';
import ColorModeSample from '@/app/(bootstrap)/sample/colorModes';
import BreakpointSample from '@/app/(bootstrap)/sample/breakpoints';

export default function page() {
  return (
    <>
      <ButtonSample></ButtonSample>
      <AlertSample></AlertSample>
      <ColorModeSample></ColorModeSample>
      <BreakpointSample></BreakpointSample>
    </>
  );
}
