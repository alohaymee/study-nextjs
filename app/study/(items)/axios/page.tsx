import axios from 'axios';
import Link from 'next/link';

async function getCarList() {
  return await axios
    .post('https://nm-api.io/api/internal/v1/car/list', {
      sdate: '2023-10-25T10:00',
      edate: '2023-10-27T10:00',
      zone: 'JEJU',
      agencyCode: ['NM_JEJUOKRENT', 'NM_PACIF'],
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
  const carList = await getCarList();
  console.log('result: ', carList);

  return (
    <>
      <h3>레인보우 차량 검색</h3>
      {carList.map(car => (
        <Link
          href={`/study/axios/${car.agency.agencyCode}/${car.erpCode}`}
          key={`${car.agency.agencyCode}-${car.modelCode}`}
          style={carItemStyle}
        >
          <h5 style={carItemTitle}>
            {car.agency.agencyName} - {car.erpName}
          </h5>
          <h5>{car.saleFee.toLocaleString()}원</h5>
        </Link>
      ))}
    </>
  );
}

const carItemStyle = {
  display: 'flex',
  maxWidth: 400,
  border: '1px solid #CBDAFF',
  marginBottom: 20,
  padding: 8,
};

const carItemTitle = {
  flex: 1,
};
