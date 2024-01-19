/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchDto } from '../models/BatchDto';
import type { CompleteExternalTaskDto } from '../models/CompleteExternalTaskDto';
import type { CountResultDto } from '../models/CountResultDto';
import type { ExtendLockOnExternalTaskDto } from '../models/ExtendLockOnExternalTaskDto';
import type { ExternalTaskBpmnError } from '../models/ExternalTaskBpmnError';
import type { ExternalTaskDto } from '../models/ExternalTaskDto';
import type { ExternalTaskFailureDto } from '../models/ExternalTaskFailureDto';
import type { ExternalTaskQueryDto } from '../models/ExternalTaskQueryDto';
import type { FetchExternalTasksDto } from '../models/FetchExternalTasksDto';
import type { LockedExternalTaskDto } from '../models/LockedExternalTaskDto';
import type { PriorityDto } from '../models/PriorityDto';
import type { RetriesDto } from '../models/RetriesDto';
import type { SetRetriesForExternalTasksDto } from '../models/SetRetriesForExternalTasksDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ExternalTaskService {

    /**
     * Queries for the external tasks that fulfill given parameters. Parameters may be static as well as dynamic
     * runtime properties of executions. The size of the result set can be retrieved by using the
     * [Get External Task Count](https://docs.camunda.org/manual/7.14/reference/rest/external-task/get-query-count/) method.
     * @returns ExternalTaskDto Request successful.
     * @throws ApiError
     */
    public static getExternalTasks({
        externalTaskId,
        externalTaskIdIn,
        topicName,
        workerId,
        locked,
        notLocked,
        withRetriesLeft,
        noRetriesLeft,
        lockExpirationAfter,
        lockExpirationBefore,
        activityId,
        activityIdIn,
        executionId,
        processInstanceId,
        processInstanceIdIn,
        processDefinitionId,
        tenantIdIn,
        active,
        suspended,
        priorityHigherThanOrEquals,
        priorityLowerThanOrEquals,
        sortBy,
        sortOrder,
        firstResult,
        maxResults,
    }: {
        /**
         * Filter by an external task's id.
         */
        externalTaskId?: string,
        /**
         * Filter by the comma-separated list of external task ids.
         */
        externalTaskIdIn?: string,
        /**
         * Filter by an external task topic.
         */
        topicName?: string,
        /**
         * Filter by the id of the worker that the task was most recently locked by.
         */
        workerId?: string,
        /**
         * Only include external tasks that are currently locked (i.e., they have a lock time and it has not expired).
         * Value may only be `true`, as `false` matches any external task.
         */
        locked?: boolean,
        /**
         * Only include external tasks that are currently not locked (i.e., they have no lock or it has expired).
         * Value may only be `true`, as `false` matches any external task.
         */
        notLocked?: boolean,
        /**
         * Only include external tasks that have a positive (&gt; 0) number of retries (or `null`). Value may only be
         * `true`, as `false` matches any external task.
         */
        withRetriesLeft?: boolean,
        /**
         * Only include external tasks that have 0 retries. Value may only be `true`, as `false` matches any
         * external task.
         */
        noRetriesLeft?: boolean,
        /**
         * Restrict to external tasks that have a lock that expires after a given date. By
         * [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format
         * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
         */
        lockExpirationAfter?: string,
        /**
         * Restrict to external tasks that have a lock that expires before a given date. By
         * [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format
         * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
         */
        lockExpirationBefore?: string,
        /**
         * Filter by the id of the activity that an external task is created for.
         */
        activityId?: string,
        /**
         * Filter by the comma-separated list of ids of the activities that an external task is created for.
         */
        activityIdIn?: string,
        /**
         * Filter by the id of the execution that an external task belongs to.
         */
        executionId?: string,
        /**
         * Filter by the id of the process instance that an external task belongs to.
         */
        processInstanceId?: string,
        /**
         * Filter by a comma-separated list of process instance ids that an external task may belong to.
         */
        processInstanceIdIn?: string,
        /**
         * Filter by the id of the process definition that an external task belongs to.
         */
        processDefinitionId?: string,
        /**
         * Filter by a comma-separated list of tenant ids.
         * An external task must have one of the given tenant ids.
         */
        tenantIdIn?: string,
        /**
         * Only include active tasks. Value may only be `true`, as `false` matches any external task.
         */
        active?: boolean,
        /**
         * Only include suspended tasks. Value may only be `true`, as `false` matches any external task.
         */
        suspended?: boolean,
        /**
         * Only include jobs with a priority higher than or equal to the given value.
         * Value must be a valid `long` value.
         */
        priorityHigherThanOrEquals?: number,
        /**
         * Only include jobs with a priority lower than or equal to the given value.
         * Value must be a valid `long` value.
         */
        priorityLowerThanOrEquals?: number,
        /**
         * Sort the results lexicographically by a given criterion.
         * Must be used in conjunction with the sortOrder parameter.
         */
        sortBy?: 'id' | 'lockExpirationTime' | 'processInstanceId' | 'processDefinitionId' | 'processDefinitionKey' | 'taskPriority' | 'tenantId',
        /**
         * Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
         * Must be used in conjunction with the sortBy parameter.
         */
        sortOrder?: 'asc' | 'desc',
        /**
         * Pagination of results. Specifies the index of the first result to return.
         */
        firstResult?: number,
        /**
         * Pagination of results. Specifies the maximum number of results to return.
         * Will return less results if there are no more results left.
         */
        maxResults?: number,
    }): CancelablePromise<Array<ExternalTaskDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/external-task',
            query: {
                'externalTaskId': externalTaskId,
                'externalTaskIdIn': externalTaskIdIn,
                'topicName': topicName,
                'workerId': workerId,
                'locked': locked,
                'notLocked': notLocked,
                'withRetriesLeft': withRetriesLeft,
                'noRetriesLeft': noRetriesLeft,
                'lockExpirationAfter': lockExpirationAfter,
                'lockExpirationBefore': lockExpirationBefore,
                'activityId': activityId,
                'activityIdIn': activityIdIn,
                'executionId': executionId,
                'processInstanceId': processInstanceId,
                'processInstanceIdIn': processInstanceIdIn,
                'processDefinitionId': processDefinitionId,
                'tenantIdIn': tenantIdIn,
                'active': active,
                'suspended': suspended,
                'priorityHigherThanOrEquals': priorityHigherThanOrEquals,
                'priorityLowerThanOrEquals': priorityLowerThanOrEquals,
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if a \`sortOrder\` parameter is supplied,
                but no \`sortBy\`. See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Queries for external tasks that fulfill given parameters in the form of a JSON object.
     *
     * This method is slightly more powerful than the
     * [Get External Tasks](https://docs.camunda.org/manual/7.14/reference/rest/external-task/get-query/) method because it allows to
     * specify a hierarchical result sorting.
     * @returns ExternalTaskDto Request successful. The Response is a JSON array of external task objects.
     * @throws ApiError
     */
    public static queryExternalTasks({
        firstResult,
        maxResults,
        requestBody,
    }: {
        /**
         * Pagination of results. Specifies the index of the first result to return.
         */
        firstResult?: number,
        /**
         * Pagination of results. Specifies the maximum number of results to return.
         * Will return less results if there are no more results left.
         */
        maxResults?: number,
        requestBody?: ExternalTaskQueryDto,
    }): CancelablePromise<Array<ExternalTaskDto>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/external-task',
            query: {
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if a \`sortOrder\` parameter is supplied,
                but no \`sortBy\`. See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Queries for the number of external tasks that fulfill given parameters. Takes the same parameters as the
     * [Get External Tasks](https://docs.camunda.org/manual/7.14/reference/rest/external-task/get-query/) method.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getExternalTasksCount({
        externalTaskId,
        externalTaskIdIn,
        topicName,
        workerId,
        locked,
        notLocked,
        withRetriesLeft,
        noRetriesLeft,
        lockExpirationAfter,
        lockExpirationBefore,
        activityId,
        activityIdIn,
        executionId,
        processInstanceId,
        processInstanceIdIn,
        processDefinitionId,
        tenantIdIn,
        active,
        suspended,
        priorityHigherThanOrEquals,
        priorityLowerThanOrEquals,
    }: {
        /**
         * Filter by an external task's id.
         */
        externalTaskId?: string,
        /**
         * Filter by the comma-separated list of external task ids.
         */
        externalTaskIdIn?: string,
        /**
         * Filter by an external task topic.
         */
        topicName?: string,
        /**
         * Filter by the id of the worker that the task was most recently locked by.
         */
        workerId?: string,
        /**
         * Only include external tasks that are currently locked (i.e., they have a lock time and it has not expired).
         * Value may only be `true`, as `false` matches any external task.
         */
        locked?: boolean,
        /**
         * Only include external tasks that are currently not locked (i.e., they have no lock or it has expired).
         * Value may only be `true`, as `false` matches any external task.
         */
        notLocked?: boolean,
        /**
         * Only include external tasks that have a positive (&gt; 0) number of retries (or `null`). Value may only be
         * `true`, as `false` matches any external task.
         */
        withRetriesLeft?: boolean,
        /**
         * Only include external tasks that have 0 retries. Value may only be `true`, as `false` matches any
         * external task.
         */
        noRetriesLeft?: boolean,
        /**
         * Restrict to external tasks that have a lock that expires after a given date. By
         * [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format
         * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
         */
        lockExpirationAfter?: string,
        /**
         * Restrict to external tasks that have a lock that expires before a given date. By
         * [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format
         * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
         */
        lockExpirationBefore?: string,
        /**
         * Filter by the id of the activity that an external task is created for.
         */
        activityId?: string,
        /**
         * Filter by the comma-separated list of ids of the activities that an external task is created for.
         */
        activityIdIn?: string,
        /**
         * Filter by the id of the execution that an external task belongs to.
         */
        executionId?: string,
        /**
         * Filter by the id of the process instance that an external task belongs to.
         */
        processInstanceId?: string,
        /**
         * Filter by a comma-separated list of process instance ids that an external task may belong to.
         */
        processInstanceIdIn?: string,
        /**
         * Filter by the id of the process definition that an external task belongs to.
         */
        processDefinitionId?: string,
        /**
         * Filter by a comma-separated list of tenant ids.
         * An external task must have one of the given tenant ids.
         */
        tenantIdIn?: string,
        /**
         * Only include active tasks. Value may only be `true`, as `false` matches any external task.
         */
        active?: boolean,
        /**
         * Only include suspended tasks. Value may only be `true`, as `false` matches any external task.
         */
        suspended?: boolean,
        /**
         * Only include jobs with a priority higher than or equal to the given value.
         * Value must be a valid `long` value.
         */
        priorityHigherThanOrEquals?: number,
        /**
         * Only include jobs with a priority lower than or equal to the given value.
         * Value must be a valid `long` value.
         */
        priorityLowerThanOrEquals?: number,
    }): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/external-task/count',
            query: {
                'externalTaskId': externalTaskId,
                'externalTaskIdIn': externalTaskIdIn,
                'topicName': topicName,
                'workerId': workerId,
                'locked': locked,
                'notLocked': notLocked,
                'withRetriesLeft': withRetriesLeft,
                'noRetriesLeft': noRetriesLeft,
                'lockExpirationAfter': lockExpirationAfter,
                'lockExpirationBefore': lockExpirationBefore,
                'activityId': activityId,
                'activityIdIn': activityIdIn,
                'executionId': executionId,
                'processInstanceId': processInstanceId,
                'processInstanceIdIn': processInstanceIdIn,
                'processDefinitionId': processDefinitionId,
                'tenantIdIn': tenantIdIn,
                'active': active,
                'suspended': suspended,
                'priorityHigherThanOrEquals': priorityHigherThanOrEquals,
                'priorityLowerThanOrEquals': priorityLowerThanOrEquals,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Queries for the number of external tasks that fulfill given parameters. This method takes the same message
     * body as the [Get External Tasks (POST)](https://docs.camunda.org/manual/7.14/reference/rest/external-task/post-query/) method.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static queryExternalTasksCount({
        requestBody,
    }: {
        requestBody?: ExternalTaskQueryDto,
    }): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/external-task/count',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the query parameters are invalid. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Fetches and locks a specific number of external tasks for execution by a worker. Query can be restricted
     * to specific task topics and for each task topic an individual lock time can be provided.
     * @returns LockedExternalTaskDto Request successful.
     * @throws ApiError
     */
    public static fetchAndLock({
        requestBody,
    }: {
        requestBody?: FetchExternalTasksDto,
    }): CancelablePromise<Array<LockedExternalTaskDto>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/external-task/fetchAndLock',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Sets the number of retries left to execute external tasks by id synchronously. If retries are set to 0,
     * an incident is created.
     * @returns void
     * @throws ApiError
     */
    public static setExternalTaskRetries({
        requestBody,
    }: {
        requestBody?: SetRetriesForExternalTasksDto,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/external-task/retries',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `In case the number of retries is negative or null, an exception of type \`InvalidRequestException\` is
                returned. See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Returned if the task does not exist. This could indicate a wrong task id as well as a cancelled task,
                e.g., due to a caught BPMN boundary event. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Sets the number of retries left to execute external tasks by id asynchronously. If retries are set to 0,
     * an incident is created.
     * @returns BatchDto Request successful.
     * @throws ApiError
     */
    public static setExternalTaskRetriesAsyncOperation({
        requestBody,
    }: {
        requestBody?: SetRetriesForExternalTasksDto,
    }): CancelablePromise<BatchDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/external-task/retries-async',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `If neither externalTaskIds nor externalTaskQuery are present or externalTaskIds contains null value or
                the number of retries is negative or null, an exception of type \`InvalidRequestException\` is returned.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Returned if the task does not exist. This could indicate a wrong task id as well as a cancelled task,
                e.g., due to a caught BPMN boundary event. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Queries for distinct topic names of external tasks that fulfill given parameters.
     * Query can be restricted to only tasks with retries left, tasks that are locked, or tasks
     * that are unlocked. The parameters withLockedTasks and withUnlockedTasks are
     * exclusive. Setting them both to true will return an empty list.
     * Providing no parameters will return a list of all distinct topic names with external tasks.
     * @returns string Request successful.
     * @throws ApiError
     */
    public static getTopicNames({
        withLockedTasks,
        withUnlockedTasks,
        withRetriesLeft,
    }: {
        /**
         * Only include external tasks that are currently locked (i.e., they have a lock time and it has not expired).
         * Value may only be `true`, as `false` matches any external task.
         */
        withLockedTasks?: boolean,
        /**
         * Only include external tasks that are currently not locked (i.e., they have no lock or it has expired).
         * Value may only be `true`, as `false` matches any external task.
         */
        withUnlockedTasks?: boolean,
        /**
         * Only include external tasks that have a positive (&gt; 0) number of retries (or `null`). Value may only be
         * `true`, as `false` matches any external task.
         */
        withRetriesLeft?: boolean,
    }): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/external-task/topic-names',
            query: {
                'withLockedTasks': withLockedTasks,
                'withUnlockedTasks': withUnlockedTasks,
                'withRetriesLeft': withRetriesLeft,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid.`,
            },
        });
    }

    /**
     * Retrieves an external task by id, corresponding to the `ExternalTask` interface in the engine.
     * @returns ExternalTaskDto Request successful.
     * @throws ApiError
     */
    public static getExternalTask({
        id,
    }: {
        /**
         * The id of the external task to be retrieved.
         */
        id: string,
    }): CancelablePromise<ExternalTaskDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/external-task/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `External task with the given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Reports a business error in the context of a running external task by id. The error code must be specified
     * to identify the BPMN error handler.
     * @returns void
     * @throws ApiError
     */
    public static handleExternalTaskBpmnError({
        id,
        requestBody,
    }: {
        /**
         * The id of the external task in which context a BPMN error is reported.
         */
        id: string,
        requestBody?: ExternalTaskBpmnError,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/external-task/{id}/bpmnError',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if the task's most recent lock was not acquired by the provided worker.

                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Returned if the task does not exist. This could indicate a wrong task id as well as a cancelled task,
                e.g., due to a caught BPMN boundary event.

                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                500: `Returned if the corresponding process instance could not be resumed successfully.

                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Completes an external task by id and updates process variables.
     * @returns void
     * @throws ApiError
     */
    public static completeExternalTaskResource({
        id,
        requestBody,
    }: {
        /**
         * The id of the task to complete.
         */
        id: string,
        requestBody?: CompleteExternalTaskDto,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/external-task/{id}/complete',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if the task's most recent lock was not acquired by the provided worker. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Returned if the task does not exist. This could indicate a wrong task id as well as a cancelled task,
                e.g., due to a caught BPMN boundary event. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                500: `Returned if the corresponding process instance could not be resumed successfully. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Retrieves the error details in the context of a running external task by id.
     * @returns string Request successful.
     * @throws ApiError
     */
    public static getExternalTaskErrorDetails({
        id,
    }: {
        /**
         * The id of the external task for which the error details should be retrieved.
         */
        id: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/external-task/{id}/errorDetails',
            path: {
                'id': id,
            },
            errors: {
                500: `An external task with the given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Extends the timeout of the lock by a given amount of time.
     * @returns void
     * @throws ApiError
     */
    public static extendLock({
        id,
        requestBody,
    }: {
        /**
         * The id of the external task.
         */
        id: string,
        requestBody?: ExtendLockOnExternalTaskDto,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/external-task/{id}/extendLock',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `In case the new lock duration is negative or the external task is not locked by the given worker or not
                locked at all, an exception of type \`InvalidRequestException\` is returned. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Returned if the task does not exist. This could indicate a wrong task id as well as a cancelled task,
                e.g., due to a caught BPMN boundary event. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Reports a failure to execute an external task by id. A number of retries and a timeout until the task can
     * be retried can be specified. If retries are set to 0, an incident for this task is created.
     * @returns void
     * @throws ApiError
     */
    public static handleFailure({
        id,
        requestBody,
    }: {
        /**
         * The id of the external task to report a failure for.
         */
        id: string,
        requestBody?: ExternalTaskFailureDto,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/external-task/{id}/failure',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if the task's most recent lock was not acquired by the provided worker. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Returned if the task does not exist. This could indicate a wrong task id as well as a cancelled task,
                e.g., due to a caught BPMN boundary event. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                500: `Returned if the corresponding process instance could not be resumed successfully. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Sets the priority of an existing external task by id. The default value of a priority is 0.
     * @returns void
     * @throws ApiError
     */
    public static setExternalTaskResourcePriority({
        id,
        requestBody,
    }: {
        /**
         * The id of the external task to set the priority for.
         */
        id: string,
        requestBody?: PriorityDto,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/external-task/{id}/priority',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Returned if the task does not exist. This could indicate a wrong task id as well as a cancelled task,
                e.g., due to a caught BPMN boundary event. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Sets the number of retries left to execute an external task by id. If retries are set to 0, an
     * incident is created.
     * @returns void
     * @throws ApiError
     */
    public static setExternalTaskResourceRetries({
        id,
        requestBody,
    }: {
        /**
         * The id of the external task to set the number of retries for.
         */
        id: string,
        requestBody?: RetriesDto,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/external-task/{id}/retries',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if the task does not exist. This could indicate a wrong task id as well as a cancelled task,
                e.g., due to a caught BPMN boundary event. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `In case the number of retries is negative or null, an exception of type \`InvalidRequestException\`
                is returned. See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Unlocks an external task by id. Clears the task's lock expiration time and worker id.
     * @returns void
     * @throws ApiError
     */
    public static unlock({
        id,
    }: {
        /**
         * The id of the external task to unlock.
         */
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/external-task/{id}/unlock',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if the task does not exist. This could indicate a wrong task id as well as a cancelled task,
                e.g., due to a caught BPMN boundary event. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

}
