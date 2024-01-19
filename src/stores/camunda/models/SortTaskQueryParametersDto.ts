/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Mandatory when `sortBy` is one of the following values: `processVariable`, `executionVariable`,
 * `taskVariable`, `caseExecutionVariable` or `caseInstanceVariable`. Must be a JSON object with the properties
 * `variable` and `type` where `variable` is a variable name and `type` is the name of a variable value type.
 */
export type SortTaskQueryParametersDto = {
    /**
     * The name of the variable to sort by.
     */
    variable?: string;
    /**
     * The name of the type of the variable value.
     */
    type?: string;
};

