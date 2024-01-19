/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VariableValueDto } from './VariableValueDto';

export type TriggerVariableValueDto = ({
    /**
     * Indicates whether the variable should be a local variable or not.
     * If set to true, the variable becomes a local variable of the execution
     * entering the target activity.
     */
    local?: boolean | null;
} & VariableValueDto);

