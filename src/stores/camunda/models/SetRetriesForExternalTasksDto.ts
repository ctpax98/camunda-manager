/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExternalTaskQueryDto } from './ExternalTaskQueryDto';
import type { HistoricProcessInstanceQueryDto } from './HistoricProcessInstanceQueryDto';
import type { ProcessInstanceQueryDto } from './ProcessInstanceQueryDto';

export type SetRetriesForExternalTasksDto = {
    /**
     * The number of retries to set for the external task.  Must be >= 0. If this is 0, an incident is created
     * and the task cannot be fetched anymore unless the retries are increased again. Can not be null.
     */
    retries?: number | null;
    /**
     * The ids of the external tasks to set the number of retries for.
     */
    externalTaskIds?: Array<string>;
    /**
     * The ids of process instances containing the tasks to set the number of retries for.
     */
    processInstanceIds?: Array<string>;
    externalTaskQuery?: ExternalTaskQueryDto;
    processInstanceQuery?: ProcessInstanceQueryDto;
    historicProcessInstanceQuery?: HistoricProcessInstanceQueryDto;
};

