/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The schema for a pipeline.
 */
export interface RoutineSchema {
  /**
   * The environment variables for the pipeline.
   */
  env?: {
    [k: string]: string;
  };
  jobs: {
    [k: string]: JobSchema;
  };
  name: string;
  on: {
    [k: string]: string | null;
  };
}
/**
 * This interface was referenced by `RoutineSchema`'s JSON-Schema
 * via the `definition` "Job".
 */
export interface JobSchema {
  needs?: string | string[];
  record?: boolean;
  'runs-on':
    | {
        group: string | string[];
      }
    | string
    | string[];
  steps: StepSchema[];
}
/**
 * This interface was referenced by `RoutineSchema`'s JSON-Schema
 * via the `definition` "Step".
 */
export interface StepSchema {
  name: string;
  run?: string;
  uses?: string;
  with?: {
    [k: string]: unknown;
  };
  /**
   * The environment variables for the step.
   */
  env?: {
    [k: string]: string;
  };
}
