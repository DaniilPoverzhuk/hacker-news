import { fetcherIds } from '@/utils/fetcher';
import useSwr from 'swr';

export default () => {
  const { data, isLoading } = useSwr<number[]>(
    'https://hacker-news.firebaseio.com/v0/newstories.json',
    fetcherIds,
    {
      refreshInterval: 60000,
    }
  );
  return { data, isLoading };
};
