import {
  AddTeamToProjectDtoBase,
  AddUserToProjectDtoBase,
  CreateProjectDtoBase,
  ProjectBase,
  UpdateProjectDtoBase,
  UpdateTeamProjectRoleDtoBase,
  UpdateUserProjectRoleDtoBase,
} from '@dogu-private/console';
import { OrganizationId, ProjectId, TeamId, UserId } from '@dogu-private/types';
import { GetServerSidePropsContext } from 'next';

import api from 'src/api';
import { EmptyTokenError, getServersideCookies, setCookiesInServerSide } from 'src/utils/auth';

export const getProjectInServerSide = async (context: GetServerSidePropsContext) => {
  const { authToken } = getServersideCookies(context.req.cookies);

  if (authToken) {
    const data = await api.get<ProjectBase>(`/organizations/${context.query.orgId}/projects/${context.query.pid}`, { headers: { Authorization: `Bearer ${authToken}` } });
    setCookiesInServerSide(data, context);

    const project = data.data;

    return project;
  }

  throw new EmptyTokenError();
};

export const createProject = async (organizationId: OrganizationId, createProjectBody: CreateProjectDtoBase) => {
  const { data } = await api.post<ProjectBase>(`/organizations/${organizationId}/projects`, createProjectBody);

  return data;
};

export const updateProject = async (organizationId: OrganizationId, projectId: ProjectId, updateProjectBody: UpdateProjectDtoBase) => {
  const { data } = await api.patch<ProjectBase>(`/organizations/${organizationId}/projects/${projectId}`, updateProjectBody);

  return data;
};

export const addUserToProject = async (organizationId: OrganizationId, projectId: ProjectId, addMemberBody: AddUserToProjectDtoBase) => {
  return await api.post<void>(`/organizations/${organizationId}/projects/${projectId}/users`, addMemberBody);
};

export const removeUserFromProject = async (organizationId: OrganizationId, projectId: ProjectId, memberId: UserId) => {
  return await api.delete(`/organizations/${organizationId}/projects/${projectId}/users/${memberId}`);
};

export const addTeamToProject = async (organizationId: OrganizationId, projectId: ProjectId, body: AddTeamToProjectDtoBase) => {
  return await api.post<void>(`/organizations/${organizationId}/projects/${projectId}/teams`, body);
};

export const removeTeamFromProject = async (organizationId: OrganizationId, projectId: ProjectId, teamId: TeamId) => {
  return await api.delete<void>(`/organizations/${organizationId}/projects/${projectId}/teams/${teamId}`);
};

export const deleteProject = async (organizationId: OrganizationId, projectId: ProjectId) => {
  return await api.delete(`/organizations/${organizationId}/projects/${projectId}`);
};

export const updateTeamInProject = async (organizationId: OrganizationId, projectId: ProjectId, teamId: TeamId, body: UpdateTeamProjectRoleDtoBase) => {
  return await api.patch<void>(`/organizations/${organizationId}/projects/${projectId}/teams/${teamId}/role`, body);
};

export const updateUserInProject = async (organizationId: OrganizationId, projectId: ProjectId, userId: UserId, body: UpdateUserProjectRoleDtoBase) => {
  return await api.patch<void>(`/organizations/${organizationId}/projects/${projectId}/users/${userId}/role`, body);
};