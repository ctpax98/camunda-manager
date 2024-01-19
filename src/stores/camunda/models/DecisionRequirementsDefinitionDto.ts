/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DecisionRequirementsDefinitionDto = {
    /**
     * The id of the decision requirements definition
     */
    id?: string;
    /**
     * The key of the decision requirements definition, i.e., the id of the DMN 1.0 XML decision definition.
     */
    key?: string;
    /**
     * The name of the decision requirements definition.
     */
    name?: string;
    /**
     * The category of the decision requirements definition.
     */
    category?: string;
    /**
     * The version of the decision requirements definition that the engine assigned to it.
     */
    version?: number;
    /**
     * The file name of the decision requirements definition.
     */
    resource?: string;
    /**
     * The deployment id of the decision requirements definition.
     */
    deploymentId?: string;
    /**
     * The tenant id of the decisionrequirements definition.
     */
    tenantId?: string;
};

