/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExceptionDto } from './ExceptionDto';
import type { ResourceReportDto } from './ResourceReportDto';

export type ParseExceptionDto = ({
    /**
     * A JSON Object containing list of errors and warnings occurred during deployment.
     */
    details?: Record<string, ResourceReportDto>;
} & ExceptionDto);

