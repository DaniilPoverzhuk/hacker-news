export const fetcherIds = (url: string) =>
  fetch(url)
    .then(res => {
      console.log('fetch id ');
      return res.json();
    })
    .then(data => data.filter((_: number, idx: number) => idx <= 99));

export const fetcherNewsItem = (url: string) =>
  fetch(url).then(res => {
    console.log('fetch item');
    return res.json();
  });
