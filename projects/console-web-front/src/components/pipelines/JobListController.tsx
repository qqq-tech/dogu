import { LoadingOutlined } from '@ant-design/icons';
import { RoutineJobBase, JobDisplayQuery } from '@dogu-private/console';
import { OrganizationId, RoutinePipelineId, ProjectId } from '@dogu-private/types';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import useSWR from 'swr';

import { swrAuthFetcher } from '../../api';
import useLivePipelineStore from '../../stores/live-pipeline';
import { isPipelineEmptyLogStatus } from '../../utils/pipeline';
import ProjectSidebarItem from '../projects/ProjectSidebarItem';
import JobExpandableSidebarButton from './JobExpandableSidebarButton';

interface Props {
  orgId: OrganizationId;
  projectId: ProjectId;
  pipelineId: RoutinePipelineId;
}

const JobListController = ({ orgId, projectId, pipelineId }: Props) => {
  const router = useRouter();
  const { data, error, isLoading, mutate } = useSWR<RoutineJobBase[]>(
    `/organizations/${orgId}/projects/${projectId}/pipelines/${pipelineId}/jobs?display=${JobDisplayQuery.LIST}`,
    swrAuthFetcher,
  );
  const liveJobs = useLivePipelineStore((state) => state.pipeline?.routineJobs);
  const { t } = useTranslation();

  if (isLoading) {
    return <LoadingOutlined />;
  }

  if (!data || error) {
    return null;
  }

  return (
    <Box>
      <ProjectSidebarItem href={`/dashboard/${orgId}/projects/${projectId}/routines/${pipelineId}`} selected={router.query.jobId === undefined}>
        {t('routine:jobSummaryText')}
      </ProjectSidebarItem>
      <Divider />
      {(liveJobs || data).map((item) => {
        return (
          <JobExpandableSidebarButton
            expandable={!isPipelineEmptyLogStatus(item.status)}
            key={`job-${item.routineJobId}`}
            orgId={orgId}
            projectId={projectId}
            pipelineId={pipelineId}
            job={item}
          />
        );
      })}
    </Box>
  );
};

export default JobListController;

const Box = styled.div``;

const Divider = styled.hr`
  display: block;
  margin: 0.5rem 0;
  height: 2px;
  background-color: ${(props) => props.theme.colors.gray2};
`;
