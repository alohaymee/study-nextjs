import Link from 'next/link';

const linkStyle = {
  display: 'block',
  marginBottom: 4,
  textDecoration: 'none',
  color: '#0A0A0A',
};
export default function Navbar() {
  return (
    <div
      style={{
        justifyContent: 'space-between',
        marginRight: 20,
        minWidth: 150,
      }}
    >
      <h4>What I study</h4>
      <div>
        <Link style={{ ...linkStyle }} href={'/study'}>
          Home
        </Link>
        <Link style={{ ...linkStyle }} href={'/study/image'}>
          이미지 최적화
        </Link>
        <Link style={{ ...linkStyle }} href={'/study/meta-data'}>
          메타데이터 사용하기
        </Link>
        <Link style={{ ...linkStyle }} href={'/study/structure'}>
          프로젝트 구성하기
        </Link>
        <Link style={{ ...linkStyle }} href={'/study/axios'}>
          Axios 사용하기(SSR)
        </Link>
      </div>
    </div>
  );
}
