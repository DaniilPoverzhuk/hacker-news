import useSwr from 'swr';

import { INews } from '@/types';
import { fetcherNewsItem } from '@/utils/fetcher';

export default (id: string) => {
  const { data, mutate } = useSwr<INews>(
    `https://api.hnpwa.com/v0/item/${id}.json`,
    fetcherNewsItem,
    { refreshInterval: 60000 }
  );

  return { data, mutate };
};
