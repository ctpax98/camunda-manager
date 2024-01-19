/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExceptionDto } from './ExceptionDto';
import type { MissingAuthorizationDto } from './MissingAuthorizationDto';

export type AuthorizationExceptionDto = ({
    /**
     * The id of the user that does not have expected permissions
     */
    userId?: string;
    missingAuthorizations?: Array<MissingAuthorizationDto>;
} & ExceptionDto);

