import React from 'react';
import styled from 'styled-components';

interface IContainer {
  children?: React.ReactNode;
}

const Container: React.FC<IContainer> = ({ children }) => {
  return <Root>{children}</Root>;
};

export default Container;

const Root = styled.div`
  max-width: 1350px;
  margin: 0 auto;
`;
