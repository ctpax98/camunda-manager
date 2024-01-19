/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LinkableDto } from './LinkableDto';

export type DeploymentDto = ({
    /**
     * The id of the deployment.
     */
    id?: string;
    /**
     * The tenant id of the deployment.
     */
    tenantId?: string;
    /**
     * The time when the deployment was created.
     */
    deploymentTime?: string;
    /**
     * The source of the deployment.
     */
    source?: string;
    /**
     * The name of the deployment.
     */
    name?: string;
} & LinkableDto);

