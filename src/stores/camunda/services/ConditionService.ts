/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EvaluationConditionDto } from '../models/EvaluationConditionDto';
import type { ProcessInstanceDto } from '../models/ProcessInstanceDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ConditionService {

    /**
     * Triggers evaluation of conditions for conditional start event(s).
     * Internally this maps to the engines condition evaluation builder method ConditionEvaluationBuilder#evaluateStartConditions().
     * For more information see the [Conditional Start Events](https://docs.camunda.org/manual/7.14/reference/bpmn20/events/conditional-events/#conditional-start-event)
     * section of the [BPMN 2.0 Implementation Reference](https://docs.camunda.org/manual/7.14/reference/bpmn20/).
     * @returns ProcessInstanceDto Request successful.
     * @throws ApiError
     */
    public static evaluateCondition({
        requestBody,
    }: {
        requestBody?: EvaluationConditionDto,
    }): CancelablePromise<Array<ProcessInstanceDto>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/condition',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `If both tenantId and withoutTenantId are supplied.`,
                403: `If the user is not allowed to start the process instance of the process definition, which start condition was evaluated to \`true\`.`,
            },
        });
    }

}
