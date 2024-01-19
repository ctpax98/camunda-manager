/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TelemetryConfigurationDto } from '../models/TelemetryConfigurationDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TelemetryService {

    /**
     * Fetch Telemetry Configuration
     * Fetches Telemetry Configuration.
     * @returns TelemetryConfigurationDto Request successful.
     * @throws ApiError
     */
    public static getTelemetryConfiguration(): CancelablePromise<TelemetryConfigurationDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/telemetry/configuration',
            errors: {
                401: `If the user who perform the operation is not a <b>camunda-admin</b> user.`,
            },
        });
    }

    /**
     * Configure Telemetry
     * Configures whether Camunda receives data collection of the process engine setup and usage.
     * @returns void
     * @throws ApiError
     */
    public static configureTelemetry({
        requestBody,
    }: {
        requestBody?: TelemetryConfigurationDto,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/telemetry/configuration',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `If the user who perform the operation is not a <b>camunda-admin</b> user.`,
            },
        });
    }

}
