import { ThemeProvider } from 'react-bootstrap';

export default function BreakpointSample() {
  return (
    <>
      <ThemeProvider breakpoints={['sm']}>
        <div>width 가 576px 보다 크거나 같을 때 보여진다.</div>
      </ThemeProvider>
      <ThemeProvider breakpoints={['md']}>
        <div>width 가 768px 보다 크거나 같다</div>
      </ThemeProvider>
    </>
  );
}
