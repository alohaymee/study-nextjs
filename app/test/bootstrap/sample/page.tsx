import ButtonSample from './buttons';
import AlertSample from '@/app/test/bootstrap/sample/alerts';
import ColorModeSample from '@/app/test/bootstrap/sample/colorModes';
import GridSample from '@/app/test/bootstrap/sample/grid';
import GridBreakPointSample from '@/app/test/bootstrap/sample/grid-with-breakpoint';
import StackSample from '@/app/test/bootstrap/sample/stack';

export default function page() {
  return (
    <>
      <StackSample></StackSample>
      <ButtonSample></ButtonSample>
      <AlertSample></AlertSample>
      <ColorModeSample></ColorModeSample>
      <GridSample></GridSample>
      <GridBreakPointSample></GridBreakPointSample>
    </>
  );
}
