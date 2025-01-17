import { ColorMode, Flex, useColorMode } from '@chakra-ui/react';
import { ImConnection, ImMobile2 } from 'react-icons/im';
import { MdTroubleshoot } from 'react-icons/md';
import styled from 'styled-components';
import useEnvironmentStore from '../../stores/environment';

import useHostAgentConnectionStatusStore from '../../stores/host-agent-connection-status';
import HostAgentConnectionStatusIcon from '../connection/HostAgentConnectionStatusIcon';
import Footer from '../Footer';
import SiderButton from './SiderButton';

const HomeMenuSider = () => {
  const { colorMode } = useColorMode();
  const hostAgentConnectionStatus = useHostAgentConnectionStatusStore((state) => state.status);
  const platform = useEnvironmentStore((state) => state.platform);

  return (
    <Sider mode={colorMode}>
      <div>
        <SiderButton link="/home/connect" style={{ justifyContent: 'space-between' }}>
          <Flex alignItems="center">
            <ImConnection />
            &nbsp;&nbsp;Connection
          </Flex>
          {hostAgentConnectionStatus === null ? <div></div> : <HostAgentConnectionStatusIcon status={hostAgentConnectionStatus} />}
        </SiderButton>
        <SiderButton link="/home/trouble-shooting">
          <MdTroubleshoot />
          &nbsp;&nbsp;Troubleshoot
        </SiderButton>
        {platform && platform === 'darwin' ? (
          <SiderButton link="/home/ios-settings">
            <ImMobile2 />
            &nbsp;&nbsp;iOS Settings
          </SiderButton>
        ) : null}
      </div>

      <div>
        <Footer />
      </div>
    </Sider>
  );
};

export default HomeMenuSider;

const Sider = styled.aside<{ mode: ColorMode }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 100%;
  background-color: var(--chakra-colors-gray-${(props) => (props.mode === 'light' ? 200 : 900)});
  flex-shrink: 0;

  @media screen and (max-width: 767px) {
    width: 200px;
  }
`;
