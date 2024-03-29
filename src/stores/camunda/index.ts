/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export { ApiError } from './core/ApiError';
export { CancelablePromise, CancelError } from './core/CancelablePromise';
export { OpenAPI } from './core/OpenAPI';
export type { OpenAPIConfig } from './core/OpenAPI';

export type { AbstractSetRemovalTimeDto } from './models/AbstractSetRemovalTimeDto';
export type { ActivityInstanceDto } from './models/ActivityInstanceDto';
export type { ActivityInstanceIncidentDto } from './models/ActivityInstanceIncidentDto';
export type { ActivityStatisticsResultDto } from './models/ActivityStatisticsResultDto';
export type { AtomLink } from './models/AtomLink';
export type { AttachmentDto } from './models/AttachmentDto';
export type { AuthorizationExceptionDto } from './models/AuthorizationExceptionDto';
export type { BatchDto } from './models/BatchDto';
export type { CaseDefinitionDto } from './models/CaseDefinitionDto';
export type { CommentDto } from './models/CommentDto';
export type { CompleteExternalTaskDto } from './models/CompleteExternalTaskDto';
export type { CompleteTaskDto } from './models/CompleteTaskDto';
export type { CorrelationMessageDto } from './models/CorrelationMessageDto';
export type { CountResultDto } from './models/CountResultDto';
export type { DecisionDefinitionDto } from './models/DecisionDefinitionDto';
export type { DecisionRequirementsDefinitionDto } from './models/DecisionRequirementsDefinitionDto';
export type { DeleteHistoricProcessInstancesDto } from './models/DeleteHistoricProcessInstancesDto';
export type { DeleteProcessInstancesDto } from './models/DeleteProcessInstancesDto';
export type { DeploymentDto } from './models/DeploymentDto';
export type { DeploymentResourceDto } from './models/DeploymentResourceDto';
export type { DeploymentWithDefinitionsDto } from './models/DeploymentWithDefinitionsDto';
export type { DurationReportResultDto } from './models/DurationReportResultDto';
export type { EvaluationConditionDto } from './models/EvaluationConditionDto';
export type { EventSubscriptionDto } from './models/EventSubscriptionDto';
export type { EventSubscriptionQueryDto } from './models/EventSubscriptionQueryDto';
export type { ExceptionDto } from './models/ExceptionDto';
export type { ExecutionDto } from './models/ExecutionDto';
export type { ExtendLockOnExternalTaskDto } from './models/ExtendLockOnExternalTaskDto';
export type { ExternalTaskBpmnError } from './models/ExternalTaskBpmnError';
export type { ExternalTaskDto } from './models/ExternalTaskDto';
export type { ExternalTaskFailureDto } from './models/ExternalTaskFailureDto';
export type { ExternalTaskQueryDto } from './models/ExternalTaskQueryDto';
export type { FetchExternalTasksDto } from './models/FetchExternalTasksDto';
export type { FetchExternalTaskTopicDto } from './models/FetchExternalTaskTopicDto';
export type { FormDto } from './models/FormDto';
export type { HistoricActivityInstanceDto } from './models/HistoricActivityInstanceDto';
export type { HistoricActivityInstanceQueryDto } from './models/HistoricActivityInstanceQueryDto';
export type { HistoricProcessInstanceDto } from './models/HistoricProcessInstanceDto';
export type { HistoricProcessInstanceQueryDto } from './models/HistoricProcessInstanceQueryDto';
export type { HistoryTimeToLiveDto } from './models/HistoryTimeToLiveDto';
export type { IdentityLinkDto } from './models/IdentityLinkDto';
export type { IncidentDto } from './models/IncidentDto';
export type { IncidentStatisticsResultDto } from './models/IncidentStatisticsResultDto';
export type { LinkableDto } from './models/LinkableDto';
export type { LockedExternalTaskDto } from './models/LockedExternalTaskDto';
export type { MessageCorrelationResultWithVariableDto } from './models/MessageCorrelationResultWithVariableDto';
export type { MetricsIntervalResultDto } from './models/MetricsIntervalResultDto';
export type { MetricsResultDto } from './models/MetricsResultDto';
export type { MissingAuthorizationDto } from './models/MissingAuthorizationDto';
export type { MultiFormAttachmentDto } from './models/MultiFormAttachmentDto';
export type { MultiFormDeploymentDto } from './models/MultiFormDeploymentDto';
export type { MultiFormVariableBinaryDto } from './models/MultiFormVariableBinaryDto';
export type { ParseExceptionDto } from './models/ParseExceptionDto';
export type { PatchVariablesDto } from './models/PatchVariablesDto';
export type { PriorityDto } from './models/PriorityDto';
export type { ProblemDto } from './models/ProblemDto';
export type { ProcessDefinitionDiagramDto } from './models/ProcessDefinitionDiagramDto';
export type { ProcessDefinitionDto } from './models/ProcessDefinitionDto';
export type { ProcessDefinitionStatisticsResultDto } from './models/ProcessDefinitionStatisticsResultDto';
export type { ProcessDefinitionSuspensionStateDto } from './models/ProcessDefinitionSuspensionStateDto';
export type { ProcessEngineDto } from './models/ProcessEngineDto';
export type { ProcessInstanceDto } from './models/ProcessInstanceDto';
export type { ProcessInstanceModificationDto } from './models/ProcessInstanceModificationDto';
export type { ProcessInstanceModificationInstructionDto } from './models/ProcessInstanceModificationInstructionDto';
export type { ProcessInstanceQueryDto } from './models/ProcessInstanceQueryDto';
export type { ProcessInstanceSuspensionStateAsyncDto } from './models/ProcessInstanceSuspensionStateAsyncDto';
export type { ProcessInstanceSuspensionStateDto } from './models/ProcessInstanceSuspensionStateDto';
export type { ProcessInstanceWithVariablesDto } from './models/ProcessInstanceWithVariablesDto';
export type { RedeploymentDto } from './models/RedeploymentDto';
export type { ResourceOptionsDto } from './models/ResourceOptionsDto';
export type { ResourceReportDto } from './models/ResourceReportDto';
export type { RestartProcessInstanceDto } from './models/RestartProcessInstanceDto';
export type { RestartProcessInstanceModificationInstructionDto } from './models/RestartProcessInstanceModificationInstructionDto';
export type { RetriesDto } from './models/RetriesDto';
export type { SchemaLogEntryDto } from './models/SchemaLogEntryDto';
export type { SchemaLogQueryDto } from './models/SchemaLogQueryDto';
export type { SetJobRetriesByProcessDto } from './models/SetJobRetriesByProcessDto';
export type { SetRemovalTimeToHistoricProcessInstancesDto } from './models/SetRemovalTimeToHistoricProcessInstancesDto';
export type { SetRetriesForExternalTasksDto } from './models/SetRetriesForExternalTasksDto';
export type { SetVariablesAsyncDto } from './models/SetVariablesAsyncDto';
export type { SignalDto } from './models/SignalDto';
export type { SortTaskQueryParametersDto } from './models/SortTaskQueryParametersDto';
export type { StartProcessInstanceDto } from './models/StartProcessInstanceDto';
export type { StartProcessInstanceFormDto } from './models/StartProcessInstanceFormDto';
export type { SuspensionStateDto } from './models/SuspensionStateDto';
export type { TaskBpmnErrorDto } from './models/TaskBpmnErrorDto';
export type { TaskDto } from './models/TaskDto';
export type { TaskEscalationDto } from './models/TaskEscalationDto';
export type { TaskQueryDto } from './models/TaskQueryDto';
export type { TelemetryConfigurationDto } from './models/TelemetryConfigurationDto';
export type { TransitionInstanceDto } from './models/TransitionInstanceDto';
export type { TriggerVariableValueDto } from './models/TriggerVariableValueDto';
export type { UserCredentialsDto } from './models/UserCredentialsDto';
export type { UserDto } from './models/UserDto';
export type { UserIdDto } from './models/UserIdDto';
export type { UserProfileDto } from './models/UserProfileDto';
export type { VariableQueryParameterDto } from './models/VariableQueryParameterDto';
export type { VariableValueDto } from './models/VariableValueDto';
export type { VersionDto } from './models/VersionDto';

