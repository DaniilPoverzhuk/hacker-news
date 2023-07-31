import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import News from '../News';
import useGetNewsIds from '@/hooks/useGetNewsIds';
import ButtonUpdate from '@/components/ButtonUpdate';

const ListNews: React.FC = () => {
  const { data, isLoading, mutate } = useGetNewsIds();

  if (isLoading) {
    return <>Loading...</>;
  }
  return (
    <Root>
      <ButtonUpdate mutate={mutate} />
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
  position: relative;

  border-radius: 15px;
  background-color: ${({ theme }) => theme.background_secondary};
`;
