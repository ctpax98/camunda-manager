/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountResultDto } from '../models/CountResultDto';
import type { EventSubscriptionDto } from '../models/EventSubscriptionDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EventSubscriptionService {

    /**
     * Queries for event subscriptions that fulfill given parameters.
     * The size of the result set can be retrieved by using the
     * [Get Event Subscriptions count](https://docs.camunda.org/manual/7.14/reference/rest/event-subscription/get-query-count/) method.
     * @returns EventSubscriptionDto Request successful.
     * @throws ApiError
     */
    public static getEventSubscriptions({
        eventSubscriptionId,
        eventName,
        eventType,
        executionId,
        processInstanceId,
        activityId,
        tenantIdIn,
        withoutTenantId,
        includeEventSubscriptionsWithoutTenantId,
        sortBy,
        sortOrder,
        firstResult,
        maxResults,
    }: {
        /**
         * Only select subscription with the given id.
         */
        eventSubscriptionId?: string,
        /**
         * Only select subscriptions for events with the given name.
         */
        eventName?: string,
        /**
         * Only select subscriptions for events with the given type.
         * Valid values: `message`, `signal`, `compensate` and `conditional`.
         */
        eventType?: 'message' | 'signal' | 'compensate' | 'conditional',
        /**
         * Only select subscriptions that belong to an execution with the given id.
         */
        executionId?: string,
        /**
         * Only select subscriptions that belong to a process instance with the given id.
         */
        processInstanceId?: string,
        /**
         * Only select subscriptions that belong to an activity with the given id.
         */
        activityId?: string,
        /**
         * Filter by a comma-separated list of tenant ids.
         * Only select subscriptions that belong to one of the given tenant ids.
         */
        tenantIdIn?: string,
        /**
         * Only select subscriptions which have no tenant id.
         * Value may only be `true`, as `false` is the default behavior.
         */
        withoutTenantId?: boolean,
        /**
         * Select event subscriptions which have no tenant id.
         * Can be used in combination with tenantIdIn parameter.
         * Value may only be `true`, as `false` is the default behavior.
         */
        includeEventSubscriptionsWithoutTenantId?: boolean,
        /**
         * Sort the results lexicographically by a given criterion.
         * Must be used in conjunction with the sortOrder parameter.
         */
        sortBy?: 'created' | 'tenantId',
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
    }): CancelablePromise<Array<EventSubscriptionDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/event-subscription',
            query: {
                'eventSubscriptionId': eventSubscriptionId,
                'eventName': eventName,
                'eventType': eventType,
                'executionId': executionId,
                'processInstanceId': processInstanceId,
                'activityId': activityId,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'includeEventSubscriptionsWithoutTenantId': includeEventSubscriptionsWithoutTenantId,
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
            errors: {
                400: `Bad Request
                Returned if some of the query parameters are invalid,
                for example if a \`sortOrder\` parameter is supplied, but no \`sortBy\`.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Queries for the number of event subscriptions that fulfill given parameters.
     * Takes the same parameters as the
     * [Get Event Subscriptions](https://docs.camunda.org/manual/7.14/reference/rest/event-subscription/get-query/) method.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getEventSubscriptionsCount({
        eventSubscriptionId,
        eventName,
        eventType,
        executionId,
        processInstanceId,
        activityId,
        tenantIdIn,
        withoutTenantId,
        includeEventSubscriptionsWithoutTenantId,
    }: {
        /**
         * Only select subscription with the given id.
         */
        eventSubscriptionId?: string,
        /**
         * Only select subscriptions for events with the given name.
         */
        eventName?: string,
        /**
         * Only select subscriptions for events with the given type.
         * Valid values: `message`, `signal`, `compensate` and `conditional`.
         */
        eventType?: 'message' | 'signal' | 'compensate' | 'conditional',
        /**
         * Only select subscriptions that belong to an execution with the given id.
         */
        executionId?: string,
        /**
         * Only select subscriptions that belong to a process instance with the given id.
         */
        processInstanceId?: string,
        /**
         * Only select subscriptions that belong to an activity with the given id.
         */
        activityId?: string,
        /**
         * Filter by a comma-separated list of tenant ids.
         * Only select subscriptions that belong to one of the given tenant ids.
         */
        tenantIdIn?: string,
        /**
         * Only select subscriptions which have no tenant id.
         * Value may only be `true`, as `false` is the default behavior.
         */
        withoutTenantId?: boolean,
        /**
         * Select event subscriptions which have no tenant id.
         * Can be used in combination with tenantIdIn parameter.
         * Value may only be `true`, as `false` is the default behavior.
         */
        includeEventSubscriptionsWithoutTenantId?: boolean,
    }): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/event-subscription/count',
            query: {
                'eventSubscriptionId': eventSubscriptionId,
                'eventName': eventName,
                'eventType': eventType,
                'executionId': executionId,
                'processInstanceId': processInstanceId,
                'activityId': activityId,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'includeEventSubscriptionsWithoutTenantId': includeEventSubscriptionsWithoutTenantId,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

}
