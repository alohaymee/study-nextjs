'use client';
import axios, { AxiosResponse } from 'axios';
import Link from 'next/link';
import { useCallback } from 'react';

async function call() {
  const res = useCallback(() => {}, []);

  let apiRes = axios
    .post('https://dev-zzim-server.nm-api.io/api/v1.0/sso', {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIn0.Di_ZpBKsWGhPr1MucUeJ0ffqZrZYJRe3Bn28BkdBh-I',
      redirectUrl: 'https://zzimcar.com',
      resource: '/peanut',
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      return false;
    });

  return apiRes;
}

export default async function Page() {
  const res = await call();
  return (
    <>
      <h3>API Test</h3>
    </>
  );
}
