import { END_POINT } from '@/constants';
import { fetchData, fetchDataId } from '@/libs/services/api';

export const getProducts = async (query?: string) => {
  const param = query ? query : '';
  return await fetchData({ endpoint: `${END_POINT.PRODUCTS}${param}` });
};

export const getProductLimit = async (
  query: string,
  start: number,
  limit: number
) => {
  return await fetchData({
    endpoint: `${END_POINT.PRODUCTS}?${query}&_start=${start}&_limit=${limit}`
  });
};

export const getProductId = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}${END_POINT.PRODUCTS}/${id}`
    );
    const data = await res.json();
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};
