import axios, { AxiosResponse } from 'axios';
import Link from 'next/link';

async function getCarList() {
  let carList = await axios
    .post('https://nm-api.io/api/internal/v1/car/list', {
      sdate: '2023-12-01T10:00',
      edate: '2023-12-03T10:00',
      zone: 'JEJU',
      agencyCode: ['NM_JEJUEV'],
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return false;
    });

  return carList;
}

export default async function Page() {
  const carList = await getCarList();
  return (
    <>
      <h3>Axios를 이용해 Zzimcar ERP API 에서 데이터 불러오기</h3>
      <ul>
        {carList.map((item: any) => (
          <li key={item.modelCode} id={item.modelCode}>
            {item.agency.agencyCode}: {item.modelCode} / {item.erpName}
            <Link href={`/test/axios/${item.agency.agencyCode}/${item.erpCode}`}>.. 상세보기</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
