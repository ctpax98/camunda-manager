/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchDto } from '../models/BatchDto';
import type { CountResultDto } from '../models/CountResultDto';
import type { DeleteHistoricProcessInstancesDto } from '../models/DeleteHistoricProcessInstancesDto';
import type { HistoricProcessInstanceDto } from '../models/HistoricProcessInstanceDto';
import type { HistoricProcessInstanceQueryDto } from '../models/HistoricProcessInstanceQueryDto';
import type { SetRemovalTimeToHistoricProcessInstancesDto } from '../models/SetRemovalTimeToHistoricProcessInstancesDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HistoricProcessInstanceService {

    /**
     * Get List
     * Queries for historic process instances that fulfill the given parameters.
     * The size of the result set can be retrieved by using the
     * [Get Process Instance Count](https://docs.camunda.org/manual/7.14/reference/rest/history/process-instance/get-process-instance-query-count/) method.
     * @returns HistoricProcessInstanceDto Request successful.
     * @throws ApiError
     */
    public static getHistoricProcessInstances({
        sortBy,
        sortOrder,
        firstResult,
        maxResults,
        processInstanceId,
        processInstanceIds,
        processDefinitionId,
        processDefinitionKey,
        processDefinitionKeyIn,
        processDefinitionName,
        processDefinitionNameLike,
        processDefinitionKeyNotIn,
        processInstanceBusinessKey,
        processInstanceBusinessKeyLike,
        rootProcessInstances,
        finished,
        unfinished,
        withIncidents,
        withRootIncidents,
        incidentType,
        incidentStatus,
        incidentMessage,
        incidentMessageLike,
        startedBefore,
        startedAfter,
        finishedBefore,
        finishedAfter,
        executedActivityAfter,
        executedActivityBefore,
        executedJobAfter,
        executedJobBefore,
        startedBy,
        superProcessInstanceId,
        subProcessInstanceId,
        superCaseInstanceId,
        subCaseInstanceId,
        caseInstanceId,
        tenantIdIn,
        withoutTenantId,
        executedActivityIdIn,
        activeActivityIdIn,
        active,
        suspended,
        completed,
        externallyTerminated,
        internallyTerminated,
        variables,
        variableNamesIgnoreCase,
        variableValuesIgnoreCase,
    }: {
        /**
         * Sort the results lexicographically by a given criterion.
         * Must be used in conjunction with the sortOrder parameter.
         */
        sortBy?: 'instanceId' | 'definitionId' | 'definitionKey' | 'definitionName' | 'definitionVersion' | 'businessKey' | 'startTime' | 'endTime' | 'duration' | 'tenantId',
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
        /**
         * Filter by process instance id.
         */
        processInstanceId?: string,
        /**
         * Filter by process instance ids. Filter by a comma-separated list of `Strings`.
         */
        processInstanceIds?: string,
        /**
         * Filter by the process definition the instances run on.
         */
        processDefinitionId?: string,
        /**
         * Filter by the key of the process definition the instances run on.
         */
        processDefinitionKey?: string,
        /**
         * Filter by a list of process definition keys. A process instance must have one of the given process definition keys. Filter by a comma-separated list of `Strings`.
         */
        processDefinitionKeyIn?: string,
        /**
         * Filter by the name of the process definition the instances run on.
         */
        processDefinitionName?: string,
        /**
         * Filter by process definition names that the parameter is a substring of.
         */
        processDefinitionNameLike?: string,
        /**
         * Exclude instances that belong to a set of process definitions. Filter by a comma-separated list of `Strings`.
         */
        processDefinitionKeyNotIn?: string,
        /**
         * Filter by process instance business key.
         */
        processInstanceBusinessKey?: string,
        /**
         * Filter by process instance business key that the parameter is a substring of.
         */
        processInstanceBusinessKeyLike?: string,
        /**
         * Restrict the query to all process instances that are top level process instances.
         */
        rootProcessInstances?: boolean,
        /**
         * Only include finished process instances. Value may only be `true`, as `false` is the default behavior.
         */
        finished?: boolean,
        /**
         * Only include unfinished process instances. Value may only be `true`, as `false` is the default behavior.
         */
        unfinished?: boolean,
        /**
         * Only include process instances which have an incident. Value may only be `true`, as `false` is the default behavior.
         */
        withIncidents?: boolean,
        /**
         * Only include process instances which have a root incident. Value may only be `true`, as `false` is the default behavior.
         */
        withRootIncidents?: boolean,
        /**
         * Filter by the incident type. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
         */
        incidentType?: string,
        /**
         * Only include process instances which have an incident in status either open or resolved. To get all process instances, use the query parameter withIncidents.
         */
        incidentStatus?: 'open' | 'resolved',
        /**
         * Filter by the incident message. Exact match.
         */
        incidentMessage?: string,
        /**
         * Filter by the incident message that the parameter is a substring of.
         */
        incidentMessageLike?: string,
        /**
         * Restrict to instances that were started before the given date.
         * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
         */
        startedBefore?: string,
        /**
         * Restrict to instances that were started after the given date.
         * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
         */
        startedAfter?: string,
        /**
         * Restrict to instances that were finished before the given date.
         * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
         */
        finishedBefore?: string,
        /**
         * Restrict to instances that were finished after the given date.
         * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
         */
        finishedAfter?: string,
        /**
         * Restrict to instances that executed an activity after the given date (inclusive).
         * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
         */
        executedActivityAfter?: string,
        /**
         * Restrict to instances that executed an activity before the given date (inclusive).
         * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
         */
        executedActivityBefore?: string,
        /**
         * Restrict to instances that executed an job after the given date (inclusive).
         * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
         */
        executedJobAfter?: string,
        /**
         * Restrict to instances that executed an job before the given date (inclusive).
         * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
         */
        executedJobBefore?: string,
        /**
         * Only include process instances that were started by the given user.
         */
        startedBy?: string,
        /**
         * Restrict query to all process instances that are sub process instances of the given process instance. Takes a process instance id.
         */
        superProcessInstanceId?: string,
        /**
         * Restrict query to one process instance that has a sub process instance with the given id.
         */
        subProcessInstanceId?: string,
        /**
         * Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id.
         */
        superCaseInstanceId?: string,
        /**
         * Restrict query to one process instance that has a sub case instance with the given id.
         */
        subCaseInstanceId?: string,
        /**
         * Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id.
         */
        caseInstanceId?: string,
        /**
         * Filter by a list of tenant ids. A process instance must have one of the given tenant ids. Filter by a comma-separated list of `Strings`
         */
        tenantIdIn?: string,
        /**
         * Only include historic process instances which belong to no tenant. Value may only be `true`, as `false` is the default behavior.
         */
        withoutTenantId?: boolean,
        /**
         * Restrict to instances that executed an activity with one of given ids. Filter by a comma-separated list of `Strings`
         */
        executedActivityIdIn?: string,
        /**
         * Restrict to instances that have an active activity with one of given ids. Filter by a comma-separated list of `Strings`
         */
        activeActivityIdIn?: string,
        /**
         * Restrict to instances that are active.
         */
        active?: boolean,
        /**
         * Restrict to instances that are suspended.
         */
        suspended?: boolean,
        /**
         * Restrict to instances that are completed.
         */
        completed?: boolean,
        /**
         * Restrict to instances that are externallyTerminated.
         */
        externallyTerminated?: boolean,
        /**
         * Restrict to instances that are internallyTerminated.
         */
        internallyTerminated?: boolean,
        /**
         * Only include process instances that have/had variables with certain values.
         * Variable filtering expressions are comma-separated and are structured as follows:
         * A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value.
         *
         * **Note:** Values are always treated as String objects on server side.
         *
         * Valid operator values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`.
         *
         * Key and value may not contain underscore or comma characters.
         *
         */
        variables?: string,
        /**
         * Match all variable names provided in variables case-insensitively. If set to `true` variableName and variablename are treated as equal.
         */
        variableNamesIgnoreCase?: boolean,
        /**
         * Match all variable values provided in variables case-insensitively. If set to `true` variableValue and variablevalue are treated as equal.
         */
        variableValuesIgnoreCase?: boolean,
    }): CancelablePromise<Array<HistoricProcessInstanceDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/process-instance',
            query: {
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'firstResult': firstResult,
                'maxResults': maxResults,
                'processInstanceId': processInstanceId,
                'processInstanceIds': processInstanceIds,
                'processDefinitionId': processDefinitionId,
                'processDefinitionKey': processDefinitionKey,
                'processDefinitionKeyIn': processDefinitionKeyIn,
                'processDefinitionName': processDefinitionName,
                'processDefinitionNameLike': processDefinitionNameLike,
                'processDefinitionKeyNotIn': processDefinitionKeyNotIn,
                'processInstanceBusinessKey': processInstanceBusinessKey,
                'processInstanceBusinessKeyLike': processInstanceBusinessKeyLike,
                'rootProcessInstances': rootProcessInstances,
                'finished': finished,
                'unfinished': unfinished,
                'withIncidents': withIncidents,
                'withRootIncidents': withRootIncidents,
                'incidentType': incidentType,
                'incidentStatus': incidentStatus,
                'incidentMessage': incidentMessage,
                'incidentMessageLike': incidentMessageLike,
                'startedBefore': startedBefore,
                'startedAfter': startedAfter,
                'finishedBefore': finishedBefore,
                'finishedAfter': finishedAfter,
                'executedActivityAfter': executedActivityAfter,
                'executedActivityBefore': executedActivityBefore,
                'executedJobAfter': executedJobAfter,
                'executedJobBefore': executedJobBefore,
                'startedBy': startedBy,
                'superProcessInstanceId': superProcessInstanceId,
                'subProcessInstanceId': subProcessInstanceId,
                'superCaseInstanceId': superCaseInstanceId,
                'subCaseInstanceId': subCaseInstanceId,
                'caseInstanceId': caseInstanceId,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'executedActivityIdIn': executedActivityIdIn,
                'activeActivityIdIn': activeActivityIdIn,
                'active': active,
                'suspended': suspended,
                'completed': completed,
                'externallyTerminated': externallyTerminated,
                'internallyTerminated': internallyTerminated,
                'variables': variables,
                'variableNamesIgnoreCase': variableNamesIgnoreCase,
                'variableValuesIgnoreCase': variableValuesIgnoreCase,
            },
            errors: {
                400: `Bad Request
                Returned if some of the query parameters are invalid, for example if a sortOrder parameter is supplied, but no sortBy.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

    /**
     * Get List (POST)
     * Queries for historic process instances that fulfill the given parameters.
     * This method is slightly more powerful than the
     * [Get Process Instance](https://docs.camunda.org/manual/7.14/reference/rest/history/process-instance/get-process-instance-query/)
     * because it allows filtering by multiple process variables of types `String`, `Number` or `Boolean`.
     * @returns HistoricProcessInstanceDto Request successful.
     * @throws ApiError
     */
    public static queryHistoricProcessInstances({
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
        requestBody?: HistoricProcessInstanceQueryDto,
    }): CancelablePromise<Array<HistoricProcessInstanceDto>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/history/process-instance',
            query: {
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request
                Returned if some of the query parameters are invalid, for example if a sortOrder parameter is supplied, but no sortBy.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

    /**
     * Get List Count
     * Queries for the number of historic process instances that fulfill the given parameters.
     * Takes the same parameters as the [Get Process Instances](https://docs.camunda.org/manual/7.14/reference/rest/history/process-instance/get-process-instance-query/) method.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getHistoricProcessInstancesCount({
        processInstanceId,
        processInstanceIds,
        processDefinitionId,
        processDefinitionKey,
        processDefinitionKeyIn,
        processDefinitionName,
        processDefinitionNameLike,
        processDefinitionKeyNotIn,
        processInstanceBusinessKey,
        processInstanceBusinessKeyLike,
        rootProcessInstances,
        finished,
        unfinished,
        withIncidents,
        withRootIncidents,
        incidentType,
        incidentStatus,
        incidentMessage,
        incidentMessageLike,
        startedBefore,
        startedAfter,
        finishedBefore,
        finishedAfter,
        executedActivityAfter,
        executedActivityBefore,
        executedJobAfter,
        executedJobBefore,
        startedBy,
        superProcessInstanceId,
        subProcessInstanceId,
        superCaseInstanceId,
        subCaseInstanceId,
        caseInstanceId,
        tenantIdIn,
        withoutTenantId,
        executedActivityIdIn,
        activeActivityIdIn,
        active,
        suspended,
        completed,
        externallyTerminated,
        internallyTerminated,
        variables,
        variableNamesIgnoreCase,
        variableValuesIgnoreCase,
    }: {
        /**
         * Filter by process instance id.
         */
        processInstanceId?: string,
        /**
         * Filter by process instance ids. Filter by a comma-separated list of `Strings`.
         */
        processInstanceIds?: string,
        /**
         * Filter by the process definition the instances run on.
         */
        processDefinitionId?: string,
        /**
         * Filter by the key of the process definition the instances run on.
         */
        processDefinitionKey?: string,
        /**
         * Filter by a list of process definition keys. A process instance must have one of the given process definition keys. Filter by a comma-separated list of `Strings`.
         */
        processDefinitionKeyIn?: string,
        /**
         * Filter by the name of the process definition the instances run on.
         */
        processDefinitionName?: string,
        /**
         * Filter by process definition names that the parameter is a substring of.
         */
        processDefinitionNameLike?: string,
        /**
         * Exclude instances that belong to a set of process definitions. Filter by a comma-separated list of `Strings`.
         */
        processDefinitionKeyNotIn?: string,
        /**
         * Filter by process instance business key.
         */
        processInstanceBusinessKey?: string,
        /**
         * Filter by process instance business key that the parameter is a substring of.
         */
        processInstanceBusinessKeyLike?: string,
        /**
         * Restrict the query to all process instances that are top level process instances.
         */
        rootProcessInstances?: boolean,
        /**
         * Only include finished process instances. Value may only be `true`, as `false` is the default behavior.
         */
        finished?: boolean,
        /**
         * Only include unfinished process instances. Value may only be `true`, as `false` is the default behavior.
         */
        unfinished?: boolean,
        /**
         * Only include process instances which have an incident. Value may only be `true`, as `false` is the default behavior.
         */
        withIncidents?: boolean,
        /**
         * Only include process instances which have a root incident. Value may only be `true`, as `false` is the default behavior.
         */
        withRootIncidents?: boolean,
        /**
         * Filter by the incident type. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
         */
        incidentType?: string,
        /**
         * Only include process instances which have an incident in status either open or resolved. To get all process instances, use the query parameter withIncidents.
         */
        incidentStatus?: 'open' | 'resolved',
        /**
         * Filter by the incident message. Exact match.
         */
        incidentMessage?: string,
        /**
         * Filter by the incident message that the parameter is a substring of.
         */
        incidentMessageLike?: string,
        /**
         * Restrict to instances that were started before the given date.
         * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
         */
        startedBefore?: string,
        /**
         * Restrict to instances that were started after the given date.
         * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
         */
        startedAfter?: string,
        /**
         * Restrict to instances that were finished before the given date.
         * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
         */
        finishedBefore?: string,
        /**
         * Restrict to instances that were finished after the given date.
         * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
         */
        finishedAfter?: string,
        /**
         * Restrict to instances that executed an activity after the given date (inclusive).
         * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
         */
        executedActivityAfter?: string,
        /**
         * Restrict to instances that executed an activity before the given date (inclusive).
         * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
         */
        executedActivityBefore?: string,
        /**
         * Restrict to instances that executed an job after the given date (inclusive).
         * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
         */
        executedJobAfter?: string,
        /**
         * Restrict to instances that executed an job before the given date (inclusive).
         * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
         */
        executedJobBefore?: string,
        /**
         * Only include process instances that were started by the given user.
         */
        startedBy?: string,
        /**
         * Restrict query to all process instances that are sub process instances of the given process instance. Takes a process instance id.
         */
        superProcessInstanceId?: string,
        /**
         * Restrict query to one process instance that has a sub process instance with the given id.
         */
        subProcessInstanceId?: string,
        /**
         * Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id.
         */
        superCaseInstanceId?: string,
        /**
         * Restrict query to one process instance that has a sub case instance with the given id.
         */
        subCaseInstanceId?: string,
        /**
         * Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id.
         */
        caseInstanceId?: string,
        /**
         * Filter by a list of tenant ids. A process instance must have one of the given tenant ids. Filter by a comma-separated list of `Strings`
         */
        tenantIdIn?: string,
        /**
         * Only include historic process instances which belong to no tenant. Value may only be `true`, as `false` is the default behavior.
         */
        withoutTenantId?: boolean,
        /**
         * Restrict to instances that executed an activity with one of given ids. Filter by a comma-separated list of `Strings`
         */
        executedActivityIdIn?: string,
        /**
         * Restrict to instances that have an active activity with one of given ids. Filter by a comma-separated list of `Strings`
         */
        activeActivityIdIn?: string,
        /**
         * Restrict to instances that are active.
         */
        active?: boolean,
        /**
         * Restrict to instances that are suspended.
         */
        suspended?: boolean,
        /**
         * Restrict to instances that are completed.
         */
        completed?: boolean,
        /**
         * Restrict to instances that are externallyTerminated.
         */
        externallyTerminated?: boolean,
        /**
         * Restrict to instances that are internallyTerminated.
         */
        internallyTerminated?: boolean,
        /**
         * Only include process instances that have/had variables with certain values.
         * Variable filtering expressions are comma-separated and are structured as follows:
         * A valid parameter value has the form `key_operator_value`. `key` is the variable name, `operator` is the comparison operator to be used and `value` the variable value.
         *
         * **Note:** Values are always treated as String objects on server side.
         *
         * Valid operator values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`.
         *
         * Key and value may not contain underscore or comma characters.
         *
         */
        variables?: string,
        /**
         * Match all variable names provided in variables case-insensitively. If set to `true` variableName and variablename are treated as equal.
         */
        variableNamesIgnoreCase?: boolean,
        /**
         * Match all variable values provided in variables case-insensitively. If set to `true` variableValue and variablevalue are treated as equal.
         */
        variableValuesIgnoreCase?: boolean,
    }): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/process-instance/count',
            query: {
                'processInstanceId': processInstanceId,
                'processInstanceIds': processInstanceIds,
                'processDefinitionId': processDefinitionId,
                'processDefinitionKey': processDefinitionKey,
                'processDefinitionKeyIn': processDefinitionKeyIn,
                'processDefinitionName': processDefinitionName,
                'processDefinitionNameLike': processDefinitionNameLike,
                'processDefinitionKeyNotIn': processDefinitionKeyNotIn,
                'processInstanceBusinessKey': processInstanceBusinessKey,
                'processInstanceBusinessKeyLike': processInstanceBusinessKeyLike,
                'rootProcessInstances': rootProcessInstances,
                'finished': finished,
                'unfinished': unfinished,
                'withIncidents': withIncidents,
                'withRootIncidents': withRootIncidents,
                'incidentType': incidentType,
                'incidentStatus': incidentStatus,
                'incidentMessage': incidentMessage,
                'incidentMessageLike': incidentMessageLike,
                'startedBefore': startedBefore,
                'startedAfter': startedAfter,
                'finishedBefore': finishedBefore,
                'finishedAfter': finishedAfter,
                'executedActivityAfter': executedActivityAfter,
                'executedActivityBefore': executedActivityBefore,
                'executedJobAfter': executedJobAfter,
                'executedJobBefore': executedJobBefore,
                'startedBy': startedBy,
                'superProcessInstanceId': superProcessInstanceId,
                'subProcessInstanceId': subProcessInstanceId,
                'superCaseInstanceId': superCaseInstanceId,
                'subCaseInstanceId': subCaseInstanceId,
                'caseInstanceId': caseInstanceId,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'executedActivityIdIn': executedActivityIdIn,
                'activeActivityIdIn': activeActivityIdIn,
                'active': active,
                'suspended': suspended,
                'completed': completed,
                'externallyTerminated': externallyTerminated,
                'internallyTerminated': internallyTerminated,
                'variables': variables,
                'variableNamesIgnoreCase': variableNamesIgnoreCase,
                'variableValuesIgnoreCase': variableValuesIgnoreCase,
            },
            errors: {
                400: `Bad Request
                Returned if some of the query parameters are invalid.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

    /**
     * Get List Count (POST)
     * Queries for the number of historic process instances that fulfill the given parameters.
     * This method takes the same message body as the [Get Process Instances (POST)](https://docs.camunda.org/manual/7.14/reference/rest/history/process-instance/get-process-instance-query/) method and
     * therefore it is slightly more powerful than the [Get Process Instance Count](https://docs.camunda.org/manual/7.14/reference/rest/history/process-instance/post-process-instance-query-count/) method.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static queryHistoricProcessInstancesCount({
        requestBody,
    }: {
        requestBody?: HistoricProcessInstanceQueryDto,
    }): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/history/process-instance/count',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request
                Returned if some of the query parameters are invalid.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

    /**
     * Delete Async (POST)
     * Delete multiple historic process instances asynchronously (batch).
     * At least `historicProcessInstanceIds` or `historicProcessInstanceQuery` has to be provided.
     * If both are provided then all instances matching query criterion and instances from the list will be deleted.
     * @returns BatchDto Request successful.
     * @throws ApiError
     */
    public static deleteHistoricProcessInstancesAsync({
        requestBody,
    }: {
        requestBody?: DeleteHistoricProcessInstancesDto,
    }): CancelablePromise<BatchDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/history/process-instance/delete',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the query parameters are invalid, i.e. neither historicProcessInstanceIds,
                nor historicProcessInstanceQuery is present. See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Duration Report
     * Retrieves a report about the duration of completed process instances, grouped by a period.
     * These reports include the maximum, minimum and average duration of all completed process instances which were started in a given period.
     *
     * **Note:** This only includes historic data.
     * @returns any Request successful. In case of an expected text/csv response to retrieve the result as a csv file.
     * @throws ApiError
     */
    public static getHistoricProcessInstanceDurationReport({
        reportType,
        periodUnit,
        processDefinitionIdIn,
        processDefinitionKeyIn,
        startedBefore,
        startedAfter,
    }: {
        /**
         * **Mandatory.** Specifies the type of the report to retrieve.
         * To retrieve a report about the duration of process instances, the value must be set to `duration`.
         */
        reportType: string,
        /**
         * **Mandatory.** Specifies the granularity of the report. Valid values are `month` and `quarter`.
         */
        periodUnit: 'month' | 'quarter',
        /**
         * Filter by process definition ids. Must be a comma-separated list of process definition ids.
         */
        processDefinitionIdIn?: string,
        /**
         * Filter by process definition keys. Must be a comma-separated list of process definition keys.
         */
        processDefinitionKeyIn?: string,
        /**
         * Restrict to instances that were started before the given date.
         * By [default](), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2016-01-23T14:42:45.000+0200`.
         */
        startedBefore?: string,
        /**
         * Restrict to instances that were started after the given date.
         * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2016-01-23T14:42:45.000+0200`.
         */
        startedAfter?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/process-instance/report',
            query: {
                'reportType': reportType,
                'periodUnit': periodUnit,
                'processDefinitionIdIn': processDefinitionIdIn,
                'processDefinitionKeyIn': processDefinitionKeyIn,
                'startedBefore': startedBefore,
                'startedAfter': startedAfter,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid or mandatory parameters are not supplied.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling) for the error response format.`,
                403: `If the authenticated user is unauthorized to read the history.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

    /**
     * Set Removal Time Async (POST)
     * Sets the removal time to multiple historic process instances asynchronously (batch).
     *
     * At least `historicProcessInstanceIds` or `historicProcessInstanceQuery` has to be provided.
     * If both are provided, all instances matching query criterion and instances from the list will be updated with a removal time.
     * @returns BatchDto Request successful.
     * @throws ApiError
     */
    public static setRemovalTimeAsync({
        requestBody,
    }: {
        requestBody?: SetRemovalTimeToHistoricProcessInstancesDto,
    }): CancelablePromise<BatchDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/history/process-instance/set-removal-time',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request
                Request was unsuccessfull due to a bad user request. This occurs if some of the query parameters are invalid,
                e. g. if neither \`historicProcessInstances\` nor \`historicProcessInstanceQuery\` is present or if no mode is specified.

                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

    /**
     * Delete
     * Deletes a process instance from the history by id.
     * @returns void
     * @throws ApiError
     */
    public static deleteHistoricProcessInstance({
        id,
        failIfNotExists,
    }: {
        /**
         * The id of the historic process instance to be deleted.
         */
        id: string,
        /**
         * If set to `false`, the request will still be successful if the process id is not found.
         */
        failIfNotExists?: boolean,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/history/process-instance/{id}',
            path: {
                'id': id,
            },
            query: {
                'failIfNotExists': failIfNotExists,
            },
            errors: {
                404: `Not found
                Historic process instance with given id does not exist.`,
            },
        });
    }

    /**
     * Get
     * Retrieves a historic process instance by id, according to the `HistoricProcessInstance` interface in the engine.
     * @returns HistoricProcessInstanceDto Request successful.
     * @throws ApiError
     */
    public static getHistoricProcessInstance({
        id,
    }: {
        /**
         * The id of the historic process instance to be retrieved.
         */
        id: string,
    }): CancelablePromise<HistoricProcessInstanceDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/process-instance/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found
                Historic process instance with given id does not exist.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

    /**
     * Delete Variable Instances
     * Deletes all variables of a process instance from the history by id.
     * @returns void
     * @throws ApiError
     */
    public static deleteHistoricVariableInstancesOfHistoricProcessInstance({
        id,
    }: {
        /**
         * The id of the process instance for which all historic variables are to be deleted.
         */
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/history/process-instance/{id}/variable-instances',
            path: {
                'id': id,
            },
            errors: {
                404: `Not found
                Historic process instance with given id does not exist.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#parse-exceptions) for the error response format.`,
            },
        });
    }

}
