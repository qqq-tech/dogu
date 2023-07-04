import { GithubFilled, GitlabOutlined } from '@ant-design/icons';
import { Form, FormInstance, Input, Radio } from 'antd';

export type GitIntegrationFormValues = {
  git: string;
  token: string;
  repo: string;
  path: string;
};

interface Props {
  form: FormInstance<GitIntegrationFormValues>;
}

const GitIntegrationForm = ({ form }: Props) => {
  return (
    <Form form={form} layout="vertical" name="git-integration">
      <Form.Item label="Git service" name="git" required rules={[{ required: true, message: 'Select service' }]} valuePropName="checked">
        <Radio.Group buttonStyle="solid">
          <Radio.Button value="github">
            <GithubFilled />
            &nbsp;GitHub
          </Radio.Button>
          <Radio.Button value="gitlab">
            <GitlabOutlined />
            &nbsp;GitLab
          </Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Token" name="token" required rules={[{ required: true, message: 'Input token' }]}>
        <Input placeholder="ghp_1234567890abcd" required />
      </Form.Item>
      <Form.Item label="Repository" name="repo" required rules={[{ required: true, message: 'Input repository' }]}>
        <Input placeholder="dogu-team/dogu" required />
      </Form.Item>
      <Form.Item label="Dogu config file(json) path" name="path" required rules={[{ required: true, message: 'Input config path' }]}>
        <Input placeholder="e2e/dogu.config.json" required />
      </Form.Item>
    </Form>
  );
};

export default GitIntegrationForm;