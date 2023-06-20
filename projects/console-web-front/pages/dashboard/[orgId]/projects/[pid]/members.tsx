import { useRouter } from 'next/router';
import styled from 'styled-components';
import { OrganizationId } from '@dogu-private/types';
import { ProjectId } from '@dogu-private/types';
import { NextPageWithLayout } from 'pages/_app';
import AddMemberButton from 'src/components/projects/AddMemberButton';
import RefreshButton from 'src/components/buttons/RefreshButton';
import TableListView from 'src/components/common/TableListView';
import ProjectMemberListController from 'src/components/projects/ProjectMemberListController';
import ProjectMemberFilter from 'src/components/projects/ProjectMemberFilter';
import AddTeamButton from 'src/components/projects/AddTeamButton';
import ProjectLayout from 'src/components/layouts/ProjectLayout';
import withProject, { getProjectPageServerSideProps, WithProjectProps } from 'src/hoc/withProject';
import Head from 'next/head';

const ProjectMemberPage: NextPageWithLayout<WithProjectProps> = ({ project }) => {
  const router = useRouter();
  const organizationId = router.query.orgId as OrganizationId;
  const projectId = router.query.pid as ProjectId;

  return (
    <>
      <Head>
        <title>Project members - {project.name} | Dogu</title>
      </Head>
      <TableListView
        top={
          <FlexBox>
            <TopLeftBox>
              <AddMemberButton organizationId={organizationId} projectId={projectId} />
              <AddTeamButton organizationId={organizationId} projectId={projectId} />
              <ProjectMemberFilter />
            </TopLeftBox>
            <RefreshButton />
          </FlexBox>
        }
        table={<ProjectMemberListController project={project} />}
      />
    </>
  );
};

ProjectMemberPage.getLayout = (page) => {
  return <ProjectLayout isWebview={page.props.isWebview}>{page}</ProjectLayout>;
};

export const getServerSideProps = getProjectPageServerSideProps;

export default withProject(ProjectMemberPage);

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TopLeftBox = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-right: 0.5rem;
  }
`;