import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import News from '../News';
import useGetNewsIds from '@/hooks/useGetNewsIds';

const ListNews: React.FC = () => {
  const { data, isLoading } = useGetNewsIds();

  if (isLoading) {
    return <>Loading...</>;
  }
  return (
    <Root>
      {data?.map((item, idx) => (
        <Link
          to={`/news/${item}`}
          key={item}
        >
          <News
            id={item}
            idx={idx}
          />
        </Link>
      ))}
    </Root>
  );
};

export default ListNews;

const Root = styled.ul`
  margin: 50px 30px;

  border-radius: 15px;
  background-color: ${({ theme }) => theme.background_secondary};
`;
