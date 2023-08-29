import React from 'react';
import styled from 'styled-components';
import { BsFillTriangleFill } from 'react-icons/bs';
import useGetNewsItem from '@/hooks/useGetNewsItem';

interface INewsFC {
  id: number;
  idx: number;
}

const News: React.FC<INewsFC> = ({ id, idx }) => {
  const { data } = useGetNewsItem(id.toString());
  return (
    <Root>
      <Number>{++idx}</Number>
      <Upvote />
      <Info>
        <Title>{data?.title}</Title>
        <Text>
          {data?.points} points by {data?.user} | {data?.time_ago} |{' '}
          {data?.comments_count} comments
        </Text>
      </Info>
    </Root>
  );
};

export default News;

const Root = styled.li`
  display: flex;
  align-items: center;
  padding: 30px 50px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.3);

  transition: 0.4s;

  &:hover {
    opacity: 0.5;
  }
`;

const Number = styled.span`
  color: ${({ theme }) => theme.secondary};
  font-size: 23px;
  font-weight: 500;
`;

const Upvote = styled(BsFillTriangleFill)`
  fill: ${({ theme }) => theme.background_primary};
  margin: 0 30px;
`;

const Info = styled.div``;

const Title = styled.h3`
  color: ${({ theme }) => theme.primary};
  font-weight: 400;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.secondary};
`;
