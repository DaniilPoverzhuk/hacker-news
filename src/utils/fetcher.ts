export const fetcherIds = (url: string) =>
  fetch(url)
    .then(res => res.json())
    .then(data => data.filter((_: number, idx: number) => idx <= 99));

export const fetcherNewsItem = (url: string) =>
  fetch(url).then(res => res.json());
