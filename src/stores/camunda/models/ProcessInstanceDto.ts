/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LinkableDto } from './LinkableDto';

export type ProcessInstanceDto = ({
    /**
     * The id of the process instance.
     */
    id?: string;
    /**
     * The id of the process definition that this process instance belongs to.
     */
    definitionId?: string;
    /**
     * The business key of the process instance.
     */
    businessKey?: string;
    /**
     * The id of the case instance associated with the process instance.
     */
    caseInstanceId?: string;
    /**
     * A flag indicating whether the process instance has ended or not. Deprecated: will always be false!
     * @deprecated
     */
    ended?: boolean;
    /**
     * A flag indicating whether the process instance is suspended or not.
     */
    suspended?: boolean;
    /**
     * The tenant id of the process instance.
     */
    tenantId?: string;
} & LinkableDto);

