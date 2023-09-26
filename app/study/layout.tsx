import type {Metadata} from 'next';
import Navbar from '@/app/study/components/Nav';

export const metadata: Metadata = {
  title: 'Study Next.js',
  description: 'I like Snoopy!',
};

export default function StudyLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <div style={{display: 'flex'}}>
        <Navbar></Navbar>
        <div style={{flex: 1, padding: 8}}>{children}</div>
      </div>
    </>
  );
}
