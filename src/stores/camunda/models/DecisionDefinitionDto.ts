/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DecisionDefinitionDto = {
    /**
     * The id of the decision definition
     */
    id?: string;
    /**
     * The key of the decision definition, i.e., the id of the DMN 1.0 XML decision definition.
     */
    key?: string;
    /**
     * The category of the decision definition.
     */
    category?: string;
    /**
     * The name of the decision definition.
     */
    name?: string;
    /**
     * The version of the decision definition that the engine assigned to it.
     */
    version?: number;
    /**
     * The file name of the decision definition.
     */
    resource?: string;
    /**
     * The deployment id of the decision definition.
     */
    deploymentId?: string;
    /**
     * The tenant id of the decision definition.
     */
    tenantId?: string;
    /**
     * The id of the decision requirements definition this decision definition belongs to.
     */
    decisionRequirementsDefinitionId?: string;
    /**
     * The key of the decision requirements definition this decision definition belongs to.
     */
    decisionRequirementsDefinitionKey?: string;
    /**
     * History time to live value of the decision definition.
     * Is used within [History cleanup](https://docs.camunda.org/manual/7.14/user-guide/process-engine/history/#history-cleanup).
     */
    historyTimeToLive?: number | null;
    /**
     * The version tag of the decision definition.
     */
    versionTag?: string;
};

