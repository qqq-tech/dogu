import { OrganizationId, ProjectId } from '@dogu-private/types';
import { Form } from 'antd';
import { isAxiosError } from 'axios';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

import { updateProjectScm } from '../../api/project';
import useGitIntegrationStore from '../../stores/git-integration';
import { sendErrorNotification, sendSuccessNotification } from '../../utils/antd';
import { getErrorMessage } from '../../utils/error';
import DangerZone from '../common/boxes/DangerZone';
import GitIntegrationForm, { GitIntegrationFormValues } from './GitIntegrationForm';

const GitIntegrationDangerButton = () => {
  const updateStatus = useGitIntegrationStore((state) => state.updateGitIntegrationStatus);
  const [form] = Form.useForm<GitIntegrationFormValues>();
  const { t } = useTranslation('project');
  const router = useRouter();

  const saveGitIntegration = async () => {
    const values = await form.validateFields();

    try {
      await updateProjectScm(router.query.orgId as OrganizationId, router.query.pid as ProjectId, { service: values.git, url: values.repo, token: values.token });
      sendSuccessNotification(t('projectUpdateSuccessMsg'));
      updateStatus(true);
    } catch (e) {
      if (isAxiosError(e)) {
        sendErrorNotification(t('projectUpdateFailedMsg', { reason: getErrorMessage(e) }));
      }
    }
  };

  return (
    <DangerZone.Button
      modalTitle={t('editGitIntegrationConfirmModalTitle')}
      modalContent={<GitIntegrationForm form={form} />}
      onConfirm={saveGitIntegration}
      modalButtonTitle={t('editGitIntegrationConfirmModalButtonText')}
      onOpenChange={() => {
        form.resetFields();
      }}
    >
      {t('editGitIntegrationButtonText')}
    </DangerZone.Button>
  );
};

export default GitIntegrationDangerButton;
