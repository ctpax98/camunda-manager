/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VariableValueDto } from './VariableValueDto';

export type LockedExternalTaskDto = {
    /**
     * The id of the activity that this external task belongs to.
     */
    activityId?: string;
    /**
     * The id of the activity instance that the external task belongs to.
     */
    activityInstanceId?: string;
    /**
     * The full error message submitted with the latest reported failure executing this task;`null` if no failure
     * was reported previously or if no error message was submitted
     */
    errorMessage?: string;
    /**
     * The error details submitted with the latest reported failure executing this task.`null` if no failure was
     * reported previously or if no error details was submitted
     */
    errorDetails?: string;
    /**
     * The id of the execution that the external task belongs to.
     */
    executionId?: string;
    /**
     * The id of the external task.
     */
    id?: string;
    /**
     * The date that the task's most recent lock expires or has expired.
     */
    lockExpirationTime?: string | null;
    /**
     * The id of the process definition the external task is defined in.
     */
    processDefinitionId?: string;
    /**
     * The key of the process definition the external task is defined in.
     */
    processDefinitionKey?: string;
    /**
     * The version tag of the process definition the external task is defined in.
     */
    processDefinitionVersionTag?: string;
    /**
     * The id of the process instance the external task belongs to.
     */
    processInstanceId?: string;
    /**
     * The id of the tenant the external task belongs to.
     */
    tenantId?: string;
    /**
     * The number of retries the task currently has left.
     */
    retries?: number | null;
    /**
     * Whether the process instance the external task belongs to is suspended.
     */
    suspended?: boolean | null;
    /**
     * The id of the worker that posesses or posessed the most recent lock.
     */
    workerId?: string;
    /**
     * The priority of the external task.
     */
    priority?: number | null;
    /**
     * The topic name of the external task.
     */
    topicName?: string;
    /**
     * The business key of the process instance the external task belongs to.
     */
    businessKey?: string;
    /**
     * A JSON object containing a property for each of the requested variables. The key is the variable name,
     * the value is a JSON object of serialized variable values with the following properties:
     */
    variables?: Record<string, VariableValueDto>;
};

