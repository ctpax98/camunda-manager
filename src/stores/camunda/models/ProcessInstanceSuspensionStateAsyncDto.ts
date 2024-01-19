/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HistoricProcessInstanceQueryDto } from './HistoricProcessInstanceQueryDto';
import type { ProcessInstanceQueryDto } from './ProcessInstanceQueryDto';

export type ProcessInstanceSuspensionStateAsyncDto = {
    /**
     * A Boolean value which indicates whether to activate or suspend a given process instance.
     * When the value is set to true, the given process instance will be suspended and when the value is set to false,
     * the given process instance will be activated.
     */
    suspended?: boolean | null;
    /**
     * A list of process instance ids which defines a group of process instances
     * which will be activated or suspended by the operation.
     */
    processInstanceIds?: Array<string>;
    processInstanceQuery?: ProcessInstanceQueryDto;
    historicProcessInstanceQuery?: HistoricProcessInstanceQueryDto;
};

