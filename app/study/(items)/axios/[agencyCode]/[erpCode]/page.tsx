import axios from 'axios';
import Image from 'next/image';

async function getCarDetail(agencyCode: string, erpCode: string) {
  return await axios
    .post('https://erp-gateway.nm-api.io/search/car/detail', {
      agencyCode: agencyCode,
      erpCode: erpCode,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return false;
    });
}

export default async function Page({ params }) {
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
          fill
        ></Image>
      </p>
    </>
  );
}
