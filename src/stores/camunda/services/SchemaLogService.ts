/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SchemaLogEntryDto } from '../models/SchemaLogEntryDto';
import type { SchemaLogQueryDto } from '../models/SchemaLogQueryDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SchemaLogService {

    /**
     * Queries for schema log entries that fulfill given parameters.
     * @returns SchemaLogEntryDto Request successful.
     * **Note**: In order to get any results a user of group `camunda-admin` must
     * be authenticated.
     * @throws ApiError
     */
    public static getSchemaLog({
        version,
        firstResult,
        maxResults,
    }: {
        /**
         * Only return schema log entries with a specific version.
         */
        version?: string,
        /**
         * Pagination of results. Specifies the index of the first result to return.
         */
        firstResult?: number,
        /**
         * Pagination of results. Specifies the maximum number of results to return.
         * Will return less results if there are no more results left.
         */
        maxResults?: number,
    }): CancelablePromise<Array<SchemaLogEntryDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/schema/log',
            query: {
                'version': version,
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
        });
    }

    /**
     * Queries for schema log entries that fulfill given parameters.
     * @returns SchemaLogEntryDto Request successful.
     * **Note**: In order to get any results a user of group camunda-admin must be
     * authenticated.
     * @throws ApiError
     */
    public static querySchemaLog({
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
        requestBody?: SchemaLogQueryDto,
    }): CancelablePromise<Array<SchemaLogEntryDto>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/schema/log',
            query: {
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
