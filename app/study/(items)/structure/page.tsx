import Link from 'next/link';

export default function Page() {
  return (
    <>
      <h3>프로젝트 디렉토리 구성</h3>
      <ul>
        <li>/components</li>
        <li>/utilities</li>
        <li>/public(default)</li>
        <li>/styles</li>
        <li>/lib</li>
      </ul>

      <h4>/components</h4>
      <p>
        아토믹 디자인 패턴에 의해 atoms, molecules, organisms, templates 로 나눌
        수 있음. 원자단위, 분자단위를 나누는 구분 기준은 어떻게 되는걸까?
        organisms 와 template 의 구분 기준은?
      </p>
      <Link href={'/study/structure/atomic'}>아토믹 디자인 패턴 더보기..</Link>

      <h4>/utilities</h4>
      <p>유틸성 함수 모음용.</p>

      <h4>/public</h4>
      <p>
        create-next-app 으로 프로젝트 생성 시 기본으로 생성됨. 정적 자원 저장
        위치. assets 등.
      </p>

      <h4>/styles</h4>
      <p>
        공통 스타일 파일 모음. CSS-IN-JS 프레임워크를 사용하더라도 공통으로
        사용하기 위한 스타일 파일이 있을 수 있음.
      </p>

      <h4>/lib</h4>
      <p>third-party 라이브러리 모음용.</p>
    </>
  );
}
