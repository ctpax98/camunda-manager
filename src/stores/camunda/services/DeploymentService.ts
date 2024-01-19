/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountResultDto } from '../models/CountResultDto';
import type { DeploymentDto } from '../models/DeploymentDto';
import type { DeploymentResourceDto } from '../models/DeploymentResourceDto';
import type { DeploymentWithDefinitionsDto } from '../models/DeploymentWithDefinitionsDto';
import type { MultiFormDeploymentDto } from '../models/MultiFormDeploymentDto';
import type { RedeploymentDto } from '../models/RedeploymentDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DeploymentService {

    /**
     * Queries for deployments that fulfill given parameters. Parameters may be the properties of deployments,
     * such as the id or name or a range of the deployment time. The size of the result set can be retrieved by
     * using the [Get Deployment count](https://docs.camunda.org/manual/7.14/reference/rest/deployment/get-query-count/) method.
     * @returns DeploymentDto Request successful.
     * @throws ApiError
     */
    public static getDeployments({
        id,
        name,
        nameLike,
        source,
        withoutSource = false,
        tenantIdIn,
        withoutTenantId = false,
        includeDeploymentsWithoutTenantId = false,
        after,
        before,
        sortBy,
        sortOrder,
        firstResult,
        maxResults,
    }: {
        /**
         * Filter by deployment id
         */
        id?: string,
        /**
         * Filter by the deployment name. Exact match.
         */
        name?: string,
        /**
         * Filter by the deployment name that the parameter is a substring of. The parameter can include the
         * wildcard `%` to express like-strategy such as: starts with (`%`name), ends with (name`%`) or contains
         * (`%`name`%`).
         */
        nameLike?: string,
        /**
         * Filter by the deployment source.
         */
        source?: string,
        /**
         * Filter by the deployment source whereby source is equal to `null`.
         */
        withoutSource?: boolean,
        /**
         * Filter by a comma-separated list of tenant ids. A deployment must have one of the given tenant ids.
         */
        tenantIdIn?: string,
        /**
         * Only include deployments which belong to no tenant. Value may only be `true`, as `false` is the default
         * behavior.
         */
        withoutTenantId?: boolean,
        /**
         * Include deployments which belong to no tenant. Can be used in combination with `tenantIdIn`. Value may
         * only be `true`, as `false` is the default behavior.
         */
        includeDeploymentsWithoutTenantId?: boolean,
        /**
         * Restricts to all deployments after the given date.
         * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format
         * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
         */
        after?: string,
        /**
         * Restricts to all deployments before the given date.
         * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format
         * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
         */
        before?: string,
        /**
         * Sort the results lexicographically by a given criterion.
         * Must be used in conjunction with the sortOrder parameter.
         */
        sortBy?: string,
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
    }): CancelablePromise<Array<DeploymentDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/deployment',
            query: {
                'id': id,
                'name': name,
                'nameLike': nameLike,
                'source': source,
                'withoutSource': withoutSource,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'includeDeploymentsWithoutTenantId': includeDeploymentsWithoutTenantId,
                'after': after,
                'before': before,
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if a \`sortOrder\` parameter is supplied,
                but no \`sortBy\`, or if an invalid operator for variable comparison is used. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Queries for the number of deployments that fulfill given parameters. Takes the same parameters as the
     * [Get Deployments](https://docs.camunda.org/manual/7.14/reference/rest/deployment/get-query/) method.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getDeploymentsCount({
        id,
        name,
        nameLike,
        source,
        withoutSource = false,
        tenantIdIn,
        withoutTenantId = false,
        includeDeploymentsWithoutTenantId = false,
        after,
        before,
    }: {
        /**
         * Filter by deployment id
         */
        id?: string,
        /**
         * Filter by the deployment name. Exact match.
         */
        name?: string,
        /**
         * Filter by the deployment name that the parameter is a substring of. The parameter can include the
         * wildcard `%` to express like-strategy such as: starts with (`%`name), ends with (name`%`) or contains
         * (`%`name`%`).
         */
        nameLike?: string,
        /**
         * Filter by the deployment source.
         */
        source?: string,
        /**
         * Filter by the deployment source whereby source is equal to `null`.
         */
        withoutSource?: boolean,
        /**
         * Filter by a comma-separated list of tenant ids. A deployment must have one of the given tenant ids.
         */
        tenantIdIn?: string,
        /**
         * Only include deployments which belong to no tenant. Value may only be `true`, as `false` is the default
         * behavior.
         */
        withoutTenantId?: boolean,
        /**
         * Include deployments which belong to no tenant. Can be used in combination with `tenantIdIn`. Value may
         * only be `true`, as `false` is the default behavior.
         */
        includeDeploymentsWithoutTenantId?: boolean,
        /**
         * Restricts to all deployments after the given date.
         * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format
         * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
         */
        after?: string,
        /**
         * Restricts to all deployments before the given date.
         * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the format
         * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.000+0200`.
         */
        before?: string,
    }): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/deployment/count',
            query: {
                'id': id,
                'name': name,
                'nameLike': nameLike,
                'source': source,
                'withoutSource': withoutSource,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'includeDeploymentsWithoutTenantId': includeDeploymentsWithoutTenantId,
                'after': after,
                'before': before,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid, for example, if an invalid operator for variable
                comparison is used. See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Creates a deployment.
     *
     * **Security Consideration**
     *
     * Deployments can contain custom code in form of scripts or EL expressions to customize process behavior.
     * This may be abused for remote execution of arbitrary code.
     * @returns DeploymentWithDefinitionsDto Request successful.
     * @throws ApiError
     */
    public static createDeployment({
        formData,
    }: {
        formData?: MultiFormDeploymentDto,
    }): CancelablePromise<DeploymentWithDefinitionsDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/deployment/create',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request. In case one of the bpmn resources cannot be parsed.

                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#parse-exceptions) for
                the error response format.`,
            },
        });
    }

    /**
     * Deletes a deployment by id.
     * @returns void
     * @throws ApiError
     */
    public static deleteDeployment({
        id,
        cascade = false,
        skipCustomListeners = false,
        skipIoMappings = false,
    }: {
        /**
         * The id of the deployment to be deleted.
         */
        id: string,
        /**
         * `true`, if all process instances, historic process instances and jobs for this deployment
         * should be deleted.
         */
        cascade?: boolean,
        /**
         * `true`, if only the built-in ExecutionListeners should be notified with the end event.
         */
        skipCustomListeners?: boolean,
        /**
         * `true`, if all input/output mappings should not be invoked.
         */
        skipIoMappings?: boolean,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/deployment/{id}',
            path: {
                'id': id,
            },
            query: {
                'cascade': cascade,
                'skipCustomListeners': skipCustomListeners,
                'skipIoMappings': skipIoMappings,
            },
            errors: {
                404: `A Deployment with the provided id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Retrieves a deployment by id, according to the `Deployment` interface of the engine.
     * @returns DeploymentDto Request successful.
     * @throws ApiError
     */
    public static getDeployment({
        id,
    }: {
        /**
         * The id of the deployment.
         */
        id: string,
    }): CancelablePromise<Array<DeploymentDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/deployment/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Deployment with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Re-deploys an existing deployment.
     *
     * The deployment resources to re-deploy can be restricted by using the properties `resourceIds` or
     * `resourceNames`. If no deployment resources to re-deploy are passed then all existing resources of the
     * given deployment are re-deployed.
     *
     * **Warning**: Deployments can contain custom code in form of scripts or EL expressions to customize
     * process behavior. This may be abused for remote execution of arbitrary code. See the section on
     * [security considerations for custom code](https://docs.camunda.org/manual/7.14/user-guide/process-engine/securing-custom-code/) in
     * the user guide for details.
     * @returns DeploymentWithDefinitionsDto Request successful.
     * @throws ApiError
     */
    public static redeploy({
        id,
        requestBody,
    }: {
        /**
         * The id of the deployment to re-deploy.
         */
        id: string,
        requestBody?: RedeploymentDto,
    }): CancelablePromise<DeploymentWithDefinitionsDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/deployment/{id}/redeploy',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Deployment or a deployment resource for the given deployment does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Retrieves all deployment resources of a given deployment.
     * @returns DeploymentResourceDto Request successful.
     * @throws ApiError
     */
    public static getDeploymentResources({
        id,
    }: {
        /**
         * The id of the deployment to retrieve the deployment resources for.
         */
        id: string,
    }): CancelablePromise<Array<DeploymentResourceDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/deployment/{id}/resources',
            path: {
                'id': id,
            },
            errors: {
                404: `Deployment resources for the given deployment do not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Retrieves a deployment resource by resource id for the given deployment.
     * @returns DeploymentResourceDto Request successful.
     * @throws ApiError
     */
    public static getDeploymentResource({
        id,
        resourceId,
    }: {
        /**
         * The id of the deployment
         */
        id: string,
        /**
         * The id of the deployment resource
         */
        resourceId: string,
    }): CancelablePromise<DeploymentResourceDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/deployment/{id}/resources/{resourceId}',
            path: {
                'id': id,
                'resourceId': resourceId,
            },
            errors: {
                404: `Deployment Resource with given resource id or deployment id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Retrieves the binary content of a deployment resource for the given deployment by id.
     * @returns binary Request successful. The media type of the response depends on the filename.
     * @throws ApiError
     */
    public static getDeploymentResourceData({
        id,
        resourceId,
    }: {
        /**
         * The id of the deployment.
         */
        id: string,
        /**
         * The id of the deployment resource.
         */
        resourceId: string,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/deployment/{id}/resources/{resourceId}/data',
            path: {
                'id': id,
                'resourceId': resourceId,
            },
            errors: {
                400: `Deployment Resource with given resource id or deployment id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

}
