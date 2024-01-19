/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CorrelationMessageDto } from '../models/CorrelationMessageDto';
import type { MessageCorrelationResultWithVariableDto } from '../models/MessageCorrelationResultWithVariableDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MessageService {

    /**
     * Correlates a message to the process engine to either trigger a message start event or an intermediate message
     * catching event. Internally this maps to the engine's message correlation builder methods
     * `MessageCorrelationBuilder#correlateWithResult()` and `MessageCorrelationBuilder#correlateAllWithResult()`.
     * For more information about the correlation behavior, see the [Message Events](https://docs.camunda.org/manual/7.14/bpmn20/events/message-events/)
     * section of the [BPMN 2.0 Implementation Reference](https://docs.camunda.org/manual/7.14/reference/bpmn20/).
     * @returns MessageCorrelationResultWithVariableDto Request successful. The property `resultEnabled` in the request body was `true`.
     * The `variables` property is only returned, if the property variablesInResultEnable`
     * was set to `true` in the request.
     * @throws ApiError
     */
    public static deliverMessage({
        requestBody,
    }: {
        requestBody?: CorrelationMessageDto,
    }): CancelablePromise<Array<MessageCorrelationResultWithVariableDto>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/message',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if:
                 * no \`messageName\` was supplied
                 * both \`tenantId\` and \`withoutTenantId\` are supplied
                 * the message has not been correlated to exactly one entity (execution or process definition)
                 * the variable value or type is invalid, for example if the value could not be parsed to an Integer value or the passed variable type is not supported.

                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling) for the error response format.`,
            },
        });
    }

}
