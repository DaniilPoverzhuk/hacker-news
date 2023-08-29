import React from 'react';
import styled from 'styled-components';

import { INews } from '@/types';

import Comment from './Comment';

interface Props {
  data: INews;
}

const Comments: React.FC<Props> = ({ data }) => {
  return (
    <Root>
      {data?.comments.map(comment => (
        <Comment
          key={comment.id}
          comment={comment}
        />
      ))}
    </Root>
  );
};

export default Comments;

const Root = styled.ul`
  margin-top: 50px;

  ul {
    margin-left: 25px;
  }

  a {
    color: #0068c4;

    &:hover {
      text-decoration: underline;
    }
  }
`;
