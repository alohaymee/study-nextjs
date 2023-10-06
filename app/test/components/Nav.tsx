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
        <Link style={{ ...linkStyle }} href={'/test'}>
          Home
        </Link>
        <Link style={{ ...linkStyle }} href={'/test/image'}>
          이미지 최적화
        </Link>
        <Link style={{ ...linkStyle }} href={'/test/meta-data'}>
          메타데이터 사용하기
        </Link>
        <Link style={{ ...linkStyle }} href={'/test/structure'}>
          프로젝트 구성하기
        </Link>
        <Link style={{ ...linkStyle }} href={'/test/axios'}>
          Axios 사용하기(SSR)
        </Link>
        <Link style={{ ...linkStyle }} href={'/test/bootstrap/sample'}>
          React Bootstrap samples
        </Link>
      </div>
    </div>
  );
}
