/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HistoricProcessInstanceQueryDto } from './HistoricProcessInstanceQueryDto';
import type { ProcessInstanceQueryDto } from './ProcessInstanceQueryDto';

export type DeleteProcessInstancesDto = {
    /**
     * A list process instance ids to delete.
     */
    processInstanceIds?: Array<string>;
    /**
     * A string with delete reason.
     */
    deleteReason?: string;
    /**
     * Skip execution listener invocation for activities that are started or ended as part of this request.
     */
    skipCustomListeners?: boolean | null;
    /**
     * Skip deletion of the subprocesses related to deleted processes as part of this request.
     */
    skipSubprocesses?: boolean | null;
    processInstanceQuery?: ProcessInstanceQueryDto;
    historicProcessInstanceQuery?: HistoricProcessInstanceQueryDto;
};

