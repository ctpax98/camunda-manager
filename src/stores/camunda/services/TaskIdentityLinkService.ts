/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityLinkDto } from '../models/IdentityLinkDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TaskIdentityLinkService {

    /**
     * Gets the identity links for a task by id, which are the users and groups that are in
     * *some* relation to it (including assignee and owner).
     * @returns IdentityLinkDto Request successful.
     * @throws ApiError
     */
    public static getIdentityLinks({
        id,
        type,
    }: {
        /**
         * The id of the task to retrieve the identity links for.
         */
        id: string,
        /**
         * Filter by the type of links to include.
         */
        type?: string,
    }): CancelablePromise<Array<IdentityLinkDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/task/{id}/identity-links',
            path: {
                'id': id,
            },
            query: {
                'type': type,
            },
            errors: {
                400: `Task with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

    /**
     * Adds an identity link to a task by id. Can be used to link any user or group to a task
     * and specify a relation.
     * @returns void
     * @throws ApiError
     */
    public static addIdentityLink({
        id,
        requestBody,
    }: {
        /**
         * The id of the task to add a link to.
         */
        id: string,
        requestBody?: IdentityLinkDto,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/task/{id}/identity-links',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Task with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

    /**
     * Removes an identity link from a task by id
     * @returns void
     * @throws ApiError
     */
    public static deleteIdentityLink({
        id,
        requestBody,
    }: {
        /**
         * The id of the task to remove a link from.
         */
        id: string,
        requestBody?: IdentityLinkDto,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/task/{id}/identity-links/delete',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Task with given id does not exist.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling) for
                the error response format.`,
            },
        });
    }

}
