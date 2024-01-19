/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MetricsIntervalResultDto = {
    /**
     * The interval timestamp.
     */
    timestamp?: string;
    /**
     * The name of the metric.
     */
    name?: string;
    /**
     * The reporter of the metric. `null` if the metrics are aggregated by reporter.
     */
    reporter?: string;
    /**
     * The value of the metric aggregated by the interval.
     */
    value?: number;
};

