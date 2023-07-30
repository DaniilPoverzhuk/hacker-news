import React from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';
import { BsArrowLeft as ArrowRight } from 'react-icons/bs';

import PAGES from '@/routes';

import useGetNewsItem from '@/hooks/useGetNewsItem';

import Comments from '../components/Comments/Comments';

const NewsPage: React.FC = () => {
  const { id } = useParams();
  const { data } = useGetNewsItem(id!);
  const getDate = (time: number) => time && format(time, 'PP');

  return (
    <Root>
      <BtnToHome to={PAGES.HOME}>
        <ArrowRight />
      </BtnToHome>
      <Title>{data?.title}</Title>
      <LinkText>
        Link to the news: <LinkNews href={data?.url}>{data?.url}</LinkNews>
      </LinkText>
      <Info>
        {data?.points} points by {data?.user} | {data?.time_ago} |{' '}
        {data?.comments_count} comments | {data && getDate(data?.time)}
      </Info>
      <Comments data={data!} />
    </Root>
  );
};

export default NewsPage;

const Root = styled.div`
  margin: 50px 30px;
  position: relative;
`;

const BtnToHome = styled(Link)`
  position: absolute;
  top: -35px;
  left: 0;
  font-size: 30px;

  svg {
    fill: ${({ theme }) => theme.primary};
  }
`;

const Title = styled.h1`
  position: relative;

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    background: ${({ theme }) => theme.background_primary};
    border-radius: 100%;

    position: absolute;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const LinkText = styled.p`
  margin: 10px 0 20px 0;

  color: ${({ theme }) => theme.secondary};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const LinkNews = styled.a`
  color: #0068c4;

  &:hover {
    text-decoration: underline;
  }
`;

const Info = styled.p`
  color: ${({ theme }) => theme.secondary};
`;
