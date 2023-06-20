import { Center, Image, CircularProgress, Flex, Heading, ScaleFade, Spacer, useToast } from '@chakra-ui/react';
import { stringify } from '@dogu-tech/common';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/layouts/Header';
import logo from '../logo.svg';
import { ipc } from '../utils/window';

const Splash = () => {
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    const redirectOnInit = async () => {
      try {
        const isExternalReady = await ipc.externalClient.isSupportedPlatformValid();

        if (!isExternalReady) {
          navigate('/setup/installer');
          return;
        }

        const [apiUrlInsertable, apiUrl] = await Promise.all([ipc.featureConfigClient.get('apiUrlInsertable'), ipc.appConfigClient.get<string>('DOGU_API_BASE_URL')]);

        if (apiUrlInsertable && !apiUrl) {
          navigate('/setup/config');
          return;
        }

        navigate('/home/connect');
      } catch (e) {
        ipc.rendererLogger.error(`Error while checking external client status in Splash: ${stringify(e)}`);
        toast({
          title: 'Failed to check Dost status',
          description: 'Please try again. If this error persists, please contact us.',
          status: 'error',
        });
      }
    };

    redirectOnInit();
  }, []);

  return (
    <Box>
      <Header />
      <Flex flex={1} direction={['column']} alignItems="center" gap="2">
        <Spacer />
        <ScaleFade initialScale={0.9} in={true}>
          <Center flex="1" p="1">
            <Image src={logo} boxSize="70px" align="center" className="App-logo" alt="logo" margin={4} />
            <Heading size="4xl">Dost</Heading>
          </Center>
        </ScaleFade>
        <Center flex="1" p="1">
          <CircularProgress isIndeterminate color="gray.700" size="40px" opacity="90%" thickness="4px" />
        </Center>
        <Spacer />
      </Flex>
    </Box>
  );
};

export default Splash;

const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;