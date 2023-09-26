import Image from 'next/image';

export default function Page() {
  return (
    <>
      <div className={'content-header'}>
        <h3>공지사항 관리</h3>
        <p>공지사항을 관리하는 페이지입니다. 공지사항을 등록, 수정, 삭제할 수 있습니다.</p>
      </div>
      <div className={'content-body'}>테이블 영역..</div>
    </>
  );
}
