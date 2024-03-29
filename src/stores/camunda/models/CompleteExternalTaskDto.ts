/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VariableValueDto } from './VariableValueDto';

export type CompleteExternalTaskDto = {
    /**
     * The id of the worker that completes the task. Must match the id of the worker who has most recently locked the task.
     */
    workerId?: string;
    /**
     * A JSON object containing variable key-value pairs. Each key is a variable name and each value a JSON variable value object with the following properties:
     */
    variables?: Record<string, VariableValueDto>;
    /**
     * A JSON object containing local variable key-value pairs. Local variables are set only in the scope of external task. Each key is a variable name and each value a JSON variable value object with the following properties:
     */
    localVariables?: Record<string, VariableValueDto>;
};

