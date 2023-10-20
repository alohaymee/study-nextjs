'use client';
import axios from 'axios';

async function getBanners() {
  const bannerSearchUrl = 'https://dev-zzim-server.nm-api.io/api/v1.0/banners';
  // const bannerSearchUrl = 'http://localhost:8080/api/v1.0/banners';
  const response = await axios
    .get(bannerSearchUrl, {
      params: {
        position: 'Banner_XY_1',
      },
    })
    .then((res: any) => {
      return res.data;
    })
    .catch((err: any) => {
      console.log(err);
    });

  return response;
}
export default async function Page() {
  const response = await getBanners();
  // console.log(response);

  return <h5>Notice..[]</h5>;
}
