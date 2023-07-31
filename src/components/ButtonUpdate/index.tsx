/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styled from 'styled-components';
import { KeyedMutator } from 'swr';
import { RxUpdate as Update } from 'react-icons/rx';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mutate: KeyedMutator<any>;
  home?: boolean;
}

const ButtonUpdate: React.FC<Props> = ({ mutate, home }) => {
  const updateComments = () => {
    mutate();
  };

  return (
    <BtnUpdate
      onClick={updateComments}
      home={home!}
    >
      <Update />
      Update Comments
    </BtnUpdate>
  );
};

export default ButtonUpdate;

const BtnUpdate = styled.button<{ home: boolean }>`
  position: absolute;
  top: -35px;
  left: ${({ home }) => (home ? '0' : '50px')};
  display: flex;
  align-items: center;
  gap: 5px;

  background: none;
  border: none;

  cursor: pointer;
  transition: 0.4s;

  &:hover {
    opacity: 0.5;
  }

  svg {
    font-size: 25px;
    fill: ${({ theme }) => theme.primary};
  }
`;
