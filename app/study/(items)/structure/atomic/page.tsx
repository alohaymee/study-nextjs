import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <>
      <div
        style={{
          position: 'relative',
          width: '600px',
          height: '400px',
        }}
      >
        <Image
          src={'https://yozm.wishket.com/media/news/1531/image015.png'}
          alt={'Atomic'}
          sizes={'100vw'}
          fill={true}
          style={{ objectFit: 'contain' }}
        ></Image>
      </div>

      <ul>
        <li>Atoms: 더 이상 쪼갤 수 없는 디자인의 최소 단위</li>
        <li>Molecules: Atoms를 모아 만듦. 최소 한가지 기능을 수행</li>
        <li>
          Organisms: Molecules + Atoms 조합으로 만들며 사용자에게함 의미와
          역할이 존재는 단위
        </li>
        <li>
          Template: Organisms 조합. 데이터 연결 전 상태의 최종 레이아웃 형태
        </li>
        <li>
          Page: Template에 데이터가 결합되어 사용자에게 전달되는 최종 디자인
          형태
        </li>
      </ul>

      <Image
        src={'https://yozm.wishket.com/media/news/1531/image017.gif'}
        alt={'Atomic'}
        sizes={'100vw'}
        style={{ width: '100%', height: 'auto' }}
        width={500}
        height={300}
      ></Image>

      <h3>아토믹 디자인 적용 전에 읽어보기</h3>
      <a href={'https://yozm.wishket.com/magazine/detail/1531/'}>
        Atomic Design Patten의 Best Practice 여정기
      </a>
    </>
  );
}
