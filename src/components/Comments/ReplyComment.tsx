import React from 'react';
import styled from 'styled-components';

import { INews } from '@/types';

interface Props {
  comments: INews[];
}

const ReplyComment: React.FC<Props> = ({ comments }) => {
  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <Text dangerouslySetInnerHTML={{ __html: comment.content }} />
          <Info>
            {comment.user} | {comment.time_ago}
          </Info>
          {Boolean(comment?.comments.length) && (
            <ReplyComment comments={comment.comments} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default ReplyComment;

const Text = styled.p`
  margin-bottom: 10px;
`;

const Info = styled.p`
  color: ${({ theme }) => theme.secondary};
`;
