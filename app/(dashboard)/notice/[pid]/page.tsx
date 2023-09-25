export default function Notice({
  params,
  searchParams,
}: {
  params: { pid: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div>
      notice params: {params.pid} / searchParams:{" "}
      {searchParams?.no || "not found"}
    </div>
  );
}
