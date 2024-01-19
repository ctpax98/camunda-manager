/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * An External Task object with the following properties
 */
export type ExternalTaskDto = {
    /**
     * The id of the activity that this external task belongs to.
     */
    activityId?: string;
    /**
     * The id of the activity instance that the external task belongs to.
     */
    activityInstanceId?: string;
    /**
     * The full error message submitted with the latest reported failure executing this task; `null` if no
     * failure was reported previously or if no error message was submitted
     */
    errorMessage?: string;
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
     * A flag indicating whether the external task is suspended or not.
     */
    suspended?: boolean | null;
    /**
     * The id of the worker that posesses or posessed the most recent lock.
     */
    workerId?: string;
    /**
     * The topic name of the external task.
     */
    topicName?: string;
    /**
     * The priority of the external task.
     */
    priority?: number | null;
    /**
     * The business key of the process instance the external task belongs to.
     */
    businessKey?: string;
};

