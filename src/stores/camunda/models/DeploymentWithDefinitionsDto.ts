/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CaseDefinitionDto } from './CaseDefinitionDto';
import type { DecisionDefinitionDto } from './DecisionDefinitionDto';
import type { DecisionRequirementsDefinitionDto } from './DecisionRequirementsDefinitionDto';
import type { DeploymentDto } from './DeploymentDto';
import type { ProcessDefinitionDto } from './ProcessDefinitionDto';

export type DeploymentWithDefinitionsDto = ({
    /**
     * A JSON Object containing a property for each of the process definitions,
     * which are successfully deployed with that deployment.
     * The key is the process definition id, the value is a JSON Object corresponding to the process definition.
     */
    deployedProcessDefinitions?: Record<string, ProcessDefinitionDto>;
    /**
     * A JSON Object containing a property for each of the decision definitions,
     * which are successfully deployed with that deployment.
     * The key is the decision definition id, the value is a JSON Object corresponding to the decision definition.
     */
    deployedDecisionDefinitions?: Record<string, DecisionDefinitionDto>;
    /**
     * A JSON Object containing a property for each of the decision requirements definitions,
     * which are successfully deployed with that deployment.
     * The key is the decision requirements definition id, the value is a JSON Object corresponding to the decision requirements definition.
     */
    deployedDecisionRequirementsDefinitions?: Record<string, DecisionRequirementsDefinitionDto>;
    /**
     * A JSON Object containing a property for each of the case definitions,
     * which are successfully deployed with that deployment.
     * The key is the case definition id, the value is a JSON Object corresponding to the case definition.
     */
    deployedCaseDefinitions?: Record<string, CaseDefinitionDto>;
} & DeploymentDto);

