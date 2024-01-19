/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HistoricProcessInstanceQueryDto } from './HistoricProcessInstanceQueryDto';
import type { ProcessInstanceQueryDto } from './ProcessInstanceQueryDto';

export type SetJobRetriesByProcessDto = {
    /**
     * A list of process instance ids to fetch jobs, for which retries will be set.
     */
    processInstances?: Array<string>;
    /**
     * An integer representing the number of retries. Please note that the value cannot be negative or null.
     */
    retries?: number | null;
    processInstanceQuery?: ProcessInstanceQueryDto;
    historicProcessInstanceQuery?: HistoricProcessInstanceQueryDto;
};

