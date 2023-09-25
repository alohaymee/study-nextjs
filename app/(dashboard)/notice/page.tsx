import Image from 'next/image';

export default function Page() {
  return (
    <>
      <div className={'content-header'}>공지사항 목록..</div>
      <div className={'content-body'}>
        <div>공지사항 목록이 보여질 페이지입니다.</div>
        <div
          style={{
            width: 500,
            height: 300,
            position: 'relative',
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1605936995788-2ccbd1d94da6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            alt={'Marry christmas snoopy'}
          />
        </div>
      </div>
    </>
  );
}
