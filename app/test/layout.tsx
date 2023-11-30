import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/test/components/Nav';

export const metadata: Metadata = {
  title: 'Study Next.js',
  description: 'I like Snoopy!',
};

const themes = {
  dark: {
    background: 'black',
    color: 'white',
  },
  light: {
    background: 'white',
    color: 'block',
  },
};

export default function StudyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div style={{ display: 'flex', ...themes['light'] }}>
        <Navbar></Navbar>
        <div style={{ flex: 1 }}>{children}</div>
      </div>
    </>
  );
}
