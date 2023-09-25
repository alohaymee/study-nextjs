import Image from "next/image";

export default function Main() {
  return (
    <>
      <div>this is page "Main"</div>
      <div
        style={{
          width: 500,
          height: 300,
          position: "relative",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1605936995788-2ccbd1d94da6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          layout="fill"
          objectFit={"cover"}
          alt={"Marry christmas snoopy"}
        />
      </div>
    </>
  );
}
