/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VariableValueDto } from './VariableValueDto';

export type CorrelationMessageDto = {
    /**
     * The name of the message to deliver.
     */
    messageName?: string;
    /**
     * Used for correlation of process instances that wait for incoming messages.
     * Will only correlate to executions that belong to a process instance with the provided business key.
     */
    businessKey?: string;
    /**
     * Used to correlate the message for a tenant with the given id.
     * Will only correlate to executions and process definitions which belong to the tenant.
     * Must not be supplied in conjunction with a `withoutTenantId`.
     */
    tenantId?: string;
    /**
     * A Boolean value that indicates whether the message should only be correlated to executions
     * and process definitions which belong to no tenant or not. Value may only be `true`, as `false`
     * is the default behavior.
     * Must not be supplied in conjunction with a `tenantId`.
     */
    withoutTenantId?: boolean | null;
    /**
     * Used to correlate the message to the process instance with the given id.
     */
    processInstanceId?: string;
    /**
     * Used for correlation of process instances that wait for incoming messages.
     * Has to be a JSON object containing key-value pairs that are matched against process instance variables
     * during correlation. Each key is a variable name and each value a JSON variable value object with the
     * following properties.
     */
    correlationKeys?: Record<string, VariableValueDto>;
    /**
     * Local variables used for correlation of executions (process instances) that wait for incoming messages.
     * Has to be a JSON object containing key-value pairs that are matched against local variables during correlation.
     * Each key is a variable name and each value a JSON variable value object with the following properties.
     */
    localCorrelationKeys?: Record<string, VariableValueDto>;
    /**
     * A map of variables that is injected into the triggered execution or process instance after the message
     * has been delivered. Each key is a variable name and each value a JSON variable value object with
     * the following properties.
     */
    processVariables?: Record<string, VariableValueDto>;
    /**
     * A map of local variables that is injected into the triggered execution or process instance after the
     * message has been delivered. Each key is a variable name and each value a JSON variable value object
     * with the following properties.
     */
    processVariablesLocal?: Record<string, VariableValueDto>;
    /**
     * A Boolean value that indicates whether the message should be correlated to exactly one entity or multiple entities.
     * If the value is set to `false`, the message will be correlated to exactly one entity (execution or process definition).
     * If the value is set to `true`, the message will be correlated to multiple executions and a process definition that
     * can be instantiated by this message in one go.
     */
    all?: boolean | null;
    /**
     * A Boolean value that indicates whether the result of the correlation should be returned or not.
     * If this property is set to `true`, there will be returned a list of message correlation result objects. Depending on the
     * all property, there will be either one ore more returned results in the list.
     *
     * The default value is `false`, which means no result will be returned.
     */
    resultEnabled?: boolean | null;
    /**
     * A Boolean value that indicates whether the result of the correlation should contain process variables or not.
     * The parameter resultEnabled should be set to `true` in order to use this it.
     *
     * The default value is `false`, which means the variables will not be returned.
     */
    variablesInResultEnabled?: boolean | null;
};

