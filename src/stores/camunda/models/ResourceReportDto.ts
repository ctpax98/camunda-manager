/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProblemDto } from './ProblemDto';

export type ResourceReportDto = {
    /**
     * A list of errors occurred during parsing.
     */
    errors?: Array<ProblemDto>;
    /**
     * A list of warnings occurred during parsing.
     */
    warnings?: Array<ProblemDto>;
};

