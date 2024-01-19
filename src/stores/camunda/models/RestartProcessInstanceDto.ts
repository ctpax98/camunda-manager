/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HistoricProcessInstanceQueryDto } from './HistoricProcessInstanceQueryDto';
import type { RestartProcessInstanceModificationInstructionDto } from './RestartProcessInstanceModificationInstructionDto';

export type RestartProcessInstanceDto = {
    /**
     * A list of process instance ids to restart.
     */
    processInstanceIds?: Array<string>;
    historicProcessInstanceQuery?: HistoricProcessInstanceQueryDto;
    /**
     * Skip execution listener invocation for activities that are started as part of this request.
     */
    skipCustomListeners?: boolean | null;
    /**
     * Skip execution of
     * [input/output variable mappings](https://docs.camunda.org/manual/7.14/user-guide/process-engine/variables/#input-output-variable-mapping)
     * for activities that are started as part of this request.
     */
    skipIoMappings?: boolean | null;
    /**
     * Set the initial set of variables during restart. By default, the last set of variables is used.
     */
    initialVariables?: boolean | null;
    /**
     * Do not take over the business key of the historic process instance.
     */
    withoutBusinessKey?: boolean | null;
    /**
     * **Optional**. A JSON array of instructions that specify which activities to start the process instance at.
     * If this property is omitted, the process instance starts at its default blank start event.
     */
    instructions?: Array<RestartProcessInstanceModificationInstructionDto>;
};

