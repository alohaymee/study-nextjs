import { ResolvingMetadata } from 'next';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const titles: string[] = [
  '1. Snoopy’s whole personality is a little bittersweet',
  '2. Snoopy is a major character in the Peanuts comic strip by Charles M. Schulz',
  '3. Snoopy is blessed with a rich, Walter Mitty-like fantasy life',
  '4. Snoopy is the only other character to appear in every movie and special',
  '5. Snoopy is loyal, funny, imaginative, good-natured and genuinely happy dog',
  '6. Snoopy loves root beer and pizza',
  '7. Snoopy hates coconut candy and listening to balloons being squeezed',
  '8. Snoopy also loves sleeping and being lazy',
  '9. Snoopy often lies on top of his doghouse and sleeps, sometimes all day long',
];
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
) {
  return {
    title: titles[Math.floor(Math.random() * 10)],
  };
}

export default function Page() {
  return (
    <>
      <div>
        <p>generateMetadata 이용해서 접속할 때 마다 title 바꾸기!</p>
        <p>
          Metadata 는 Root layout ≥ Nested Layout ≥ Page 순서로 평가됨. 하위로
          내려가면서 덮어씌워지거나 상속받음. 상위 segment 에서 정의된 metadata
          가 하위 segment 에서 정의된다면 하위 segment 로 덮어씌워지고, 상위
          segment 에서 정의되었으나 하위 segment 에 없다면 상위 segment 를
          상속받게 됨.
        </p>
      </div>
    </>
  );
}
