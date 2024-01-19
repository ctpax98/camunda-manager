/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AbstractSetRemovalTimeDto } from './AbstractSetRemovalTimeDto';
import type { HistoricProcessInstanceQueryDto } from './HistoricProcessInstanceQueryDto';

export type SetRemovalTimeToHistoricProcessInstancesDto = ({
    /**
     * The id of the process instance.
     */
    historicProcessInstanceIds?: Array<string>;
    historicProcessInstanceQuery?: HistoricProcessInstanceQueryDto;
    /**
     * Sets the removal time to all historic process instances in the hierarchy.
     * Value may only be `true`, as `false` is the default behavior.
     */
    hierarchical?: boolean | null;
} & AbstractSetRemovalTimeDto);

