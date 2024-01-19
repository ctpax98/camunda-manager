/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HistoricProcessInstanceQueryDto } from './HistoricProcessInstanceQueryDto';
import type { ProcessInstanceQueryDto } from './ProcessInstanceQueryDto';
import type { VariableValueDto } from './VariableValueDto';

export type SetVariablesAsyncDto = {
    /**
     * A list of process instance ids that define a group of process instances
     * to which the operation will set variables.
     *
     * Please note that if `processInstanceIds`, `processInstanceQuery` and `historicProcessInstanceQuery`
     * are defined, the resulting operation will be performed on the union of these sets.
     */
    processInstanceIds?: Array<string>;
    processInstanceQuery?: ProcessInstanceQueryDto;
    historicProcessInstanceQuery?: HistoricProcessInstanceQueryDto;
    /**
     * A variables the operation will set in the root scope of the process instances.
     */
    variables?: Record<string, VariableValueDto>;
};

