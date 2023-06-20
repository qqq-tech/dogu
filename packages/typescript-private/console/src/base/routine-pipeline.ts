import { RoutinePipeline } from '@dogu-private/types';

import { camelToSnakeCasePropertiesOf, propertiesOf } from '@dogu-tech/common';
import { RoutineBase } from './routine';
import { RoutineJobBase } from './routine-job';
import { UserBase } from './user';

export interface RoutinePipelineBaseRelationTraits {
  creator?: UserBase;
  routine?: RoutineBase | null;
  routineJobs?: RoutineJobBase[];
  canceler?: UserBase;
}

export type RoutinePipelineBase = RoutinePipeline & RoutinePipelineBaseRelationTraits;
export const RoutinePipelinePropCamel = propertiesOf<RoutinePipelineBase>();
export const RoutinePipelinePropSnake = camelToSnakeCasePropertiesOf<RoutinePipelineBase>();