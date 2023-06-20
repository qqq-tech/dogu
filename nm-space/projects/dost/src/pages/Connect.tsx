import { Divider, Flex, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ApiUrlInputForm from '../components/connection/ApiUrlInputForm';

import AlertModalButton from '../components/buttons/AlertModalButton';
import HostAgentConnectionStatusBadge from '../components/connection/HostAgentConnectionStatusBadge';
import TokenConnectionForm from '../components/connection/TokenConnectionForm';
import PageTitle from '../components/layouts/PageTitle';
import useHostAgentConnectionStatusStore from '../stores/host-agent-connection-status';
import { ipc } from '../utils/window';

function Connect() {
  const hostAgentConnectionStatus = useHostAgentConnectionStatusStore((state) => state.status);

  const tokenInputable = hostAgentConnectionStatus?.status === 'is-not-active' || hostAgentConnectionStatus?.status === 'disconnected';
  const isConnecting = hostAgentConnectionStatus?.status === 'connecting';
  const isConnected = hostAgentConnectionStatus?.status === 'connected';

  return (
    <div>
      <div style={{ paddingBottom: '16px' }}>
        <PageTitle title="Connection" />
      </div>

      <Divider mb={4} />

      <List spacing="20px">
        {/* {apiUrlInsertable && (
          <ListItem>
            <ApiUrlInputForm />
          </ListItem>
        )} */}

        <ListItem>
          <Flex direction="row" alignItems="center">
            <MenuTitle style={{ marginRight: '.25rem' }}>Dogu connection status:</MenuTitle>
            {hostAgentConnectionStatus === null ? <div>loading...</div> : <HostAgentConnectionStatusBadge status={hostAgentConnectionStatus} />}
          </Flex>

          {isConnecting && (
            <Item>
              <Flex alignItems="center">
                Connecting...
                <Spinner />
              </Flex>
            </Item>
          )}

          {hostAgentConnectionStatus && tokenInputable && (
            <Item>
              <TokenConnectionForm
              // notInputable={!(apiUrlInsertable ? apiUrl.length > 0 : true)}
              // onBeforeSubmit={() => {
              //   ipc.appConfigClient.set('DOGU_API_BASE_URL', apiUrl);
              // }}
              />
            </Item>
          )}
        </ListItem>

        {isConnected && (
          <ListItem>
            <MenuTitle>Reconnect with new token</MenuTitle>
            <Item>
              <AlertModalButton
                buttonTitle="Reconnect"
                modalHeader="Reconnect with new token?"
                modalBody={
                  <div>
                    <p>Are you sure to reconnect with new token?</p>
                    <p>Current connection will be disconnected and may affect current works.</p>
                    <div style={{ marginTop: '.5rem' }}>
                      <TokenConnectionForm />
                    </div>
                  </div>
                }
              />
            </Item>
          </ListItem>
        )}
      </List>
    </div>
  );
}

export default Connect;

const MenuTitle = styled(Text)`
  font-size: 1.1rem;
  font-weight: 500;
`;

const Item = styled.div`
  margin-top: 8px;
`;