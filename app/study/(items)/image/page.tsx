import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hello, Peanut!",
};
export default function Page() {
  return (
    <>
      <div>
        <h4>fill={"true"}</h4>
        <div style={{ width: 500, height: 500, position: "relative" }}>
          <Image
            src={
              "https://images.unsplash.com/photo-1649179731119-b5491fc36f8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3570&q=80"
            }
            alt={"Hello"}
            fill={true}
          ></Image>
        </div>
        <p>
          parent element 를 채운다. width, height 값이 불확실 할 때 유용한 방법.
          상위 element 의 position 스타일 속성이 relative 이거나 fixed 여야 함.
          기본값으로 img element 는 position absolute.
        </p>
      </div>
      <div>
        <h4>fill={"false"}</h4>
        <div style={{ width: 500, height: 500, position: "relative" }}>
          <Image
            src={
              "https://images.unsplash.com/photo-1649179731119-b5491fc36f8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3570&q=80"
            }
            alt={"Hello"}
            fill={false}
            width={800}
            height={500}
          ></Image>
        </div>
        <p>fill=false 인 경우 width, height 값을 필수로 명시해주어야 함</p>함{" "}
      </div>
    </>
  );
}
