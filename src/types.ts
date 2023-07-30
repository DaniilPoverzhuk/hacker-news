export interface INews {
  id: number;
  title: string;
  points: number;
  user: string;
  time: number;
  time_ago: string;
  type: string;
  content: string;
  comments: INews[];
  comments_count: number;
  url: string;
  domain: string;
}
