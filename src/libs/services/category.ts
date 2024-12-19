import { END_POINT } from '@/constants';
import { fetchData } from '@/libs/services/api';

export const getCategories = async (query?: string) => {
  return await fetchData({ endpoint: `${END_POINT.CATEGORY}${query}` });
};
