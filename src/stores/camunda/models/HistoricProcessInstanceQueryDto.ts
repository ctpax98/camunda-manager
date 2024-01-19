/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VariableQueryParameterDto } from './VariableQueryParameterDto';

/**
 * A historic process instance query which defines a group of historic process instances
 */
export type HistoricProcessInstanceQueryDto = {
    /**
     * Filter by process instance id.
     */
    processInstanceId?: string;
    /**
     * Filter by process instance ids. Must be a JSON array of `Strings`.
     */
    processInstanceIds?: Array<string>;
    /**
     * Filter by the process definition the instances run on.
     */
    processDefinitionId?: string;
    /**
     * Filter by the key of the process definition the instances run on.
     */
    processDefinitionKey?: string;
    /**
     * Filter by a list of process definition keys. A process instance must have one of the given process definition keys. Must be a JSON array of `Strings`.
     */
    processDefinitionKeyIn?: Array<string>;
    /**
     * Filter by the name of the process definition the instances run on.
     */
    processDefinitionName?: string;
    /**
     * Filter by process definition names that the parameter is a substring of.
     */
    processDefinitionNameLike?: string;
    /**
     * Exclude instances that belong to a set of process definitions. Must be a JSON array of `Strings`.
     */
    processDefinitionKeyNotIn?: Array<string>;
    /**
     * Filter by process instance business key.
     */
    processInstanceBusinessKey?: string;
    /**
     * Filter by process instance business key that the parameter is a substring of.
     */
    processInstanceBusinessKeyLike?: string;
    /**
     * Restrict the query to all process instances that are top level process instances.
     */
    rootProcessInstances?: boolean | null;
    /**
     * Only include finished process instances. Value may only be `true`, as `false` is the default behavior.
     */
    finished?: boolean | null;
    /**
     * Only include unfinished process instances. Value may only be `true`, as `false` is the default behavior.
     */
    unfinished?: boolean | null;
    /**
     * Only include process instances which have an incident. Value may only be `true`, as `false` is the default behavior.
     */
    withIncidents?: boolean | null;
    /**
     * Only include process instances which have a root incident. Value may only be `true`, as `false` is the default behavior.
     */
    withRootIncidents?: boolean | null;
    /**
     * Filter by the incident type. See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types) for a list of incident types.
     */
    incidentType?: string;
    /**
     * Only include process instances which have an incident in status either open or resolved. To get all process instances, use the query parameter withIncidents.
     */
    incidentStatus?: 'open' | 'resolved';
    /**
     * Filter by the incident message. Exact match.
     */
    incidentMessage?: string;
    /**
     * Filter by the incident message that the parameter is a substring of.
     */
    incidentMessageLike?: string;
    /**
     * Restrict to instances that were started before the given date.
     * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     */
    startedBefore?: string | null;
    /**
     * Restrict to instances that were started after the given date.
     * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     */
    startedAfter?: string | null;
    /**
     * Restrict to instances that were finished before the given date.
     * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     */
    finishedBefore?: string | null;
    /**
     * Restrict to instances that were finished after the given date.
     * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     */
    finishedAfter?: string | null;
    /**
     * Restrict to instances that executed an activity after the given date (inclusive).
     * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     */
    executedActivityAfter?: string | null;
    /**
     * Restrict to instances that executed an activity before the given date (inclusive).
     * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     */
    executedActivityBefore?: string | null;
    /**
     * Restrict to instances that executed an job after the given date (inclusive).
     * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     */
    executedJobAfter?: string | null;
    /**
     * Restrict to instances that executed an job before the given date (inclusive).
     * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
     */
    executedJobBefore?: string | null;
    /**
     * Only include process instances that were started by the given user.
     */
    startedBy?: string;
    /**
     * Restrict query to all process instances that are sub process instances of the given process instance. Takes a process instance id.
     */
    superProcessInstanceId?: string;
    /**
     * Restrict query to one process instance that has a sub process instance with the given id.
     */
    subProcessInstanceId?: string;
    /**
     * Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id.
     */
    superCaseInstanceId?: string;
    /**
     * Restrict query to one process instance that has a sub case instance with the given id.
     */
    subCaseInstanceId?: string;
    /**
     * Restrict query to all process instances that are sub process instances of the given case instance. Takes a case instance id.
     */
    caseInstanceId?: string;
    /**
     * Filter by a list of tenant ids. A process instance must have one of the given tenant ids. Must be a JSON array of `Strings`
     */
    tenantIdIn?: Array<string>;
    /**
     * Only include historic process instances which belong to no tenant. Value may only be `true`, as `false` is the default behavior.
     */
    withoutTenantId?: boolean | null;
    /**
     * Restrict to instances that executed an activity with one of given ids. Must be a JSON array of `Strings`
     */
    executedActivityIdIn?: Array<string>;
    /**
     * Restrict to instances that have an active activity with one of given ids. Must be a JSON array of `Strings`
     */
    activeActivityIdIn?: Array<string>;
    /**
     * Restrict to instances that are active.
     */
    active?: boolean | null;
    /**
     * Restrict to instances that are suspended.
     */
    suspended?: boolean | null;
    /**
     * Restrict to instances that are completed.
     */
    completed?: boolean | null;
    /**
     * Restrict to instances that are externallyTerminated.
     */
    externallyTerminated?: boolean | null;
    /**
     * Restrict to instances that are internallyTerminated.
     */
    internallyTerminated?: boolean | null;
    /**
     * A JSON array to only include process instances that have/had variables with certain values.
     * The array consists of objects with the three properties `name`, `operator` and `value`. `name` (`String`) is the variable name,
     * `operator` (`String`) is the comparison operator to be used and `value` the variable value.
     *
     * Value may be `String`, `Number` or `Boolean`.
     *
     * Valid operator values are: `eq` - equal to; `neq` - not equal to; `gt` - greater than; `gteq` - greater than or equal to; `lt` - lower than; `lteq` - lower than or equal to; `like`.
     *
     */
    variables?: Array<VariableQueryParameterDto>;
    /**
     * Match all variable names provided in variables case-insensitively. If set to `true` variableName and variablename are treated as equal.
     */
    variableNamesIgnoreCase?: boolean | null;
    /**
     * Match all variable values provided in variables case-insensitively. If set to `true` variableValue and variablevalue are treated as equal.
     */
    variableValuesIgnoreCase?: boolean | null;
    /**
     * A JSON array of nested historic process instance queries with OR semantics.
     *
     * A process instance matches a nested query if it fulfills at least one of the query's predicates.
     *
     * With multiple nested queries, a process instance must fulfill at least one predicate of each query
     * ([Conjunctive Normal Form](https://en.wikipedia.org/wiki/Conjunctive_normal_form)).
     *
     * All process instance query properties can be used except for: `sorting`
     *
     * See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/process-engine-api/#or-queries) for more information about OR queries.
     */
    orQueries?: Array<HistoricProcessInstanceQueryDto>;
    /**
     * Apply sorting of the result
     */
    sorting?: Array<{
        /**
         * Sort the results lexicographically by a given criterion.
         * Must be used in conjunction with the sortOrder parameter.
         */
        sortBy?: 'instanceId' | 'definitionId' | 'definitionKey' | 'definitionName' | 'definitionVersion' | 'businessKey' | 'startTime' | 'endTime' | 'duration' | 'tenantId';
        /**
         * Sort the results in a given order. Values may be `asc` for ascending order or `desc` for
         * descending order. Must be used in conjunction with the sortBy parameter.
         */
        sortOrder?: 'asc' | 'desc';
    }>;
};

