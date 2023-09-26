import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

async function getCarDetail(agencyCode: string, erpCode: string) {
  return await axios
    .post('https://erp-gateway.nm-api.io/search/car/detail', {
      agencyCode: agencyCode,
      erpCode: erpCode,
    })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return false;
    });
}

export default async function Page({
  params,
}: {
  params: {agencyCode: string; erpCode: string};
}) {
  console.log(params);
  const carDetail = await getCarDetail(params.agencyCode, params.erpCode);
  console.log('result: ', carDetail);

  return (
    <>
      <h3>{carDetail.car.erpName} 상세정보</h3>
      <p>
        <Image
          src={carDetail.car.imgUrlDetail[0]}
          alt={carDetail.car.erpName}
          sizes={'100vw'}
          style={{width: '300px', height: 'auto'}}
          width={0}
          height={0}
        ></Image>
      </p>
      <Link href={'/study/axios'}>뒤로가기</Link>
    </>
  );
}
