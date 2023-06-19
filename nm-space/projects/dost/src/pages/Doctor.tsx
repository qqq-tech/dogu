import { QuestionIcon } from '@chakra-ui/icons';
import { Flex, Icon, Input, Spinner, Text, Tooltip, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { ipc } from '../utils/window';
import PageTitle from '../components/layouts/PageTitle';
import SinglePageLayout from '../components/layouts/SinglePageLayout';
import DoctorExternalToolInspector from '../components/external/DoctorExternalToolInspector';
import useManualSetupExternalValidResult from '../hooks/manaul-setup-external-valid-result';
import ManualExternalToolValidCheckerItem from '../components/external/ManualExternalToolValidCheckerItem';
import ManaulExternalToolSolution from '../components/external/ManualExternalToolSolution';
import usePlatformSupportedExternalInfo from '../hooks/platform-supported-external-info';

export default function Doctor() {
  const [dotEnvConfigPath, setDotEnvConfigPath] = useState<string>('');
  const { externalInfos, getExternalInfos } = usePlatformSupportedExternalInfo();
  const { results } = useManualSetupExternalValidResult();

  useEffect(() => {
    (async () => {
      setDotEnvConfigPath(await ipc.dotEnvConfigClient.getDotEnvConfigPath());
    })();
  }, []);

  return (
    <SinglePageLayout title={<PageTitle title="Doctor" closable />}>
      <VStack spacing="8px" alignItems="flex-start">
        <Flex alignItems="center">
          <Text fontWeight="semibold">Env File Path</Text>
          <Tooltip hasArrow label="The path to the setup file cannot be changed by convention" bg="white" placement="top">
            <Icon as={QuestionIcon} color="gray.500" ml="8px" />
          </Tooltip>
        </Flex>
        <Input readOnly value={dotEnvConfigPath} color="gray.500" width="60%" maxWidth="500px" />
      </VStack>

      <StyledContent>
        <Text fontWeight="semibold" mb="8px">
          Packages
        </Text>
        {externalInfos ? <DoctorExternalToolInspector externalTools={externalInfos} onFinishInstall={getExternalInfos} /> : <Spinner />}
      </StyledContent>

      <StyledContent>
        <Text fontWeight="semibold" mb="8px">
          Manaul setup packages
        </Text>
        {results?.map((result) => (
          <ManualExternalToolValidCheckerItem
            key={result.key}
            isValid={result.isValid}
            externalKey={result.key}
            name={result.name}
            solution={<ManaulExternalToolSolution externalKey={result.key} />}
          />
        ))}
      </StyledContent>
    </SinglePageLayout>
  );
}

const StyledContent = styled.div`
  margin-top: 24px;
`;
