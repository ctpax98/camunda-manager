/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VariableValueDto } from './VariableValueDto';

export type StartProcessInstanceFormDto = {
    variables?: Record<string, VariableValueDto>;
    /**
     * The business key the process instance is to be initialized with.
     * The business key uniquely identifies the process instance in the context of the given process definition.
     */
    businessKey?: string;
};

