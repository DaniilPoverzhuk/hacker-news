import React, { useReducer } from 'react';
import styled from 'styled-components';
import { IoCaretDown } from 'react-icons/io5';

import { INews } from '@/types';

import ReplyComment from './ReplyComment';

interface Props {
  comment: INews;
}

const Comment: React.FC<Props> = ({ comment }) => {
  const [isVisibleRepliesComments, toggleVisibleRepliesComments] = useReducer(
    currentState => !currentState,
    false
  );

  return (
    <>
      <RootComment key={comment.id}>
        {Boolean(comment.comments.length) && (
          <BtnArrow
            clicked={isVisibleRepliesComments}
            onClick={toggleVisibleRepliesComments}
          />
        )}
        <Text dangerouslySetInnerHTML={{ __html: comment.content }} />
        <Info>
          {comment.user} | {comment.time_ago}
        </Info>
      </RootComment>
      {isVisibleRepliesComments && (
        <ReplyComments>
          <ReplyComment comments={comment.comments} />
        </ReplyComments>
      )}
    </>
  );
};

export default Comment;

const RootComment = styled.li`
  position: relative;

  &:not(:first-child) {
    margin-top: 30px;
  }
`;

const Text = styled.p`
  margin-bottom: 10px;
`;

const Info = styled.p`
  color: ${({ theme }) => theme.secondary};
`;

const ReplyComments = styled.ul`
  li {
    margin-top: 20px;
  }
`;

const BtnArrow = styled(IoCaretDown)<{ clicked: boolean }>`
  position: absolute;
  top: 5px;
  left: -25px;

  transform: ${({ clicked }) => (clicked ? `rotate(-180deg)` : `rotate(0)`)};

  transition: 0.4s;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;