export { ConditionService } from './services/ConditionService';
export { DeploymentService } from './services/DeploymentService';
export { EngineService } from './services/EngineService';
export { EventSubscriptionService } from './services/EventSubscriptionService';
export { ExternalTaskService } from './services/ExternalTaskService';
export { HistoricActivityInstanceService } from './services/HistoricActivityInstanceService';
export { HistoricProcessInstanceService } from './services/HistoricProcessInstanceService';
export { IncidentService } from './services/IncidentService';
export { MessageService } from './services/MessageService';
export { MetricsService } from './services/MetricsService';
export { ProcessDefinitionService } from './services/ProcessDefinitionService';
export { ProcessInstanceService } from './services/ProcessInstanceService';
export { SchemaLogService } from './services/SchemaLogService';
export { SignalService } from './services/SignalService';
export { TaskService } from './services/TaskService';
export { TaskAttachmentService } from './services/TaskAttachmentService';
export { TaskCommentService } from './services/TaskCommentService';
export { TaskIdentityLinkService } from './services/TaskIdentityLinkService';
export { TaskLocalVariableService } from './services/TaskLocalVariableService';
export { TaskVariableService } from './services/TaskVariableService';
export { TelemetryService } from './services/TelemetryService';
export { UserService } from './services/UserService';
export { VersionService } from './services/VersionService';
