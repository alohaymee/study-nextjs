import Link from 'next/link';

export default function Main() {
  return (
    <>
      <div>Study Next.js</div>
      <Link href={'/study/meta-data'}>메타데이터 사용하기</Link>
    </>
  );
}
