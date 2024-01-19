/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProcessInstanceDto } from './ProcessInstanceDto';
import type { VariableValueDto } from './VariableValueDto';

export type ProcessInstanceWithVariablesDto = ({
    /**
     * The id of the process instance.
     */
    variables?: Record<string, VariableValueDto>;
} & ProcessInstanceDto);

