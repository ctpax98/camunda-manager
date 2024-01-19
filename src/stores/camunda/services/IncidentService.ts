/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountResultDto } from '../models/CountResultDto';
import type { IncidentDto } from '../models/IncidentDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class IncidentService {

    /**
     * Get List
     * Queries for incidents that fulfill given parameters. The size of the result set can be retrieved by using
     * the [Get Incident Count](https://docs.camunda.org/manual/7.14/reference/rest/incident/get-query-count/) method.
     * @returns IncidentDto Request successful.
     * @throws ApiError
     */
    public static getIncidents({
        incidentId,
        incidentType,
        incidentMessage,
        incidentMessageLike,
        processDefinitionId,
        processDefinitionKeyIn,
        processInstanceId,
        executionId,
        incidentTimestampBefore,
        incidentTimestampAfter,
        activityId,
        failedActivityId,
        causeIncidentId,
        rootCauseIncidentId,
        configuration,
        tenantIdIn,
        jobDefinitionIdIn,
        sortBy,
        sortOrder,
    }: {
        /**
         * Restricts to incidents that have the given id.
         */
        incidentId?: string,
        /**
         * Restricts to incidents that belong to the given incident type. See the
         * [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident
         * types.
         */
        incidentType?: string,
        /**
         * Restricts to incidents that have the given incident message.
         */
        incidentMessage?: string,
        /**
         * Restricts to incidents that incidents message is a substring of the given value. The string can include
         * the wildcard character '%' to express like-strategy: starts with (`string%`), ends with (`%string`) or
         * contains (`%string%`).
         */
        incidentMessageLike?: string,
        /**
         * Restricts to incidents that belong to a process definition with the given id.
         */
        processDefinitionId?: string,
        /**
         * Restricts to incidents that belong to a process definition with the given keys. Must be a
         * comma-separated list.
         */
        processDefinitionKeyIn?: string,
        /**
         * Restricts to incidents that belong to a process instance with the given id.
         */
        processInstanceId?: string,
        /**
         * Restricts to incidents that belong to an execution with the given id.
         */
        executionId?: string,
        /**
         * Restricts to incidents that have an incidentTimestamp date before the given date. By default, the date
         * must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
         */
        incidentTimestampBefore?: string,
        /**
         * Restricts to incidents that have an incidentTimestamp date after the given date. By default*, the date
         * must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
         */
        incidentTimestampAfter?: string,
        /**
         * Restricts to incidents that belong to an activity with the given id.
         */
        activityId?: string,
        /**
         * Restricts to incidents that were created due to the failure of an activity with the given id.
         */
        failedActivityId?: string,
        /**
         * Restricts to incidents that have the given incident id as cause incident.
         */
        causeIncidentId?: string,
        /**
         * Restricts to incidents that have the given incident id as root cause incident.
         */
        rootCauseIncidentId?: string,
        /**
         * Restricts to incidents that have the given parameter set as configuration.
         */
        configuration?: string,
        /**
         * Restricts to incidents that have one of the given comma-separated tenant ids.
         */
        tenantIdIn?: string,
        /**
         * Restricts to incidents that have one of the given comma-separated job definition ids.
         */
        jobDefinitionIdIn?: string,
        /**
         * Sort the results lexicographically by a given criterion.
         * Must be used in conjunction with the sortOrder parameter.
         */
        sortBy?: 'incidentId' | 'incidentMessage' | 'incidentTimestamp' | 'incidentType' | 'executionId' | 'activityId' | 'processInstanceId' | 'processDefinitionId' | 'causeIncidentId' | 'rootCauseIncidentId' | 'configuration' | 'tenantId',
        /**
         * Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
         * Must be used in conjunction with the sortBy parameter.
         */
        sortOrder?: 'asc' | 'desc',
    }): CancelablePromise<Array<IncidentDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/incident',
            query: {
                'incidentId': incidentId,
                'incidentType': incidentType,
                'incidentMessage': incidentMessage,
                'incidentMessageLike': incidentMessageLike,
                'processDefinitionId': processDefinitionId,
                'processDefinitionKeyIn': processDefinitionKeyIn,
                'processInstanceId': processInstanceId,
                'executionId': executionId,
                'incidentTimestampBefore': incidentTimestampBefore,
                'incidentTimestampAfter': incidentTimestampAfter,
                'activityId': activityId,
                'failedActivityId': failedActivityId,
                'causeIncidentId': causeIncidentId,
                'rootCauseIncidentId': rootCauseIncidentId,
                'configuration': configuration,
                'tenantIdIn': tenantIdIn,
                'jobDefinitionIdIn': jobDefinitionIdIn,
                'sortBy': sortBy,
                'sortOrder': sortOrder,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if a \`sortOrder\` parameter is supplied,
                but no \`sortBy\`. See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling) for the error
                response format.`,
            },
        });
    }

    /**
     * Get List Count
     * Queries for the number of incidents that fulfill given parameters. Takes the same parameters as the
     * [Get Incidents](https://docs.camunda.org/manual/7.14/reference/rest/incident/get-query/) method.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getIncidentsCount({
        incidentId,
        incidentType,
        incidentMessage,
        incidentMessageLike,
        processDefinitionId,
        processDefinitionKeyIn,
        processInstanceId,
        executionId,
        incidentTimestampBefore,
        incidentTimestampAfter,
        activityId,
        failedActivityId,
        causeIncidentId,
        rootCauseIncidentId,
        configuration,
        tenantIdIn,
        jobDefinitionIdIn,
    }: {
        /**
         * Restricts to incidents that have the given id.
         */
        incidentId?: string,
        /**
         * Restricts to incidents that belong to the given incident type. See the
         * [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident
         * types.
         */
        incidentType?: string,
        /**
         * Restricts to incidents that have the given incident message.
         */
        incidentMessage?: string,
        /**
         * Restricts to incidents that incidents message is a substring of the given value. The string can include
         * the wildcard character '%' to express like-strategy: starts with (`string%`), ends with (`%string`) or
         * contains (`%string%`).
         */
        incidentMessageLike?: string,
        /**
         * Restricts to incidents that belong to a process definition with the given id.
         */
        processDefinitionId?: string,
        /**
         * Restricts to incidents that belong to a process definition with the given keys. Must be a
         * comma-separated list.
         */
        processDefinitionKeyIn?: string,
        /**
         * Restricts to incidents that belong to a process instance with the given id.
         */
        processInstanceId?: string,
        /**
         * Restricts to incidents that belong to an execution with the given id.
         */
        executionId?: string,
        /**
         * Restricts to incidents that have an incidentTimestamp date before the given date. By default, the date
         * must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
         */
        incidentTimestampBefore?: string,
        /**
         * Restricts to incidents that have an incidentTimestamp date after the given date. By default*, the date
         * must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
         */
        incidentTimestampAfter?: string,
        /**
         * Restricts to incidents that belong to an activity with the given id.
         */
        activityId?: string,
        /**
         * Restricts to incidents that were created due to the failure of an activity with the given id.
         */
        failedActivityId?: string,
        /**
         * Restricts to incidents that have the given incident id as cause incident.
         */
        causeIncidentId?: string,
        /**
         * Restricts to incidents that have the given incident id as root cause incident.
         */
        rootCauseIncidentId?: string,
        /**
         * Restricts to incidents that have the given parameter set as configuration.
         */
        configuration?: string,
        /**
         * Restricts to incidents that have one of the given comma-separated tenant ids.
         */
        tenantIdIn?: string,
        /**
         * Restricts to incidents that have one of the given comma-separated job definition ids.
         */
        jobDefinitionIdIn?: string,
    }): CancelablePromise<Array<CountResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/incident/count',
            query: {
                'incidentId': incidentId,
                'incidentType': incidentType,
                'incidentMessage': incidentMessage,
                'incidentMessageLike': incidentMessageLike,
                'processDefinitionId': processDefinitionId,
                'processDefinitionKeyIn': processDefinitionKeyIn,
                'processInstanceId': processInstanceId,
                'executionId': executionId,
                'incidentTimestampBefore': incidentTimestampBefore,
                'incidentTimestampAfter': incidentTimestampAfter,
                'activityId': activityId,
                'failedActivityId': failedActivityId,
                'causeIncidentId': causeIncidentId,
                'rootCauseIncidentId': rootCauseIncidentId,
                'configuration': configuration,
                'tenantIdIn': tenantIdIn,
                'jobDefinitionIdIn': jobDefinitionIdIn,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid. See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling) for the error
                response format.`,
            },
        });
    }

    /**
     * Resolve Incident
     * Resolves an incident with given id.
     * @returns void
     * @throws ApiError
     */
    public static resolveIncident({
        id,
    }: {
        /**
         * The id of the incident to be resolved.
         */
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/incident/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Returned if an incident is not related to any execution or an incident is of type \`failedJob\` or
                \`failedExternalTask\`. To resolve such an incident, please refer to the
                [Incident Types](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) section.`,
                404: `Returned if an incident with given id does not exist.`,
            },
        });
    }

    /**
     * Get Incident
     * Retrieves an incident by ID.
     * @returns IncidentDto Request successful.
     * @throws ApiError
     */
    public static getIncident({
        id,
    }: {
        /**
         * The id of the incident to be retrieved.
         */
        id: string,
    }): CancelablePromise<IncidentDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/incident/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Returned if an incident with given id does not exist.`,
            },
        });
    }

}
