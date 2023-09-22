import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/app/study/components/Nav';

export const metadata: Metadata = {
  title: 'Study Next.js',
  description: 'I like Snoopy!',
};

export default function StudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar></Navbar>
      <div>{children}</div>
    </>
  );
}
