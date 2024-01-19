/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VariableValueDto } from './VariableValueDto';

export type CompleteTaskDto = {
    /**
     * A JSON object containing variable key-value pairs.
     */
    variables?: Record<string, VariableValueDto>;
    /**
     * Indicates whether the response should contain the process variables or not. The
     * default is `false` with a response code of `204`. If set to `true` the response
     * contains the process variables and has a response code of `200`. If the task is not
     * associated with a process instance (e.g. if it's part of a case instance) no
     * variables will be returned.
     */
    withVariablesInReturn?: boolean | null;
};

