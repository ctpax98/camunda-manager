/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SignalDto } from '../models/SignalDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SignalService {

    /**
     * A signal is an event of global scope (broadcast semantics) and is delivered to all
     * active handlers. Internally this maps to the engine's signal event received builder
     * method `RuntimeService#createSignalEvent()`. For more information about the signal
     * behavior, see the [Signal Events](https://docs.camunda.org/manual/7.14/reference/bpmn20/events/signal-events/)
     * section of the [BPMN 2.0 Implementation Reference](https://docs.camunda.org/manual/7.14/reference/bpmn20/).
     * @returns void
     * @throws ApiError
     */
    public static throwSignal({
        requestBody,
    }: {
        requestBody?: SignalDto,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/signal',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if:

                 * no name was given
                 * the variable value or type is invalid, for example if the value could not be
                parsed to an integer value or the passed variable type is not supported
                 * a tenant id and an execution id is specified.

                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling) for the
                error response format.`,
                403: `Returned if the user is not allowed to throw a signal event.

                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling) for the
                error response format.`,
                500: `Returned if a single execution is specified and no such execution exists or has not
                subscribed to the signal.

                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling) for the
                error response format.`,
            },
        });
    }

}
