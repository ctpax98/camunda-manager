/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VariableValueDto } from './VariableValueDto';

export type SignalDto = {
    /**
     * The name of the signal to deliver.
     *
     * **Note**: This property is mandatory.
     */
    name?: string;
    /**
     * Optionally specifies a single execution which is notified by the signal.
     *
     * **Note**: If no execution id is defined the signal is broadcasted to all subscribed
     * handlers.
     */
    executionId?: string;
    /**
     * A JSON object containing variable key-value pairs. Each key is a variable name and
     * each value a JSON variable value object.
     */
    variables?: Record<string, VariableValueDto>;
    /**
     * Specifies a tenant to deliver the signal. The signal can only be received on
     * executions or process definitions which belongs to the given tenant.
     *
     * **Note**: Cannot be used in combination with executionId.
     */
    tenantId?: string;
    /**
     * If true the signal can only be received on executions or process definitions which
     * belongs to no tenant. Value may not be false as this is the default behavior.
     *
     * **Note**: Cannot be used in combination with `executionId`.
     */
    withoutTenantId?: boolean | null;
};

