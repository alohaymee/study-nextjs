import Link from 'next/link';

const linkStyle = {
  display: 'block',
  marginBottom: 16,
};
export default function Navbar() {
  return (
    <div
      style={{
        minWidth: 150,
        height: '100vw',
        backgroundColor: '#E9EBF8',
        marginRight: 12,
        padding: 8,
      }}
    >
      <h3>Study Next.js</h3>
      <Link style={linkStyle} href={'/study/axios'}>
        Axios 사용하기
      </Link>
      <Link style={linkStyle} href={'/study/image'}>
        Image 최적화
      </Link>
      <Link style={linkStyle} href={'/study/meta-data'}>
        메타데이터 사용하기
      </Link>
      <Link style={linkStyle} href={'/study/present-vs-container'}>
        프레젠테이션 컴포넌트 VS 컨테이너 컴포넌트
      </Link>
      <Link style={linkStyle} href={'/study/structure'}>
        프로젝트 구조
      </Link>
    </div>
  );
}
