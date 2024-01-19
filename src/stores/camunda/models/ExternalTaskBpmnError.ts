/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaskBpmnErrorDto } from './TaskBpmnErrorDto';

export type ExternalTaskBpmnError = ({
    /**
     * The id of the worker that reports the failure. Must match the id of the worker who has most recently
     * locked the task.
     */
    workerId?: string;
} & TaskBpmnErrorDto);

