/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MetricsIntervalResultDto } from '../models/MetricsIntervalResultDto';
import type { MetricsResultDto } from '../models/MetricsResultDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MetricsService {

    /**
     * Retrieves a list of metrics, aggregated for a given interval.
     * @returns MetricsIntervalResultDto Request successful.
     * @throws ApiError
     */
    public static interval({
        name,
        reporter,
        startDate,
        endDate,
        firstResult,
        maxResults,
        interval = '900',
        aggregateByReporter,
    }: {
        /**
         * The name of the metric.
         */
        name?: 'activity-instance-start' | 'activity-instance-end' | 'job-acquisition-attempt' | 'job-acquired-success' | 'job-acquired-failure' | 'job-execution-rejected' | 'job-successful' | 'job-failed' | 'job-locked-exclusive' | 'executed-decision-elements' | 'history-cleanup-removed-process-instances' | 'history-cleanup-removed-case-instances' | 'history-cleanup-removed-decision-instances' | 'history-cleanup-removed-batch-operations',
        /**
         * The name of the reporter (host), on which the metrics was logged. This will have
         * value provided by the [hostname configuration property](https://docs.camunda.org/manual/7.14/reference/deployment-descriptors/tags/process-engine/#hostname).
         */
        reporter?: string,
        /**
         * The start date (inclusive).
         */
        startDate?: string,
        /**
         * The end date (exclusive).
         */
        endDate?: string,
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
         * The interval for which the metrics should be aggregated. Time unit is seconds.
         * Default: The interval is set to 15 minutes (900 seconds).
         */
        interval?: string,
        /**
         * Aggregate metrics by reporter.
         */
        aggregateByReporter?: string,
    }): CancelablePromise<Array<MetricsIntervalResultDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/metrics',
            query: {
                'name': name,
                'reporter': reporter,
                'startDate': startDate,
                'endDate': endDate,
                'firstResult': firstResult,
                'maxResults': maxResults,
                'interval': interval,
                'aggregateByReporter': aggregateByReporter,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid.`,
            },
        });
    }

    /**
     * Retrieves the `sum` (count) for a given metric.
     * @returns MetricsResultDto Request successful.
     * @throws ApiError
     */
    public static getMetrics({
        metricsName,
        startDate,
        endDate,
    }: {
        /**
         * The name of the metric.
         */
        metricsName: 'activity-instance-start' | 'activity-instance-end' | 'job-acquisition-attempt' | 'job-acquired-success' | 'job-acquired-failure' | 'job-execution-rejected' | 'job-successful' | 'job-failed' | 'job-locked-exclusive' | 'executed-decision-elements' | 'history-cleanup-removed-process-instances' | 'history-cleanup-removed-case-instances' | 'history-cleanup-removed-decision-instances' | 'history-cleanup-removed-batch-operations',
        /**
         * The start date (inclusive).
         */
        startDate?: string,
        /**
         * The end date (exclusive).
         */
        endDate?: string,
    }): CancelablePromise<MetricsResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/metrics/{metrics-name}/sum',
            path: {
                'metrics-name': metricsName,
            },
            query: {
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }

}
