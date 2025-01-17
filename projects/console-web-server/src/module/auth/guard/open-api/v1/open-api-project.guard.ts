import { V1CALLER_TYPE, V1OpenApiPayload, V1_OPEN_API_PROJECT_ROLE_KEY } from '@dogu-private/types';
import { CanActivate, ExecutionContext, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { InjectDataSource } from '@nestjs/typeorm';
import { Request } from 'express';
import { DataSource } from 'typeorm';
import { config } from '../../../../../config';
import { OrganizationAccessToken } from '../../../../../db/entity/organization-access-token.entity';
import { PersonalAccessToken } from '../../../../../db/entity/personal-access-token.entity';
import { ProjectAccessToken } from '../../../../../db/entity/project-access-token.entity';
import { Project } from '../../../../../db/entity/project.entity';
import { Token } from '../../../../../db/entity/token.entity';
import { DoguLogger } from '../../../../logger/logger';
import { ORGANIZATION_ROLE, PROJECT_ROLE } from '../../../auth.types';
import { V1AuthOpenApiService } from '../../../service/open-api/v1/auth-open-api.service';
import { printLog, UserPermission } from '../../common';

@Injectable()
export class V1OpenApiProjectGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector, //
    private readonly logger: DoguLogger,
    @InjectDataSource()
    private readonly dataSource: DataSource,
    @Inject(V1AuthOpenApiService)
    private readonly v1AuthOpenApiService: V1AuthOpenApiService,
  ) {}

  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const controllerRoleType: PROJECT_ROLE = this.reflector.get<PROJECT_ROLE>(V1_OPEN_API_PROJECT_ROLE_KEY, ctx.getHandler());
    if (!controllerRoleType) {
      throw new HttpException(`V1OpenApiProjectGuard. The role is not defined.`, HttpStatus.UNAUTHORIZED);
    }
    if (config.gaurd.role.logging) {
      printLog(ctx, 'V1OpenApiProjectGuard', null);
    }

    const req = ctx.switchToHttp().getRequest<Request>();

    const tokenByRequest = this.v1AuthOpenApiService.getToken(req);
    const token = await this.dataSource.getRepository(Token).findOne({ where: { token: tokenByRequest } });
    if (!token) {
      throw new HttpException(`V1OpenApiProjectGuard. The token is invalid.`, HttpStatus.UNAUTHORIZED);
    }

    const orgIdByRequest = req.params.organizationId;
    const projectIdByRequest = req.params.projectId;
    const project = await this.dataSource.getRepository(Project).findOne({ where: { projectId: projectIdByRequest } });
    const orgIdByProject = project?.organizationId;

    // validate by org
    const orgByToken = await this.dataSource.getRepository(OrganizationAccessToken).findOne({ where: { tokenId: token.tokenId } });
    if (orgByToken && orgByToken.organizationId === orgIdByRequest) {
      const payload: V1OpenApiPayload = {
        organizationId: orgByToken.organizationId,
        callerType: V1CALLER_TYPE.ORGANIZATION,
      };
      req.user = payload;
      return true;
    } else if (orgIdByProject && orgByToken && orgByToken.organizationId == orgIdByProject) {
      const payload: V1OpenApiPayload = {
        organizationId: orgByToken.organizationId,
        callerType: V1CALLER_TYPE.ORGANIZATION,
      };
      req.user = payload;
      return true;
    }

    // validate by project
    const projectByToken = await this.dataSource.getRepository(ProjectAccessToken).findOne({ where: { tokenId: token.tokenId } });
    if (projectByToken && projectByToken.projectId === projectIdByRequest) {
      const payload: V1OpenApiPayload = {
        projectId: projectByToken.projectId,
        callerType: V1CALLER_TYPE.PROJECT,
      };
      req.user = payload;
      return true;
    }

    // validate by user
    const userByToken = await this.dataSource.getRepository(PersonalAccessToken).findOne({ where: { tokenId: token.tokenId } });
    if (!userByToken) {
      throw new HttpException(`Unauthorized`, HttpStatus.UNAUTHORIZED);
    }

    const userId = userByToken.userId;
    const orgId = orgIdByProject || orgIdByRequest;
    const organizationRole = await UserPermission.getOrganizationUserRole(this.dataSource.manager, orgId, userId);
    if (UserPermission.validateOrganizationRolePermission(organizationRole, ORGANIZATION_ROLE.ADMIN)) {
      const payload: V1OpenApiPayload = {
        userId: userId,
        callerType: V1CALLER_TYPE.USER,
      };
      req.user = payload;
      return true;
    }

    const userWithOrgProjectRole = await UserPermission.getUserWithOrganizationRoleAndProjectRoleGroup(this.dataSource.manager, orgId, projectIdByRequest, userId);
    if (!userWithOrgProjectRole) {
      this.logger.error(`The user is not a member of the organization.`);
      throw new HttpException(`The user is not a member of the organization.`, HttpStatus.UNAUTHORIZED);
    }

    if (!UserPermission.checkProjectPermission(userWithOrgProjectRole, controllerRoleType)) {
      throw new HttpException(`The user does not have permission to access the project.`, HttpStatus.UNAUTHORIZED);
    }

    const payload: V1OpenApiPayload = {
      userId: userId,
      callerType: V1CALLER_TYPE.USER,
    };
    req.user = payload;
    return true;
  }
}
