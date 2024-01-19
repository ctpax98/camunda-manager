/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityStatisticsResultDto } from '../models/ActivityStatisticsResultDto';
import type { BatchDto } from '../models/BatchDto';
import type { CountResultDto } from '../models/CountResultDto';
import type { FormDto } from '../models/FormDto';
import type { HistoryTimeToLiveDto } from '../models/HistoryTimeToLiveDto';
import type { ProcessDefinitionDiagramDto } from '../models/ProcessDefinitionDiagramDto';
import type { ProcessDefinitionDto } from '../models/ProcessDefinitionDto';
import type { ProcessDefinitionStatisticsResultDto } from '../models/ProcessDefinitionStatisticsResultDto';
import type { ProcessDefinitionSuspensionStateDto } from '../models/ProcessDefinitionSuspensionStateDto';
import type { ProcessInstanceDto } from '../models/ProcessInstanceDto';
import type { ProcessInstanceWithVariablesDto } from '../models/ProcessInstanceWithVariablesDto';
import type { RestartProcessInstanceDto } from '../models/RestartProcessInstanceDto';
import type { StartProcessInstanceDto } from '../models/StartProcessInstanceDto';
import type { StartProcessInstanceFormDto } from '../models/StartProcessInstanceFormDto';
import type { VariableValueDto } from '../models/VariableValueDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProcessDefinitionService {

    /**
     * Get List
     * Queries for process definitions that fulfill given parameters. Parameters may be the properties of
     * process definitions, such as the name, key or version. The size of the result set can be retrieved
     * by using the [Get Definition Count](https://docs.camunda.org/manual/7.14/reference/rest/process-definition/get-query-count/) method.
     * @returns ProcessDefinitionDto Request successful.
     * @throws ApiError
     */
    public static getProcessDefinitions({
        processDefinitionId,
        processDefinitionIdIn,
        name,
        nameLike,
        deploymentId,
        deployedAfter,
        deployedAt,
        key,
        keysIn,
        keyLike,
        category,
        categoryLike,
        version,
        latestVersion,
        resourceName,
        resourceNameLike,
        startableBy,
        active,
        suspended,
        incidentId,
        incidentType,
        incidentMessage,
        incidentMessageLike,
        tenantIdIn,
        withoutTenantId,
        includeProcessDefinitionsWithoutTenantId,
        versionTag,
        versionTagLike,
        withoutVersionTag,
        startableInTasklist,
        notStartableInTasklist,
        startablePermissionCheck,
        sortBy,
        sortOrder,
        firstResult,
        maxResults,
    }: {
        /**
         * Filter by process definition id.
         */
        processDefinitionId?: string,
        /**
         * Filter by a comma-separated list of process definition ids.
         */
        processDefinitionIdIn?: string,
        /**
         * Filter by process definition name.
         */
        name?: string,
        /**
         * Filter by process definition names that the parameter is a substring of.
         */
        nameLike?: string,
        /**
         * Filter by the deployment the id belongs to.
         */
        deploymentId?: string,
        /**
         * Filter by the deploy time of the deployment the process definition belongs to.
         * Only selects process definitions that have been deployed after (exclusive) a specific time.
         * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the
         * format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g.,
         * `2013-01-23T14:42:45.546+0200`.
         */
        deployedAfter?: string,
        /**
         * Filter by the deploy time of the deployment the process definition belongs to.
         * Only selects process definitions that have been deployed at a specific time (exact match).
         * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the
         * format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g.,
         * `2013-01-23T14:42:45.546+0200`.
         */
        deployedAt?: string,
        /**
         * Filter by process definition key, i.e., the id in the BPMN 2.0 XML. Exact match.
         */
        key?: string,
        /**
         * Filter by a comma-separated list of process definition keys.
         */
        keysIn?: string,
        /**
         * Filter by process definition keys that the parameter is a substring of.
         */
        keyLike?: string,
        /**
         * Filter by process definition category. Exact match.
         */
        category?: string,
        /**
         * Filter by process definition categories that the parameter is a substring of.
         */
        categoryLike?: string,
        /**
         * Filter by process definition version.
         */
        version?: number,
        /**
         * Only include those process definitions that are latest versions.
         * Value may only be `true`, as `false` is the default behavior.
         */
        latestVersion?: boolean,
        /**
         * Filter by the name of the process definition resource. Exact match.
         */
        resourceName?: string,
        /**
         * Filter by names of those process definition resources that the parameter is a substring of.
         */
        resourceNameLike?: string,
        /**
         * Filter by a user name who is allowed to start the process.
         */
        startableBy?: string,
        /**
         * Only include active process definitions.
         * Value may only be `true`, as `false` is the default behavior.
         */
        active?: boolean,
        /**
         * Only include suspended process definitions.
         * Value may only be `true`, as `false` is the default behavior.
         */
        suspended?: boolean,
        /**
         * Filter by the incident id.
         */
        incidentId?: string,
        /**
         * Filter by the incident type.
         * See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types)
         * for a list of incident types.
         */
        incidentType?: string,
        /**
         * Filter by the incident message. Exact match.
         */
        incidentMessage?: string,
        /**
         * Filter by the incident message that the parameter is a substring of.
         */
        incidentMessageLike?: string,
        /**
         * Filter by a comma-separated list of tenant ids.
         * A process definition must have one of the given tenant ids.
         */
        tenantIdIn?: string,
        /**
         * Only include process definitions which belong to no tenant.
         * Value may only be true, as false is the default behavior.
         */
        withoutTenantId?: boolean,
        /**
         * Include process definitions which belong to no tenant. Can be used in combination with `tenantIdIn`.
         * Value may only be `true`, as `false` is the default behavior.
         */
        includeProcessDefinitionsWithoutTenantId?: boolean,
        /**
         * Filter by the version tag.
         */
        versionTag?: string,
        /**
         * Filter by the version tag that the parameter is a substring of.
         */
        versionTagLike?: string,
        /**
         * Only include process definitions without a `versionTag`.
         */
        withoutVersionTag?: boolean,
        /**
         * Filter by process definitions which are startable in Tasklist..
         */
        startableInTasklist?: boolean,
        /**
         * Filter by process definitions which are not startable in Tasklist.
         */
        notStartableInTasklist?: boolean,
        /**
         * Filter by process definitions which the user is allowed to start in Tasklist.
         * If the user doesn't have these permissions the result will be empty list.
         * The permissions are:
         * * `CREATE` permission for all Process instances
         * * `CREATE_INSTANCE` and `READ` permission on Process definition level
         */
        startablePermissionCheck?: boolean,
        /**
         * Sort the results lexicographically by a given criterion.
         * Must be used in conjunction with the sortOrder parameter.
         */
        sortBy?: 'category' | 'key' | 'id' | 'name' | 'version' | 'deploymentId' | 'deployTime' | 'tenantId ' | 'versionTag',
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
    }): CancelablePromise<Array<ProcessDefinitionDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-definition',
            query: {
                'processDefinitionId': processDefinitionId,
                'processDefinitionIdIn': processDefinitionIdIn,
                'name': name,
                'nameLike': nameLike,
                'deploymentId': deploymentId,
                'deployedAfter': deployedAfter,
                'deployedAt': deployedAt,
                'key': key,
                'keysIn': keysIn,
                'keyLike': keyLike,
                'category': category,
                'categoryLike': categoryLike,
                'version': version,
                'latestVersion': latestVersion,
                'resourceName': resourceName,
                'resourceNameLike': resourceNameLike,
                'startableBy': startableBy,
                'active': active,
                'suspended': suspended,
                'incidentId': incidentId,
                'incidentType': incidentType,
                'incidentMessage': incidentMessage,
                'incidentMessageLike': incidentMessageLike,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'includeProcessDefinitionsWithoutTenantId': includeProcessDefinitionsWithoutTenantId,
                'versionTag': versionTag,
                'versionTagLike': versionTagLike,
                'withoutVersionTag': withoutVersionTag,
                'startableInTasklist': startableInTasklist,
                'notStartableInTasklist': notStartableInTasklist,
                'startablePermissionCheck': startablePermissionCheck,
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if a \`sortOrder\` parameter is supplied,
                but no \`sortBy\`. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get List Count
     * Requests the number of process definitions that fulfill the query criteria.
     * Takes the same filtering parameters as the [Get Definitions](https://docs.camunda.org/manual/7.14/reference/rest/process-definition/get-query/) method.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getProcessDefinitionsCount({
        processDefinitionId,
        processDefinitionIdIn,
        name,
        nameLike,
        deploymentId,
        deployedAfter,
        deployedAt,
        key,
        keysIn,
        keyLike,
        category,
        categoryLike,
        version,
        latestVersion,
        resourceName,
        resourceNameLike,
        startableBy,
        active,
        suspended,
        incidentId,
        incidentType,
        incidentMessage,
        incidentMessageLike,
        tenantIdIn,
        withoutTenantId,
        includeProcessDefinitionsWithoutTenantId,
        versionTag,
        versionTagLike,
        withoutVersionTag,
        startableInTasklist,
        notStartableInTasklist,
        startablePermissionCheck,
    }: {
        /**
         * Filter by process definition id.
         */
        processDefinitionId?: string,
        /**
         * Filter by a comma-separated list of process definition ids.
         */
        processDefinitionIdIn?: string,
        /**
         * Filter by process definition name.
         */
        name?: string,
        /**
         * Filter by process definition names that the parameter is a substring of.
         */
        nameLike?: string,
        /**
         * Filter by the deployment the id belongs to.
         */
        deploymentId?: string,
        /**
         * Filter by the deploy time of the deployment the process definition belongs to.
         * Only selects process definitions that have been deployed after (exclusive) a specific time.
         * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the
         * format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g.,
         * `2013-01-23T14:42:45.546+0200`.
         */
        deployedAfter?: string,
        /**
         * Filter by the deploy time of the deployment the process definition belongs to.
         * Only selects process definitions that have been deployed at a specific time (exact match).
         * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the
         * format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g.,
         * `2013-01-23T14:42:45.546+0200`.
         */
        deployedAt?: string,
        /**
         * Filter by process definition key, i.e., the id in the BPMN 2.0 XML. Exact match.
         */
        key?: string,
        /**
         * Filter by a comma-separated list of process definition keys.
         */
        keysIn?: string,
        /**
         * Filter by process definition keys that the parameter is a substring of.
         */
        keyLike?: string,
        /**
         * Filter by process definition category. Exact match.
         */
        category?: string,
        /**
         * Filter by process definition categories that the parameter is a substring of.
         */
        categoryLike?: string,
        /**
         * Filter by process definition version.
         */
        version?: number,
        /**
         * Only include those process definitions that are latest versions.
         * Value may only be `true`, as `false` is the default behavior.
         */
        latestVersion?: boolean,
        /**
         * Filter by the name of the process definition resource. Exact match.
         */
        resourceName?: string,
        /**
         * Filter by names of those process definition resources that the parameter is a substring of.
         */
        resourceNameLike?: string,
        /**
         * Filter by a user name who is allowed to start the process.
         */
        startableBy?: string,
        /**
         * Only include active process definitions.
         * Value may only be `true`, as `false` is the default behavior.
         */
        active?: boolean,
        /**
         * Only include suspended process definitions.
         * Value may only be `true`, as `false` is the default behavior.
         */
        suspended?: boolean,
        /**
         * Filter by the incident id.
         */
        incidentId?: string,
        /**
         * Filter by the incident type.
         * See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types)
         * for a list of incident types.
         */
        incidentType?: string,
        /**
         * Filter by the incident message. Exact match.
         */
        incidentMessage?: string,
        /**
         * Filter by the incident message that the parameter is a substring of.
         */
        incidentMessageLike?: string,
        /**
         * Filter by a comma-separated list of tenant ids.
         * A process definition must have one of the given tenant ids.
         */
        tenantIdIn?: string,
        /**
         * Only include process definitions which belong to no tenant.
         * Value may only be true, as false is the default behavior.
         */
        withoutTenantId?: boolean,
        /**
         * Include process definitions which belong to no tenant. Can be used in combination with `tenantIdIn`.
         * Value may only be `true`, as `false` is the default behavior.
         */
        includeProcessDefinitionsWithoutTenantId?: boolean,
        /**
         * Filter by the version tag.
         */
        versionTag?: string,
        /**
         * Filter by the version tag that the parameter is a substring of.
         */
        versionTagLike?: string,
        /**
         * Only include process definitions without a `versionTag`.
         */
        withoutVersionTag?: boolean,
        /**
         * Filter by process definitions which are startable in Tasklist..
         */
        startableInTasklist?: boolean,
        /**
         * Filter by process definitions which are not startable in Tasklist.
         */
        notStartableInTasklist?: boolean,
        /**
         * Filter by process definitions which the user is allowed to start in Tasklist.
         * If the user doesn't have these permissions the result will be empty list.
         * The permissions are:
         * * `CREATE` permission for all Process instances
         * * `CREATE_INSTANCE` and `READ` permission on Process definition level
         */
        startablePermissionCheck?: boolean,
    }): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-definition/count',
            query: {
                'processDefinitionId': processDefinitionId,
                'processDefinitionIdIn': processDefinitionIdIn,
                'name': name,
                'nameLike': nameLike,
                'deploymentId': deploymentId,
                'deployedAfter': deployedAfter,
                'deployedAt': deployedAt,
                'key': key,
                'keysIn': keysIn,
                'keyLike': keyLike,
                'category': category,
                'categoryLike': categoryLike,
                'version': version,
                'latestVersion': latestVersion,
                'resourceName': resourceName,
                'resourceNameLike': resourceNameLike,
                'startableBy': startableBy,
                'active': active,
                'suspended': suspended,
                'incidentId': incidentId,
                'incidentType': incidentType,
                'incidentMessage': incidentMessage,
                'incidentMessageLike': incidentMessageLike,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'includeProcessDefinitionsWithoutTenantId': includeProcessDefinitionsWithoutTenantId,
                'versionTag': versionTag,
                'versionTagLike': versionTagLike,
                'withoutVersionTag': withoutVersionTag,
                'startableInTasklist': startableInTasklist,
                'notStartableInTasklist': notStartableInTasklist,
                'startablePermissionCheck': startablePermissionCheck,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid.
                See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Delete By Key
     * Deletes process definitions by a given key which belong to no tenant id.
     * @returns void
     * @throws ApiError
     */
    public static deleteProcessDefinitionsByKey({
        key,
        cascade,
        skipCustomListeners = false,
        skipIoMappings = false,
    }: {
        /**
         * The key of the process definitions to be deleted.
         */
        key: string,
        /**
         * `true`, if all process instances, historic process instances and jobs
         * for this process definition should be deleted.
         */
        cascade?: boolean,
        /**
         * `true`, if only the built-in ExecutionListeners should be notified with the end event.
         */
        skipCustomListeners?: boolean,
        /**
         * A boolean value to control whether input/output mappings should be executed during deletion.
         * `true`, if input/output mappings should not be invoked.
         */
        skipIoMappings?: boolean,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/process-definition/key/{key}',
            path: {
                'key': key,
            },
            query: {
                'cascade': cascade,
                'skipCustomListeners': skipCustomListeners,
                'skipIoMappings': skipIoMappings,
            },
            errors: {
                403: `Forbidden
                The process definitions with the given \`key\` cannot be deleted due to missing permissions.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Not found
                Process definition with given \`key\` does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get
     * Retrieves the latest version of the process definition which belongs to no tenant according to the `ProcessDefinition` interface in the engine.
     * @returns ProcessDefinitionDto Request successful.
     * @throws ApiError
     */
    public static getProcessDefinitionByKey({
        key,
    }: {
        /**
         * The key of the process definition (the latest version thereof) to be retrieved.
         */
        key: string,
    }): CancelablePromise<ProcessDefinitionDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-definition/key/{key}',
            path: {
                'key': key,
            },
            errors: {
                400: `Process definition with given \`key\` does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Deployed Start Form
     * Retrieves the deployed form that can be referenced from a start event.
     * For further information please refer to [User Guide](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#embedded-task-forms).
     * @returns binary Request successful.
     * @throws ApiError
     */
    public static getDeployedStartFormByKey({
        key,
    }: {
        /**
         * The key of the process definition (the latest version thereof) to be retrieved.
         */
        key: string,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-definition/key/{key}/deployed-start-form',
            path: {
                'key': key,
            },
            errors: {
                400: `The form key has wrong format.  See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                403: `The deployed start form cannot be retrieved due to missing permissions on process definition resource.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `No deployed start form for a given process definition exists. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Diagram
     * Retrieves the diagram for the latest version of the process definition which belongs to no tenant.
     *
     * If the process definition's deployment contains an image resource with the same file name
     * as the process definition, the deployed image will be returned by the Get Diagram endpoint.
     * Example: `someProcess.bpmn` and `someProcess.png`.
     * Supported file extentions for the image are: `svg`, `png`, `jpg`, and `gif`.
     * @returns binary Request successful. The image diagram of this process.
     * @throws ApiError
     */
    public static getProcessDefinitionDiagramByKey({
        key,
    }: {
        /**
         * The key of the process definition.
         */
        key: string,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-definition/key/{key}/diagram',
            path: {
                'key': key,
            },
            errors: {
                404: `Process definition with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Start Form Variables
     * Retrieves the start form variables for the latest process definition which belongs to no tenant
     * (only if they are defined via the
     * [Generated Task Form](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#generated-task-forms) approach).
     * The start form variables take form data specified on the start event into account.
     * If form fields are defined, the variable types and default values
     * of the form fields are taken into account.
     * @returns VariableValueDto Request successful. A JSON object containing a property for each variable returned.
     * @throws ApiError
     */
    public static getStartFormVariablesByKey({
        key,
        variableNames,
        deserializeValues = true,
    }: {
        /**
         * The key of the process definition (the latest version thereof) to be retrieved.
         */
        key: string,
        /**
         * A comma-separated list of variable names. Allows restricting the list of requested
         * variables to the variable names in the list. It is best practice to restrict the
         * list of variables to the variables actually required by the form in order to
         * minimize fetching of data. If the query parameter is ommitted all variables are
         * fetched. If the query parameter contains non-existent variable names, the variable
         * names are ignored.
         */
        variableNames?: string,
        /**
         * Determines whether serializable variable values (typically variables that store
         * custom Java objects) should be deserialized on server side (default true).
         *
         * If set to true, a serializable variable will be deserialized on server side and
         * transformed to JSON using [Jackson's](http://jackson.codehaus.org/) POJO/bean
         * property introspection feature. Note that this requires the Java classes of the
         * variable value to be on the REST API's classpath.
         *
         * If set to false, a serializable variable will be returned in its serialized format.
         * For example, a variable that is serialized as XML will be returned as a JSON string
         * containing XML.
         *
         * **Note**: While true is the default value for reasons of backward compatibility, we
         * recommend setting this parameter to false when developing web applications that are
         * independent of the Java process applications deployed to the engine.
         */
        deserializeValues?: boolean,
    }): CancelablePromise<Record<string, VariableValueDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-definition/key/{key}/form-variables',
            path: {
                'key': key,
            },
            query: {
                'variableNames': variableNames,
                'deserializeValues': deserializeValues,
            },
            errors: {
                404: `The key is null or does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Update History Time to Live
     * Updates history time to live for the latest version of the process definition which belongs to no tenant.
     * The field is used within [History cleanup](https://docs.camunda.org/manual/7.14/user-guide/process-engine/history/#history-cleanup).
     * @returns void
     * @throws ApiError
     */
    public static updateHistoryTimeToLiveByProcessDefinitionKey({
        key,
        requestBody,
    }: {
        /**
         * The key of the process definition to change history time to live.
         */
        key: string,
        requestBody?: HistoryTimeToLiveDto,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/process-definition/key/{key}/history-time-to-live',
            path: {
                'key': key,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the request parameters are invalid. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Process definition with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Rendered Start Form
     * Retrieves  the rendered form for the latest version of the process definition which belongs to no tenant.
     * This method can be used to get the HTML rendering of a
     * [Generated Task Form](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#generated-task-forms).
     * @returns binary Request successful.
     * @throws ApiError
     */
    public static getRenderedStartFormByKey({
        key,
    }: {
        /**
         * The key of the process definition (the latest version thereof) to be retrieved.
         */
        key: string,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-definition/key/{key}/rendered-form',
            path: {
                'key': key,
            },
            errors: {
                400: `Process definition has no form field metadata defined. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Process definition with given key does not exist.  See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Start Instance
     * Instantiates a given process definition, starts the latest version of the process definition
     * which belongs to no tenant.
     * Process variables and business key may be supplied in the request body.
     * @returns ProcessInstanceWithVariablesDto Request successful.
     * @throws ApiError
     */
    public static startProcessInstanceByKey({
        key,
        requestBody,
    }: {
        /**
         * The key of the process definition (the latest version thereof) to be retrieved.
         */
        key: string,
        requestBody?: StartProcessInstanceDto,
    }): CancelablePromise<ProcessInstanceWithVariablesDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/process-definition/key/{key}/start',
            path: {
                'key': key,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The instance could not be created due to an invalid variable value,
                for example if the value could not be parsed to an \`Integer\` value or
                the passed variable type is not supported.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                500: `The instance could not be created successfully.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Start Form Key
     * Retrieves the key of the start form for the latest version of the process definition
     * which belongs to no tenant.
     * The form key corresponds to the `FormData#formKey` property in the engine.
     * @returns FormDto Request successful.
     * @throws ApiError
     */
    public static getStartFormByKey({
        key,
    }: {
        /**
         * The key of the process definition (the latest version thereof) for which the form key is to be retrieved.
         */
        key: string,
    }): CancelablePromise<FormDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-definition/key/{key}/startForm',
            path: {
                'key': key,
            },
            errors: {
                400: `Process definition has no start form defined. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Process definition with given key does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Activity Instance Statistics
     * Retrieves runtime statistics of the latest version of the given process definition
     * which belongs to no tenant, grouped by activities.
     * These statistics include the number of running activity instances, optionally the number of failed jobs
     * and also optionally the number of incidents either grouped by incident types or
     * for a specific incident type.
     * **Note**: This does not include historic data.
     * @returns ActivityStatisticsResultDto Request successful.
     * @throws ApiError
     */
    public static getActivityStatisticsByProcessDefinitionKey({
        key,
        failedJobs,
        incidents,
        incidentsForType,
    }: {
        /**
         * The key of the process definition (the latest version thereof) to be retrieved.
         */
        key: string,
        /**
         * Whether to include the number of failed jobs in the result or not. Valid values are `true` or `false`.
         */
        failedJobs?: boolean,
        /**
         * Valid values for this property are `true` or `false`.
         * If this property has been set to `true` the result will include the corresponding number of incidents
         * for each occurred incident type.
         * If it is set to `false`, the incidents will not be included in the result.
         * Cannot be used in combination with `incidentsForType`.
         */
        incidents?: boolean,
        /**
         * If this property has been set with any incident type (i.e., a string value) the result
         * will only include the number of incidents for the assigned incident type.
         * Cannot be used in combination with `incidents`.
         * See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types)
         * for a list of incident types.
         */
        incidentsForType?: string,
    }): CancelablePromise<Array<ActivityStatisticsResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-definition/key/{key}/statistics',
            path: {
                'key': key,
            },
            query: {
                'failedJobs': failedJobs,
                'incidents': incidents,
                'incidentsForType': incidentsForType,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid.
                See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Process definition with given key does not exist.
                See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Submit Start Form
     * Starts the latest version of the process definition which belongs to no tenant
     * using a set of process variables and the business key.
     * If the start event has Form Field Metadata defined, the process engine will perform backend validation
     * for any form fields which have validators defined.
     * See [Documentation on Generated Task Forms](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#generated-task-forms).
     * @returns ProcessInstanceDto Request successful.
     * @throws ApiError
     */
    public static submitFormByKey({
        key,
        requestBody,
    }: {
        /**
         * The key of the process definition to submit the form for.
         */
        key: string,
        requestBody?: StartProcessInstanceFormDto,
    }): CancelablePromise<ProcessInstanceDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/process-definition/key/{key}/submit-form',
            path: {
                'key': key,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The instance could not be created due to an invalid variable value,
                for example if the value could not be parsed to an \`Integer\` value or
                the passed variable type is not supported.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Process definition with given key does not exist.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                500: `The instance could not be created successfully.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Activate/Suspend by Id
     * Activates or suspends a given process definition by latest version of process definition key
     * which belongs to no tenant.
     * @returns void
     * @throws ApiError
     */
    public static updateProcessDefinitionSuspensionStateByKey({
        key,
        requestBody,
    }: {
        /**
         * The key of the process definition (the latest version thereof) to be activated/suspended.
         */
        key: string,
        /**
         * **Note**: Unallowed properties are `processDefinitionId` and `processDefinitionKey`.
         */
        requestBody?: ProcessDefinitionSuspensionStateDto,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/process-definition/key/{key}/suspended',
            path: {
                'key': key,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the query parameters are invalid,
                for example if the provided \`executionDate\` parameter doesn't have the expected format or
                if the \`processDefinitionKey\` parameter is \`null\`. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Process definition with given key does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Delete By Key
     * Deletes process definitions by a given key and which belong to a tenant id.
     * @returns void
     * @throws ApiError
     */
    public static deleteProcessDefinitionsByKeyAndTenantId({
        key,
        tenantId,
        cascade,
        skipCustomListeners = false,
        skipIoMappings = false,
    }: {
        /**
         * The key of the process definitions to be deleted.
         */
        key: string,
        /**
         * The id of the tenant the process definitions belong to.
         */
        tenantId: string,
        /**
         * `true`, if all process instances, historic process instances and jobs
         * for this process definition should be deleted.
         */
        cascade?: boolean,
        /**
         * `true`, if only the built-in ExecutionListeners should be notified with the end event.
         */
        skipCustomListeners?: boolean,
        /**
         * A boolean value to control whether input/output mappings should be executed during deletion.
         * `true`, if input/output mappings should not be invoked.
         */
        skipIoMappings?: boolean,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/process-definition/key/{key}/tenant-id/{tenant-id}',
            path: {
                'key': key,
                'tenant-id': tenantId,
            },
            query: {
                'cascade': cascade,
                'skipCustomListeners': skipCustomListeners,
                'skipIoMappings': skipIoMappings,
            },
            errors: {
                403: `Forbidden
                The process definitions with the given \`key\` cannot be deleted due to missing permissions.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Not found
                Process definition with given key does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get
     * Retrieves the latest version of the process definition for tenant according to
     * the `ProcessDefinition` interface in the engine.
     * @returns ProcessDefinitionDto Request successful.
     * @throws ApiError
     */
    public static getLatestProcessDefinitionByTenantId({
        key,
        tenantId,
    }: {
        /**
         * The key of the process definition (the latest version thereof) to be retrieved.
         */
        key: string,
        /**
         * The id of the tenant the process definition belongs to.
         */
        tenantId: string,
    }): CancelablePromise<ProcessDefinitionDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-definition/key/{key}/tenant-id/{tenant-id}',
            path: {
                'key': key,
                'tenant-id': tenantId,
            },
            errors: {
                400: `Process definition with given \`key\` does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Deployed Start Form
     * Retrieves the deployed form that can be referenced from a start event.
     * For further information please refer to [User Guide](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#embedded-task-forms).
     * @returns binary Request successful.
     * @throws ApiError
     */
    public static getDeployedStartFormByKeyAndTenantId({
        key,
        tenantId,
    }: {
        /**
         * The key of the process definition (the latest version thereof) to be retrieved.
         */
        key: string,
        /**
         * The id of the tenant the process definitions belong to.
         */
        tenantId: string,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-definition/key/{key}/tenant-id/{tenant-id}/deployed-start-form',
            path: {
                'key': key,
                'tenant-id': tenantId,
            },
            errors: {
                400: `The form key has wrong format.  See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                403: `The deployed start form cannot be retrieved due to missing permissions on process definition resource.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `No deployed start form for a given process definition exists. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Diagram
     * Retrieves the diagram for the latest version of the process definition for tenant.
     *
     * If the process definition's deployment contains an image resource with the same file name
     * as the process definition, the deployed image will be returned by the Get Diagram endpoint.
     * Example: `someProcess.bpmn` and `someProcess.png`.
     * Supported file extentions for the image are: `svg`, `png`, `jpg`, and `gif`.
     * @returns binary Request successful. The image diagram of this process.
     * @throws ApiError
     */
    public static getProcessDefinitionDiagramByKeyAndTenantId({
        key,
        tenantId,
    }: {
        /**
         * The key of the process definition.
         */
        key: string,
        /**
         * The id of the tenant the process definition belongs to.
         */
        tenantId: string,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-definition/key/{key}/tenant-id/{tenant-id}/diagram',
            path: {
                'key': key,
                'tenant-id': tenantId,
            },
            errors: {
                404: `Process definition with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Start Form Variables
     * Retrieves the start form variables for the latest process definition for a tenant
     * (only if they are defined via the
     * [Generated Task Form](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#generated-task-forms) approach).
     * The start form variables take form data specified on the start event into account.
     * If form fields are defined, the variable types and default values
     * of the form fields are taken into account.
     * @returns VariableValueDto Request successful. A JSON object containing a property for each variable returned.
     * @throws ApiError
     */
    public static getStartFormVariablesByKeyAndTenantId({
        key,
        tenantId,
        variableNames,
        deserializeValues = true,
    }: {
        /**
         * The key of the process definition (the latest version thereof) to be retrieved.
         */
        key: string,
        /**
         * The id of the tenant the process definition belongs to.
         */
        tenantId: string,
        /**
         * A comma-separated list of variable names. Allows restricting the list of requested
         * variables to the variable names in the list. It is best practice to restrict the
         * list of variables to the variables actually required by the form in order to
         * minimize fetching of data. If the query parameter is ommitted all variables are
         * fetched. If the query parameter contains non-existent variable names, the variable
         * names are ignored.
         */
        variableNames?: string,
        /**
         * Determines whether serializable variable values (typically variables that store
         * custom Java objects) should be deserialized on server side (default true).
         *
         * If set to true, a serializable variable will be deserialized on server side and
         * transformed to JSON using [Jackson's](http://jackson.codehaus.org/) POJO/bean
         * property introspection feature. Note that this requires the Java classes of the
         * variable value to be on the REST API's classpath.
         *
         * If set to false, a serializable variable will be returned in its serialized format.
         * For example, a variable that is serialized as XML will be returned as a JSON string
         * containing XML.
         *
         * **Note**: While true is the default value for reasons of backward compatibility, we
         * recommend setting this parameter to false when developing web applications that are
         * independent of the Java process applications deployed to the engine.
         */
        deserializeValues?: boolean,
    }): CancelablePromise<Record<string, VariableValueDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-definition/key/{key}/tenant-id/{tenant-id}/form-variables',
            path: {
                'key': key,
                'tenant-id': tenantId,
            },
            query: {
                'variableNames': variableNames,
                'deserializeValues': deserializeValues,
            },
            errors: {
                404: `The key is null or does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Update History Time to Live
     * Updates history time to live for the latest version of the process definition for a tenant.
     * The field is used within [History cleanup](https://docs.camunda.org/manual/7.14/user-guide/process-engine/history/#history-cleanup).
     * @returns void
     * @throws ApiError
     */
    public static updateHistoryTimeToLiveByProcessDefinitionKeyAndTenantId({
        key,
        tenantId,
        requestBody,
    }: {
        /**
         * The key of the process definition to change history time to live.
         */
        key: string,
        /**
         * The id of the tenant the process definition belongs to.
         */
        tenantId: string,
        requestBody?: HistoryTimeToLiveDto,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/process-definition/key/{key}/tenant-id/{tenant-id}/history-time-to-live',
            path: {
                'key': key,
                'tenant-id': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the request parameters are invalid. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Process definition with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Rendered Start Form
     * Retrieves  the rendered form for the latest version of the process definition for a tenant.
     * This method can be used to get the HTML rendering of a
     * [Generated Task Form](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#generated-task-forms).
     * @returns binary Request successful.
     * @throws ApiError
     */
    public static getRenderedStartFormByKeyAndTenantId({
        key,
        tenantId,
    }: {
        /**
         * The key of the process definition (the latest version thereof) to be retrieved.
         */
        key: string,
        /**
         * The id of the tenant the process definition belongs to.
         */
        tenantId: string,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-definition/key/{key}/tenant-id/{tenant-id}/rendered-form',
            path: {
                'key': key,
                'tenant-id': tenantId,
            },
            errors: {
                400: `Process definition has no form field metadata defined. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Process definition with given key does not exist.  See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Start Instance
     * Instantiates a given process definition, starts the latest version of the process definition for tenant.
     * Process variables and business key may be supplied in the request body.
     * @returns ProcessInstanceWithVariablesDto Request successful.
     * @throws ApiError
     */
    public static startProcessInstanceByKeyAndTenantId({
        key,
        tenantId,
        requestBody,
    }: {
        /**
         * The key of the process definition (the latest version thereof) to be retrieved.
         */
        key: string,
        /**
         * The id of the tenant the process definition belongs to.
         */
        tenantId: string,
        requestBody?: StartProcessInstanceDto,
    }): CancelablePromise<ProcessInstanceWithVariablesDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/process-definition/key/{key}/tenant-id/{tenant-id}/start',
            path: {
                'key': key,
                'tenant-id': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The instance could not be created due to an invalid variable value,
                for example if the value could not be parsed to an \`Integer\` value or
                the passed variable type is not supported.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                500: `The instance could not be created successfully.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Start Form Key
     * Retrieves the key of the start form for the latest version of the process definition for a tenant.
     * The form key corresponds to the `FormData#formKey` property in the engine.
     * @returns FormDto Request successful.
     * @throws ApiError
     */
    public static getStartFormByKeyAndTenantId({
        key,
        tenantId,
    }: {
        /**
         * The key of the process definition (the latest version thereof) for which the form key is to be retrieved.
         */
        key: string,
        /**
         * The id of the tenant the process definition belongs to.
         */
        tenantId: string,
    }): CancelablePromise<FormDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-definition/key/{key}/tenant-id/{tenant-id}/startForm',
            path: {
                'key': key,
                'tenant-id': tenantId,
            },
            errors: {
                400: `Process definition has no start form defined. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Process definition with given key does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Activity Instance Statistics
     * Retrieves runtime statistics of the latest version of the given process definition for a tenant,
     * grouped by activities.
     * These statistics include the number of running activity instances, optionally the number of failed jobs
     * and also optionally the number of incidents either grouped by incident types or
     * for a specific incident type.
     * **Note**: This does not include historic data.
     * @returns ActivityStatisticsResultDto Request successful.
     * @throws ApiError
     */
    public static getActivityStatisticsByProcessDefinitionKeyAndTenantId({
        key,
        tenantId,
        failedJobs,
        incidents,
        incidentsForType,
    }: {
        /**
         * The key of the process definition (the latest version thereof) to be retrieved.
         */
        key: string,
        /**
         * The id of the tenant the process definition belongs to.
         */
        tenantId: string,
        /**
         * Whether to include the number of failed jobs in the result or not. Valid values are `true` or `false`.
         */
        failedJobs?: boolean,
        /**
         * Valid values for this property are `true` or `false`.
         * If this property has been set to `true` the result will include the corresponding number of incidents
         * for each occurred incident type.
         * If it is set to `false`, the incidents will not be included in the result.
         * Cannot be used in combination with `incidentsForType`.
         */
        incidents?: boolean,
        /**
         * If this property has been set with any incident type (i.e., a string value) the result
         * will only include the number of incidents for the assigned incident type.
         * Cannot be used in combination with `incidents`.
         * See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types)
         * for a list of incident types.
         */
        incidentsForType?: string,
    }): CancelablePromise<Array<ActivityStatisticsResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-definition/key/{key}/tenant-id/{tenant-id}/statistics',
            path: {
                'key': key,
                'tenant-id': tenantId,
            },
            query: {
                'failedJobs': failedJobs,
                'incidents': incidents,
                'incidentsForType': incidentsForType,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid.
                See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Process definition with given key does not exist.
                See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Submit Start Form
     * Starts the latest version of the process definition for a tenant
     * using a set of process variables and the business key.
     * If the start event has Form Field Metadata defined, the process engine will perform backend validation
     * for any form fields which have validators defined.
     * See [Documentation on Generated Task Forms](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#generated-task-forms).
     * @returns ProcessInstanceDto Request successful.
     * @throws ApiError
     */
    public static submitFormByKeyAndTenantId({
        key,
        tenantId,
        requestBody,
    }: {
        /**
         * The key of the process definition to submit the form for.
         */
        key: string,
        /**
         * The id of the tenant the process definition belongs to.
         */
        tenantId: string,
        requestBody?: StartProcessInstanceFormDto,
    }): CancelablePromise<ProcessInstanceDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/process-definition/key/{key}/tenant-id/{tenant-id}/submit-form',
            path: {
                'key': key,
                'tenant-id': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The instance could not be created due to an invalid variable value,
                for example if the value could not be parsed to an \`Integer\` value or
                the passed variable type is not supported.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Process definition with given key does not exist.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                500: `The instance could not be created successfully.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Activate/Suspend by Id
     * Activates or suspends a given process definition by the latest version of
     * the process definition for tenant.
     * @returns void
     * @throws ApiError
     */
    public static updateProcessDefinitionSuspensionStateByKeyAndTenantId({
        key,
        tenantId,
        requestBody,
    }: {
        /**
         * The key of the process definition (the latest version thereof) to be activated/suspended.
         */
        key: string,
        /**
         * The id of the tenant the process definition belongs to.
         */
        tenantId: string,
        /**
         * **Note**: Unallowed properties are `processDefinitionId` and `processDefinitionKey`.
         */
        requestBody?: ProcessDefinitionSuspensionStateDto,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/process-definition/key/{key}/tenant-id/{tenant-id}/suspended',
            path: {
                'key': key,
                'tenant-id': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the query parameters are invalid,
                for example if the provided \`executionDate\` parameter doesn't have the expected format or
                if the \`processDefinitionKey\` parameter is \`null\`. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Process definition with given key does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get XML
     * Retrieves latest version the BPMN 2.0 XML of a process definition.
     * Returns the XML for the latest version of the process definition for tenant.
     * @returns ProcessDefinitionDiagramDto Request successful.
     * @throws ApiError
     */
    public static getProcessDefinitionBpmn20XmlByKeyAndTenantId({
        key,
        tenantId,
    }: {
        /**
         * The key of the process definition (the latest version thereof) whose XML should be retrieved.
         */
        key: string,
        /**
         * The id of the tenant the process definition belongs to.
         */
        tenantId: string,
    }): CancelablePromise<ProcessDefinitionDiagramDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-definition/key/{key}/tenant-id/{tenant-id}/xml',
            path: {
                'key': key,
                'tenant-id': tenantId,
            },
            errors: {
                403: `The Process Definition xml cannot be retrieved due to missing permissions on the Process Definition resource.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Process definition with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get XML
     * Retrieves latest version the BPMN 2.0 XML of a process definition.
     * @returns ProcessDefinitionDiagramDto Request successful.
     * @throws ApiError
     */
    public static getProcessDefinitionBpmn20XmlByKey({
        key,
    }: {
        /**
         * The key of the process definition (the latest version thereof) whose XML should be retrieved.
         */
        key: string,
    }): CancelablePromise<ProcessDefinitionDiagramDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-definition/key/{key}/xml',
            path: {
                'key': key,
            },
            errors: {
                403: `The Process Definition xml cannot be retrieved due to missing permissions on the Process Definition resource.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Process definition with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Process Instance Statistics
     * Retrieves runtime statistics of the process engine, grouped by process definitions.
     * These statistics include the number of running process instances, optionally the number of failed jobs
     * and also optionally the number of incidents either grouped by incident types or
     * for a specific incident type.
     * **Note**: This does not include historic data.
     * @returns ProcessDefinitionStatisticsResultDto Request successful.
     * @throws ApiError
     */
    public static getProcessDefinitionStatistics({
        failedJobs,
        incidents,
        incidentsForType,
        rootIncidents,
    }: {
        /**
         * Whether to include the number of failed jobs in the result or not. Valid values are `true` or `false`.
         */
        failedJobs?: boolean,
        /**
         * Valid values for this property are `true` or `false`.
         * If this property has been set to `true` the result will include the corresponding number of incidents
         * for each occurred incident type.
         * If it is set to `false`, the incidents will not be included in the result.
         * Cannot be used in combination with `incidentsForType`.
         */
        incidents?: boolean,
        /**
         * If this property has been set with any incident type (i.e., a string value) the result
         * will only include the number of incidents for the assigned incident type.
         * Cannot be used in combination with `incidents`.
         * See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types)
         * for a list of incident types.
         */
        incidentsForType?: string,
        /**
         * Valid values for this property are `true` or `false`.
         * If this property has been set to `true` the result will include the corresponding number of
         * root incidents for each occurred incident type.
         * If it is set to `false`, the incidents will not be included in the result.
         * Cannot be used in combination with `incidentsForType` or `incidents`.
         */
        rootIncidents?: boolean,
    }): CancelablePromise<Array<ProcessDefinitionStatisticsResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-definition/statistics',
            query: {
                'failedJobs': failedJobs,
                'incidents': incidents,
                'incidentsForType': incidentsForType,
                'rootIncidents': rootIncidents,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid.
                See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Activate/Suspend By Key
     * Activates or suspends process definitions with the given process definition key.
     * @returns void
     * @throws ApiError
     */
    public static updateProcessDefinitionSuspensionState({
        requestBody,
    }: {
        /**
         * **Note**: Unallowed property is `processDefinitionId`.
         */
        requestBody?: ProcessDefinitionSuspensionStateDto,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/process-definition/suspended',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the query parameters are invalid,
                for example if the provided \`executionDate\` parameter doesn't have the expected format or
                if the \`processDefinitionKey\` parameter is \`null\`. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Process definition with given key does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Delete
     * Deletes a running process instance by id.
     * @returns void
     * @throws ApiError
     */
    public static deleteProcessDefinition({
        id,
        cascade,
        skipCustomListeners = false,
        skipIoMappings = false,
    }: {
        /**
         * The id of the process definition to be deleted.
         */
        id: string,
        /**
         * `true`, if all process instances, historic process instances and jobs
         * for this process definition should be deleted.
         */
        cascade?: boolean,
        /**
         * `true`, if only the built-in ExecutionListeners should be notified with the end event.
         */
        skipCustomListeners?: boolean,
        /**
         * A boolean value to control whether input/output mappings should be executed during deletion.
         * `true`, if input/output mappings should not be invoked.
         */
        skipIoMappings?: boolean,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/process-definition/{id}',
            path: {
                'id': id,
            },
            query: {
                'cascade': cascade,
                'skipCustomListeners': skipCustomListeners,
                'skipIoMappings': skipIoMappings,
            },
            errors: {
                404: `Not found
                Process definition with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get
     * Retrieves a process definition according to the `ProcessDefinition` interface in the engine.
     * @returns ProcessDefinitionDto Request successful.
     * @throws ApiError
     */
    public static getProcessDefinition({
        id,
    }: {
        /**
         * The id of the process definition to be retrieved.
         */
        id: string,
    }): CancelablePromise<ProcessDefinitionDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-definition/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Process definition with given \`id\` does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Deployed Start Form
     * Retrieves the deployed form that can be referenced from a start event.
     * For further information please refer to [User Guide](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#embedded-task-forms).
     * @returns binary Request successful.
     * @throws ApiError
     */
    public static getDeployedStartForm({
        id,
    }: {
        /**
         * The id of the process definition to get the deployed start form for.
         */
        id: string,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-definition/{id}/deployed-start-form',
            path: {
                'id': id,
            },
            errors: {
                400: `The form key has wrong format.  See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                403: `The deployed start form cannot be retrieved due to missing permissions on process definition resource.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `No deployed start form for a given process definition exists. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Diagram
     * Retrieves the diagram of a process definition.
     *
     * If the process definition's deployment contains an image resource with the same file name
     * as the process definition, the deployed image will be returned by the Get Diagram endpoint.
     * Example: `someProcess.bpmn` and `someProcess.png`.
     * Supported file extentions for the image are: `svg`, `png`, `jpg`, and `gif`.
     * @returns binary Request successful. The image diagram of this process.
     * @throws ApiError
     */
    public static getProcessDefinitionDiagram({
        id,
    }: {
        /**
         * The id of the process definition.
         */
        id: string,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-definition/{id}/diagram',
            path: {
                'id': id,
            },
            errors: {
                404: `Process definition with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Start Form Variables
     * Retrieves the start form variables for a process definition
     * (only if they are defined via the
     * [Generated Task Form](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#generated-task-forms) approach).
     * The start form variables take form data specified on the start event into account.
     * If form fields are defined, the variable types and default values
     * of the form fields are taken into account.
     * @returns VariableValueDto Request successful. A JSON object containing a property for each variable returned.
     * @throws ApiError
     */
    public static getStartFormVariables({
        id,
        variableNames,
        deserializeValues = true,
    }: {
        /**
         * The id of the process definition to retrieve the variables for.
         */
        id: string,
        /**
         * A comma-separated list of variable names. Allows restricting the list of requested
         * variables to the variable names in the list. It is best practice to restrict the
         * list of variables to the variables actually required by the form in order to
         * minimize fetching of data. If the query parameter is ommitted all variables are
         * fetched. If the query parameter contains non-existent variable names, the variable
         * names are ignored.
         */
        variableNames?: string,
        /**
         * Determines whether serializable variable values (typically variables that store
         * custom Java objects) should be deserialized on server side (default true).
         *
         * If set to true, a serializable variable will be deserialized on server side and
         * transformed to JSON using [Jackson's](http://jackson.codehaus.org/) POJO/bean
         * property introspection feature. Note that this requires the Java classes of the
         * variable value to be on the REST API's classpath.
         *
         * If set to false, a serializable variable will be returned in its serialized format.
         * For example, a variable that is serialized as XML will be returned as a JSON string
         * containing XML.
         *
         * **Note**: While true is the default value for reasons of backward compatibility, we
         * recommend setting this parameter to false when developing web applications that are
         * independent of the Java process applications deployed to the engine.
         */
        deserializeValues?: boolean,
    }): CancelablePromise<Record<string, VariableValueDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-definition/{id}/form-variables',
            path: {
                'id': id,
            },
            query: {
                'variableNames': variableNames,
                'deserializeValues': deserializeValues,
            },
            errors: {
                404: `The id is null or does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Update History Time to Live
     * Updates history time to live for process definition.
     * The field is used within [History cleanup](https://docs.camunda.org/manual/7.14/user-guide/process-engine/history/#history-cleanup).
     * @returns void
     * @throws ApiError
     */
    public static updateHistoryTimeToLiveByProcessDefinitionId({
        id,
        requestBody,
    }: {
        /**
         * The id of the process definition to change history time to live.
         */
        id: string,
        requestBody?: HistoryTimeToLiveDto,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/process-definition/{id}/history-time-to-live',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the request parameters are invalid. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Process definition with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Rendered Start Form
     * Retrieves the rendered form for a process definition.
     * This method can be used to get the HTML rendering of a
     * [Generated Task Form](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#generated-task-forms).
     * @returns binary Request successful.
     * @throws ApiError
     */
    public static getRenderedStartForm({
        id,
    }: {
        /**
         * The id of the process definition to get the rendered start form for.
         */
        id: string,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-definition/{id}/rendered-form',
            path: {
                'id': id,
            },
            errors: {
                400: `Process definition has no form field metadata defined. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Process definition with given id does not exist.  See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Restart Process Instance
     * Restarts process instances that were canceled or terminated synchronously.
     * Can also restart completed process instances.
     * It will create a new instance using the original instance information.
     * To execute the restart asynchronously, use the
     * [Restart Process Instance Async](https://docs.camunda.org/manual/7.14/reference/rest/process-definition/post-restart-process-instance-async/) method.
     *
     * For more information about the difference between synchronous and asynchronous execution,
     * please refer to the related section of the
     * [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/process-instance-restart/#execution).
     * @returns void
     * @throws ApiError
     */
    public static restartProcessInstance({
        id,
        requestBody,
    }: {
        /**
         * The id of the process definition of the process instances to restart.
         */
        id: string,
        requestBody?: RestartProcessInstanceDto,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/process-definition/{id}/restart',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `In case following parameters are missing: \`instructions\`, \`activityId\` or \`transitionId\`,
                \`processInstanceIds\` or \`historicProcessInstanceQuery\`, an exception of type \`InvalidRequestException\` is returned.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Process definition with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Restart Process Instance Async
     * Restarts process instances that were canceled or terminated asynchronously.
     * Can also restart completed process instances.
     * It will create a new instance using the original instance information.
     * To execute the restart asynchronously, use the
     * [Restart Process Instance](https://docs.camunda.org/manual/7.14/reference/rest/process-definition/post-restart-process-instance-sync/) method.
     *
     * For more information about the difference between synchronous and asynchronous execution,
     * please refer to the related section of the
     * [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/process-instance-restart/#execution).
     * @returns BatchDto Request successful.
     * @throws ApiError
     */
    public static restartProcessInstanceAsyncOperation({
        id,
        requestBody,
    }: {
        /**
         * The id of the process definition of the process instances to restart.
         */
        id: string,
        requestBody?: RestartProcessInstanceDto,
    }): CancelablePromise<BatchDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/process-definition/{id}/restart-async',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `In case following parameters are missing: \`instructions\`, \`activityId\` or \`transitionId\`,
                \`processInstanceIds\` or \`historicProcessInstanceQuery\`,
                an exception of type \`InvalidRequestException\` is returned.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Process definition with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Start Instance
     * Instantiates a given process definition.
     * Process variables and business key may be supplied in the request body.
     * @returns ProcessInstanceWithVariablesDto Request successful.
     * @throws ApiError
     */
    public static startProcessInstance({
        id,
        requestBody,
    }: {
        /**
         * The id of the process definition to be retrieved.
         */
        id: string,
        requestBody?: StartProcessInstanceDto,
    }): CancelablePromise<ProcessInstanceWithVariablesDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/process-definition/{id}/start',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The instance could not be created due to an invalid variable value,
                for example if the value could not be parsed to an \`Integer\` value or
                the passed variable type is not supported.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                500: `The instance could not be created successfully.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Start Form Key
     * Retrieves the key of the start form for a process definition.
     * The form key corresponds to the `FormData#formKey` property in the engine.
     * @returns FormDto Request successful.
     * @throws ApiError
     */
    public static getStartForm({
        id,
    }: {
        /**
         * The id of the process definition to get the start form key for.
         */
        id: string,
    }): CancelablePromise<FormDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-definition/{id}/startForm',
            path: {
                'id': id,
            },
            errors: {
                400: `Process definition has no start form defined. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Process definition with given id does not exist.  See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Activity Instance Statistics
     * Retrieves runtime statistics of a given process definition, grouped by activities.
     * These statistics include the number of running activity instances, optionally the number of failed jobs
     * and also optionally the number of incidents either grouped by incident types or for a specific incident type.
     * **Note**: This does not include historic data.
     * @returns ActivityStatisticsResultDto Request successful.
     * @throws ApiError
     */
    public static getActivityStatistics({
        id,
        failedJobs,
        incidents,
        incidentsForType,
    }: {
        /**
         * The id of the process definition.
         */
        id: string,
        /**
         * Whether to include the number of failed jobs in the result or not. Valid values are `true` or `false`.
         */
        failedJobs?: boolean,
        /**
         * Valid values for this property are `true` or `false`.
         * If this property has been set to `true` the result will include the corresponding number of incidents
         * for each occurred incident type.
         * If it is set to `false`, the incidents will not be included in the result.
         * Cannot be used in combination with `incidentsForType`.
         */
        incidents?: boolean,
        /**
         * If this property has been set with any incident type (i.e., a string value) the result
         * will only include the number of incidents for the assigned incident type.
         * Cannot be used in combination with `incidents`.
         * See the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/incidents/#incident-types)
         * for a list of incident types.
         */
        incidentsForType?: string,
    }): CancelablePromise<Array<ActivityStatisticsResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-definition/{id}/statistics',
            path: {
                'id': id,
            },
            query: {
                'failedJobs': failedJobs,
                'incidents': incidents,
                'incidentsForType': incidentsForType,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid.
                See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Process definition with given key does not exist.
                See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Submit Start Form
     * Starts a process instance using a set of process variables and the business key.
     * If the start event has Form Field Metadata defined, the process engine will perform backend validation
     * for any form fields which have validators defined.
     * See [Documentation on Generated Task Forms](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#generated-task-forms).
     * @returns ProcessInstanceDto Request successful.
     * @throws ApiError
     */
    public static submitForm({
        id,
        requestBody,
    }: {
        /**
         * The id of the process definition to submit the form for.
         */
        id: string,
        requestBody?: StartProcessInstanceFormDto,
    }): CancelablePromise<ProcessInstanceDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/process-definition/{id}/submit-form',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The instance could not be created due to an invalid variable value,
                for example if the value could not be parsed to an \`Integer\` value or
                the passed variable type is not supported.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Process definition with given id does not exist.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                500: `The instance could not be created successfully.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Activate/Suspend By Id
     * Activates or suspends a given process definition by id.
     * @returns void
     * @throws ApiError
     */
    public static updateProcessDefinitionSuspensionStateById({
        id,
        requestBody,
    }: {
        /**
         * The id of the process definition to activate or suspend.
         */
        id: string,
        /**
         * **Note**: Unallowed properties are `processDefinitionId` and `processDefinitionKey`.
         */
        requestBody?: ProcessDefinitionSuspensionStateDto,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/process-definition/{id}/suspended',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the query parameters are invalid,
                for example if the provided \`executionDate\` parameter doesn't have the expected format or
                if the \`processDefinitionKey\` parameter is \`null\`. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Process definition with given key does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get XML
     * Retrieves the BPMN 2.0 XML of a process definition.
     * @returns ProcessDefinitionDiagramDto Request successful.
     * @throws ApiError
     */
    public static getProcessDefinitionBpmn20Xml({
        id,
    }: {
        /**
         * The id of the process definition.
         */
        id: string,
    }): CancelablePromise<ProcessDefinitionDiagramDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/process-definition/{id}/xml',
            path: {
                'id': id,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid.
                See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                403: `The Process Definition xml cannot be retrieved due to missing permissions on the Process Definition resource.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Process definition with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

}
