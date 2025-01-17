import { GithubOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

import useAuth from '../../hooks/useAuth';
import { flexRowBaseStyle, flexRowCenteredStyle } from '../../styles/box';
import { getLocaledLink } from '../../utils/locale';
import AccountMenu from '../AccountMenu';
import Header from './Header';

interface Props {
  children: React.ReactNode;
}

const ConsoleBasicLayout = ({ children }: Props) => {
  const { me, isLoading, error } = useAuth();
  const router = useRouter();

  if (isLoading) {
    return null;
  }

  if (!me || error) {
    if (!me) {
      router.push(`/signin?redirect=${router.asPath}`);
      return null;
    }

    router.push(`/account/organizations`);
    return null;
  }

  return (
    <>
      <Box>
        <Header
          right={
            <FlexRow>
              <StyledLink href={`https://github.com/dogu-team/dogu`} target="_blank">
                <GithubOutlined />
              </StyledLink>
              <Tooltip title="Docs" arrow={false} overlayInnerStyle={{ fontSize: '.8rem' }} style={{ minHeight: '0' }}>
                <StyledLink href={`https://docs.dogutech.io${getLocaledLink(router.locale, '')}`} target="_blank">
                  <QuestionCircleOutlined />
                </StyledLink>
              </Tooltip>
              <AccountMenu />
            </FlexRow>
          }
        />
        {children}
      </Box>
    </>
  );
};

export default ConsoleBasicLayout;

const Box = styled.div`
  min-height: 100dvh;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const FlexRow = styled.div`
  ${flexRowBaseStyle}
`;

const StyledLink = styled(Link)`
  ${flexRowCenteredStyle}
  width: 2rem;
  height: 2rem;
  margin-right: 0.75rem;
  border-radius: 50%;
  color: #000;
  font-size: 1.2rem;

  &:hover {
    background-color: #f5f5f5;
  }
`;
