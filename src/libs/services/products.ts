import { END_POINT } from '@/constants';

export const getProducts = async (query?: string) => {
  const param = query ? `?${query}` : '';
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}${END_POINT.PRODUCTS}${param}`
    );
    const data = await res.json();
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

export const getProductLimit = async (
  query: string,
  start: number,
  limit: number
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}${END_POINT.PRODUCTS}?${query}&_start=${start}&_limit=${limit}`
    );
    const data = await res.json();
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

export const getProductId = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}${END_POINT.PRODUCTS}/${id}`
    );
    const data = await res.json();
    return { data, error: null };
  } catch (error) {
    console.error(`Error fetching product details for ID: ${id}`, error);
    return { data: null, error };
  }
};
