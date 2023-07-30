import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import PAGES from '@/routes';

import { HiLightningBolt } from 'react-icons/hi';

import Container from '../Container';

const Header: React.FC = () => {
  return (
    <Root>
      <Container>
        <Wrapper>
          <Logo to={PAGES.HOME}>
            <LogoIcon />
            <Text>Hacker News</Text>
          </Logo>
        </Wrapper>
      </Container>
    </Root>
  );
};

export default Header;

const Root = styled.header`
  background-color: ${({ theme }) => theme.background_secondary};
  padding: 30px 0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.primary};
`;

const LogoIcon = styled(HiLightningBolt)`
  font-size: 22px;
  fill: ${({ theme }) => theme.background_primary};
`;

const Text = styled.h1`
  font-weight: bold;
`;
