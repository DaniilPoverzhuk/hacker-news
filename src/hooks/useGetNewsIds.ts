import { fetcherIds } from '@/utils/fetcher';
import useSwr from 'swr';

export default () => {
  const { data, isLoading, mutate } = useSwr<number[]>(
    'https://hacker-news.firebaseio.com/v0/newstories.json',
    fetcherIds,
    {
      refreshInterval: 60000,
    }
  );
  return { data, isLoading, mutate };
};
