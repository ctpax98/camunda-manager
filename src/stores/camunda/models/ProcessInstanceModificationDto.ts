/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProcessInstanceModificationInstructionDto } from './ProcessInstanceModificationInstructionDto';

export type ProcessInstanceModificationDto = {
    /**
     * Skip execution listener invocation for activities that are started or ended as part of this request.
     */
    skipCustomListeners?: boolean | null;
    /**
     * Skip execution of [input/output variable mappings](https://docs.camunda.org/manual/7.14/user-guide/process-engine/variables/#input-output-variable-mapping)
     * for activities that are started or ended as part of this request.
     */
    skipIoMappings?: boolean | null;
    /**
     * JSON array of modification instructions. The instructions are executed in the order they are in.
     */
    instructions?: Array<ProcessInstanceModificationInstructionDto>;
    /**
     * An arbitrary text annotation set by a user for auditing reasons.
     */
    annotation?: string;
};

