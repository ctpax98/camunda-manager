/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VariableValueDto } from './VariableValueDto';

export type PatchVariablesDto = {
    /**
     * A JSON object containing variable key-value pairs.
     */
    modifications?: Record<string, VariableValueDto>;
    /**
     * An array of String keys of variables to be deleted.
     */
    deletions?: Array<string>;
};

