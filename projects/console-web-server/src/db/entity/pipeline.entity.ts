import { RoutinePipelineBase, RoutinePipelinePropSnake, UserBase } from '@dogu-private/console';
import { PIPELINE_STATUS, ProjectId, RoutineId, RoutinePipelineId, ROUTINE_PIPELINE_TABLE_NAME, UserId } from '@dogu-private/types';
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ColumnTemplate } from './decorators';
import { RoutineJob } from './job.entity';
import { Project } from './project.entity';
import { Routine } from './routine.entity';
import { User } from './user.entity';

@Entity(ROUTINE_PIPELINE_TABLE_NAME)
export class RoutinePipeline extends BaseEntity implements RoutinePipelineBase {
  @PrimaryGeneratedColumn('increment', { type: 'int', name: RoutinePipelinePropSnake.routine_pipeline_id, unsigned: true })
  routinePipelineId!: RoutinePipelineId;

  @ColumnTemplate.RelationUuid(RoutinePipelinePropSnake.project_id)
  projectId!: ProjectId;

  @ColumnTemplate.RelationUuid(RoutinePipelinePropSnake.routine_id, true)
  routineId!: RoutineId | null;

  @Column({ type: 'smallint', name: RoutinePipelinePropSnake.status, default: PIPELINE_STATUS.WAITING, nullable: false })
  status!: PIPELINE_STATUS;

  @Column({ type: 'int', name: RoutinePipelinePropSnake.index, unsigned: true, nullable: false })
  index!: number;

  @ColumnTemplate.RelationUuid(RoutinePipelinePropSnake.creator_id)
  creatorId!: UserId;

  @ColumnTemplate.RelationUuid(RoutinePipelinePropSnake.canceler_id, true)
  cancelerId!: UserId | null;

  @ColumnTemplate.CreateDate(RoutinePipelinePropSnake.created_at)
  createdAt!: Date;

  @ColumnTemplate.UpdateDate(RoutinePipelinePropSnake.updated_at)
  updatedAt!: Date;

  @ColumnTemplate.Date(RoutinePipelinePropSnake.in_progress_at, true)
  inProgressAt!: Date | null;

  @ColumnTemplate.Date(RoutinePipelinePropSnake.completed_at, true)
  completedAt!: Date | null;

  @ColumnTemplate.DeleteDate(RoutinePipelinePropSnake.deleted_at)
  deletedAt!: Date | null;

  @ManyToOne(() => User, (user) => user.routinePipelines, { createForeignKeyConstraints: false })
  @JoinColumn({ name: RoutinePipelinePropSnake.creator_id })
  creator?: UserBase;

  @ManyToOne(() => User, { createForeignKeyConstraints: false })
  @JoinColumn({ name: RoutinePipelinePropSnake.canceler_id })
  canceler?: UserBase;

  @ManyToOne(() => Routine, (routine) => routine, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  @JoinColumn({ name: RoutinePipelinePropSnake.routine_id })
  routine?: Routine;

  @OneToMany(() => RoutineJob, (job) => job.routinePipeline, { cascade: ['soft-remove'] })
  routineJobs?: RoutineJob[];

  @ManyToOne(() => Project, (project) => project, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  @JoinColumn({ name: RoutinePipelinePropSnake.project_id })
  project?: Project;
}