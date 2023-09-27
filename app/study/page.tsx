import Link from 'next/link';
import Image from 'next/image';

export default function Main() {
  return (
    <>
      <h3>Study Next.js</h3>
      <Image
        src={
          'https://images.unsplash.com/photo-1649179731119-b5491fc36f8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3570&q=80'
        }
        alt={'Hello'}
        width={600}
        height={400}
      ></Image>
    </>
  );
}
