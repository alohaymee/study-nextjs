import { headers } from 'next/headers';

export default async function NotFound() {
  const headersList = headers();
  const domain = headersList.get('host');

  return <>{headersList}</>;
}
