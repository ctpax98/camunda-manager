/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProblemDto = {
    /**
     * The message of the problem.
     */
    message?: string;
    /**
     * The line where the problem occurred.
     */
    line?: number | null;
    /**
     * The column where the problem occurred.
     */
    column?: number | null;
    /**
     * The main element id where the problem occurred.
     */
    mainElementId?: string;
    /**
     * A list of element id affected by the problem.
     */
    elementIds?: Array<string>;
};

