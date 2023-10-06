import type { Metadata } from 'next';
import './styles/globals.scss';
export const metadata: Metadata = {
  title: '찜카 관리자 v2.0',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
