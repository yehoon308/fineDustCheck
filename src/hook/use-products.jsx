import { useState, useEffect } from 'react';
import { envVars } from '../vars/envVars';
import {
  useQuery,
  //   useMutation,
  //   useQueryClient,
  //   QueryClient,
  //   QueryClientProvider,
} from '@tanstack/react-query';

export default function useProducts({ reqDate, isClick }) {
  const { API_KEY, API_KIDS_KEY } = envVars;

  async function postData(url = '') {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-cors-api-key': API_KEY,
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  }
  const {
    isLoading,
    error,
    data: kids,
    // refetch,
  } = useQuery(
    ['kids', isClick],
    async () => {
      const url = `https://proxy.cors.sh/https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustFrcstDspth?serviceKey=0C9EEpGSwRVtD4Zfgk7WZWFfM37Ke2OVVLB5lvr0nOWxmzxEH6zMQKGTm7VeztXbin7mZ1asnmfrYKnKFrMxxA%3D%3D&returnType=json&numOfRows=100&pageNo=1&searchDate=${reqDate}&InformCode=PM10`;
      return postData(url);
    },
    // {
    //   staleTime: 1000 * 60 * 4,
    // },
  );

  return [isLoading, error, kids];
}
