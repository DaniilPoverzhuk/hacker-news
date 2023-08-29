import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <Root>{children}</Root>;
};

export default Container;

const Root = styled.div`
  max-width: 1350px;
  margin: 0 auto;
`;
