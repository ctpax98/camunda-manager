/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompleteTaskDto } from '../models/CompleteTaskDto';
import type { CountResultDto } from '../models/CountResultDto';
import type { FormDto } from '../models/FormDto';
import type { TaskBpmnErrorDto } from '../models/TaskBpmnErrorDto';
import type { TaskDto } from '../models/TaskDto';
import type { TaskEscalationDto } from '../models/TaskEscalationDto';
import type { TaskQueryDto } from '../models/TaskQueryDto';
import type { UserIdDto } from '../models/UserIdDto';
import type { VariableValueDto } from '../models/VariableValueDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TaskService {

    /**
     * Queries for tasks that fulfill a given filter. The size of the result set can be
     * retrieved by using the Get Task Count method.
     *
     * **Security Consideration:** There are several query parameters (such as
     * assigneeExpression) for specifying an EL expression. These are disabled by default to
     * prevent remote code execution. See the section on
     * [security considerations](https://docs.camunda.org/manual/7.14/user-guide/process-engine/securing-custom-code/)
     * for custom code in the user guide for details.
     * @returns TaskDto Request successful.
     * @throws ApiError
     */
    public static getTasks({
        processInstanceId,
        processInstanceIdIn,
        processInstanceBusinessKey,
        processInstanceBusinessKeyExpression,
        processInstanceBusinessKeyIn,
        processInstanceBusinessKeyLike,
        processInstanceBusinessKeyLikeExpression,
        processDefinitionId,
        processDefinitionKey,
        processDefinitionKeyIn,
        processDefinitionName,
        processDefinitionNameLike,
        executionId,
        caseInstanceId,
        caseInstanceBusinessKey,
        caseInstanceBusinessKeyLike,
        caseDefinitionId,
        caseDefinitionKey,
        caseDefinitionName,
        caseDefinitionNameLike,
        caseExecutionId,
        activityInstanceIdIn,
        tenantIdIn,
        withoutTenantId = false,
        assignee,
        assigneeExpression,
        assigneeLike,
        assigneeLikeExpression,
        assigneeIn,
        owner,
        ownerExpression,
        candidateGroup,
        candidateGroupExpression,
        candidateUser,
        candidateUserExpression,
        includeAssignedTasks = false,
        involvedUser,
        involvedUserExpression,
        assigned = false,
        unassigned = false,
        taskDefinitionKey,
        taskDefinitionKeyIn,
        taskDefinitionKeyLike,
        name,
        nameNotEqual,
        nameLike,
        nameNotLike,
        description,
        descriptionLike,
        priority,
        maxPriority,
        minPriority,
        dueDate,
        dueDateExpression,
        dueAfter,
        dueAfterExpression,
        dueBefore,
        dueBeforeExpression,
        followUpDate,
        followUpDateExpression,
        followUpAfter,
        followUpAfterExpression,
        followUpBefore,
        followUpBeforeExpression,
        followUpBeforeOrNotExistent,
        followUpBeforeOrNotExistentExpression,
        createdOn,
        createdOnExpression,
        createdAfter,
        createdAfterExpression,
        createdBefore,
        createdBeforeExpression,
        delegationState,
        candidateGroups,
        candidateGroupsExpression,
        withCandidateGroups = false,
        withoutCandidateGroups = false,
        withCandidateUsers = false,
        withoutCandidateUsers = false,
        active = false,
        suspended = false,
        taskVariables,
        processVariables,
        caseInstanceVariables,
        variableNamesIgnoreCase = false,
        variableValuesIgnoreCase = false,
        parentTaskId,
        sortBy,
        sortOrder,
        firstResult,
        maxResults,
    }: {
        /**
         * Restrict to tasks that belong to process instances with the given id.
         */
        processInstanceId?: string,
        /**
         * Restrict to tasks that belong to process instances with the given ids.
         */
        processInstanceIdIn?: string,
        /**
         * Restrict to tasks that belong to process instances with the given business key.
         */
        processInstanceBusinessKey?: string,
        /**
         * Restrict to tasks that belong to process instances with the given business key which
         * is described by an expression. See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions.
         */
        processInstanceBusinessKeyExpression?: string,
        /**
         * Restrict to tasks that belong to process instances with one of the give business keys.
         * The keys need to be in a comma-separated list.
         */
        processInstanceBusinessKeyIn?: string,
        /**
         * Restrict to tasks that have a process instance business key that has the parameter
         * value as a substring.
         */
        processInstanceBusinessKeyLike?: string,
        /**
         * Restrict to tasks that have a process instance business key that has the parameter
         * value as a substring and is described by an expression. See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions.
         */
        processInstanceBusinessKeyLikeExpression?: string,
        /**
         * Restrict to tasks that belong to a process definition with the given id.
         */
        processDefinitionId?: string,
        /**
         * Restrict to tasks that belong to a process definition with the given key.
         */
        processDefinitionKey?: string,
        /**
         * Restrict to tasks that belong to a process definition with one of the given keys. The
         * keys need to be in a comma-separated list.
         */
        processDefinitionKeyIn?: string,
        /**
         * Restrict to tasks that belong to a process definition with the given name.
         */
        processDefinitionName?: string,
        /**
         * Restrict to tasks that have a process definition name that has the parameter value as
         * a substring.
         */
        processDefinitionNameLike?: string,
        /**
         * Restrict to tasks that belong to an execution with the given id.
         */
        executionId?: string,
        /**
         * Restrict to tasks that belong to case instances with the given id.
         */
        caseInstanceId?: string,
        /**
         * Restrict to tasks that belong to case instances with the given business key.
         */
        caseInstanceBusinessKey?: string,
        /**
         * Restrict to tasks that have a case instance business key that has the parameter value
         * as a substring.
         */
        caseInstanceBusinessKeyLike?: string,
        /**
         * Restrict to tasks that belong to a case definition with the given id.
         */
        caseDefinitionId?: string,
        /**
         * Restrict to tasks that belong to a case definition with the given key.
         */
        caseDefinitionKey?: string,
        /**
         * Restrict to tasks that belong to a case definition with the given name.
         */
        caseDefinitionName?: string,
        /**
         * Restrict to tasks that have a case definition name that has the parameter value as a
         * substring.
         */
        caseDefinitionNameLike?: string,
        /**
         * Restrict to tasks that belong to a case execution with the given id.
         */
        caseExecutionId?: string,
        /**
         * Only include tasks which belong to one of the passed and comma-separated activity
         * instance ids.
         */
        activityInstanceIdIn?: string,
        /**
         * Only include tasks which belong to one of the passed and comma-separated
         * tenant ids.
         */
        tenantIdIn?: string,
        /**
         * Only include tasks which belong to no tenant. Value may only be `true`,
         * as `false` is the default behavior.
         */
        withoutTenantId?: boolean,
        /**
         * Restrict to tasks that the given user is assigned to.
         */
        assignee?: string,
        /**
         * Restrict to tasks that the user described by the given expression is assigned to.
         * See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions.
         */
        assigneeExpression?: string,
        /**
         * Restrict to tasks that have an assignee that has the parameter
         * value as a substring.
         */
        assigneeLike?: string,
        /**
         * Restrict to tasks that have an assignee that has the parameter value described by the
         * given expression as a substring. See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions.
         */
        assigneeLikeExpression?: string,
        /**
         * Only include tasks which are assigned to one of the passed and
         * comma-separated user ids.
         */
        assigneeIn?: string,
        /**
         * Restrict to tasks that the given user owns.
         */
        owner?: string,
        /**
         * Restrict to tasks that the user described by the given expression owns. See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions.
         */
        ownerExpression?: string,
        /**
         * Only include tasks that are offered to the given group.
         */
        candidateGroup?: string,
        /**
         * Only include tasks that are offered to the group described by the given expression.
         * See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions.
         */
        candidateGroupExpression?: string,
        /**
         * Only include tasks that are offered to the given user or to one of his groups.
         */
        candidateUser?: string,
        /**
         * Only include tasks that are offered to the user described by the given expression.
         * See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions.
         */
        candidateUserExpression?: string,
        /**
         * Also include tasks that are assigned to users in candidate queries. Default is to only
         * include tasks that are not assigned to any user if you query by candidate user or
         * group(s).
         */
        includeAssignedTasks?: boolean,
        /**
         * Only include tasks that the given user is involved in. A user is involved in a task if
         * an identity link exists between task and user (e.g., the user is the assignee).
         */
        involvedUser?: string,
        /**
         * Only include tasks that the user described by the given expression is involved in.
         * A user is involved in a task if an identity link exists between task and user
         * (e.g., the user is the assignee). See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions.
         */
        involvedUserExpression?: string,
        /**
         * If set to `true`, restricts the query to all tasks that are assigned.
         */
        assigned?: boolean,
        /**
         * If set to `true`, restricts the query to all tasks that are unassigned.
         */
        unassigned?: boolean,
        /**
         * Restrict to tasks that have the given key.
         */
        taskDefinitionKey?: string,
        /**
         * Restrict to tasks that have one of the given keys. The keys need to be in a
         * comma-separated list.
         */
        taskDefinitionKeyIn?: string,
        /**
         * Restrict to tasks that have a key that has the parameter value as a substring.
         */
        taskDefinitionKeyLike?: string,
        /**
         * Restrict to tasks that have the given name.
         */
        name?: string,
        /**
         * Restrict to tasks that do not have the given name.
         */
        nameNotEqual?: string,
        /**
         * Restrict to tasks that have a name with the given parameter value as substring.
         */
        nameLike?: string,
        /**
         * Restrict to tasks that do not have a name with the given parameter
         * value as substring.
         */
        nameNotLike?: string,
        /**
         * Restrict to tasks that have the given description.
         */
        description?: string,
        /**
         * Restrict to tasks that have a description that has the parameter
         * value as a substring.
         */
        descriptionLike?: string,
        /**
         * Restrict to tasks that have the given priority.
         */
        priority?: number,
        /**
         * Restrict to tasks that have a lower or equal priority.
         */
        maxPriority?: number,
        /**
         * Restrict to tasks that have a higher or equal priority.
         */
        minPriority?: number,
        /**
         * Restrict to tasks that are due on the given date. By
         * [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the
         * format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g.,
         * `2013-01-23T14:42:45.546+0200`.
         */
        dueDate?: string,
        /**
         * Restrict to tasks that are due on the date described by the given expression. See the
         * [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions. The expression must evaluate to a
         * `java.util.Date` or `org.joda.time.DateTime` object.
         */
        dueDateExpression?: string,
        /**
         * Restrict to tasks that are due after the given date. By
         * [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have
         * the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g.,
         * `2013-01-23T14:42:45.435+0200`.
         */
        dueAfter?: string,
        /**
         * Restrict to tasks that are due after the date described by the given expression.
         * See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions. The expression must evaluate to a
         * `java.util.Date` or `org.joda.time.DateTime` object.
         */
        dueAfterExpression?: string,
        /**
         * Restrict to tasks that are due before the given date. By
         * [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have
         * the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g.,
         * `2013-01-23T14:42:45.243+0200`.
         */
        dueBefore?: string,
        /**
         * Restrict to tasks that are due before the date described by the given expression.
         * See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions. The expression must evaluate to a
         * `java.util.Date` or `org.joda.time.DateTime` object.
         */
        dueBeforeExpression?: string,
        /**
         * Restrict to tasks that have a followUp date on the given date. By
         * [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date
         * must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g.,
         * `2013-01-23T14:42:45.342+0200`.
         */
        followUpDate?: string,
        /**
         * Restrict to tasks that have a followUp date on the date described by the given
         * expression. See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions. The expression must evaluate to a
         * `java.util.Date` or `org.joda.time.DateTime` object.
         */
        followUpDateExpression?: string,
        /**
         * Restrict to tasks that have a followUp date after the given date. By
         * [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the
         * date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g.,
         * `2013-01-23T14:42:45.542+0200`.
         */
        followUpAfter?: string,
        /**
         * Restrict to tasks that have a followUp date after the date described by the given
         * expression. See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions. The expression must evaluate to a
         * `java.util.Date` or `org.joda.time.DateTime` object.
         */
        followUpAfterExpression?: string,
        /**
         * Restrict to tasks that have a followUp date before the given date. By
         * [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the
         * date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g.,
         * `2013-01-23T14:42:45.234+0200`.
         */
        followUpBefore?: string,
        /**
         * Restrict to tasks that have a followUp date before the date described by the given
         * expression. See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions. The expression must evaluate to a
         * `java.util.Date` or `org.joda.time.DateTime` object.
         */
        followUpBeforeExpression?: string,
        /**
         * Restrict to tasks that have no followUp date or a followUp date before the given date.
         * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the
         * format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.432+0200`. The
         * typical use case is to query all `active` tasks for a user for a given date.
         */
        followUpBeforeOrNotExistent?: string,
        /**
         * Restrict to tasks that have no followUp date or a followUp date before the date
         * described by the given expression. See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions. The expression must evaluate to a
         * `java.util.Date` or `org.joda.time.DateTime` object.
         */
        followUpBeforeOrNotExistentExpression?: string,
        /**
         * Restrict to tasks that were created on the given date. By
         * [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have
         * the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.324+0200`.
         */
        createdOn?: string,
        /**
         * Restrict to tasks that were created on the date described by the given expression.
         * See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions. The expression must evaluate to a
         * `java.util.Date` or `org.joda.time.DateTime` object.
         */
        createdOnExpression?: string,
        /**
         * Restrict to tasks that were created after the given date. By
         * [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the
         * format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.342+0200`.
         */
        createdAfter?: string,
        /**
         * Restrict to tasks that were created after the date described by the given expression.
         * See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions. The expression must evaluate to a
         * `java.util.Date` or `org.joda.time.DateTime` object.
         */
        createdAfterExpression?: string,
        /**
         * Restrict to tasks that were created before the given date. By
         * [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the
         * format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.332+0200`.
         */
        createdBefore?: string,
        /**
         * Restrict to tasks that were created before the date described by the given expression.
         * See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions. The expression must evaluate to a
         * `java.util.Date` or `org.joda.time.DateTime` object.
         */
        createdBeforeExpression?: string,
        /**
         * Restrict to tasks that are in the given delegation state. Valid values are
         * `PENDING` and `RESOLVED`.
         */
        delegationState?: 'PENDING' | 'RESOLVED',
        /**
         * Restrict to tasks that are offered to any of the given candidate groups. Takes a
         * comma-separated list of group names, so for example `developers,support,sales`.
         */
        candidateGroups?: string,
        /**
         * Restrict to tasks that are offered to any of the candidate groups described by the
         * given expression. See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions. The expression must evaluate to
         * `java.util.List` of Strings.
         */
        candidateGroupsExpression?: string,
        /**
         * Only include tasks which have a candidate group. Value may only be `true`,
         * as `false` is the default behavior.
         */
        withCandidateGroups?: boolean,
        /**
         * Only include tasks which have no candidate group. Value may only be `true`,
         * as `false` is the default behavior.
         */
        withoutCandidateGroups?: boolean,
        /**
         * Only include tasks which have a candidate user. Value may only be `true`,
         * as `false` is the default behavior.
         */
        withCandidateUsers?: boolean,
        /**
         * Only include tasks which have no candidate users. Value may only be `true`,
         * as `false` is the default behavior.
         */
        withoutCandidateUsers?: boolean,
        /**
         * Only include active tasks. Value may only be `true`, as `false`
         * is the default behavior.
         */
        active?: boolean,
        /**
         * Only include suspended tasks. Value may only be `true`, as
         * `false` is the default behavior.
         */
        suspended?: boolean,
        /**
         * Only include tasks that have variables with certain values. Variable filtering
         * expressions are comma-separated and are structured as follows:
         *
         * A valid parameter value has the form `key_operator_value`. `key` is the variable name,
         * `operator` is the comparison operator to be used and `value` the variable value.
         *
         * **Note**: Values are always treated as String objects on server side.
         *
         * Valid `operator` values are:
         * `eq` - equal to;
         * `neq` - not equal to;
         * `gt` - greater than;
         * `gteq` - greater than or equal to;
         * `lt` - lower than;
         * `lteq` - lower than or equal to;
         * `like`.
         * `key` and `value` may not contain underscore or comma characters.
         */
        taskVariables?: string,
        /**
         * Only include tasks that belong to process instances that have variables with certain
         * values. Variable filtering expressions are comma-separated and are structured as
         * follows:
         *
         * A valid parameter value has the form `key_operator_value`. `key` is the variable name,
         * `operator` is the comparison operator to be used and `value` the variable value.
         *
         * **Note**: Values are always treated as String objects on server side.
         *
         * Valid `operator` values are:
         * `eq` - equal to;
         * `neq` - not equal to;
         * `gt` - greater than;
         * `gteq` - greater than or equal to;
         * `lt` - lower than;
         * `lteq` - lower than or equal to;
         * `like`.
         * `key` and `value` may not contain underscore or comma characters.
         */
        processVariables?: string,
        /**
         * Only include tasks that belong to case instances that have variables with certain
         * values. Variable filtering expressions are comma-separated and are structured as
         * follows:
         *
         * A valid parameter value has the form `key_operator_value`. `key` is the variable name,
         * `operator` is the comparison operator to be used and `value` the variable value.
         *
         * **Note**: Values are always treated as String objects on server side.
         *
         * Valid `operator` values are:
         * `eq` - equal to;
         * `neq` - not equal to;
         * `gt` - greater than;
         * `gteq` - greater than or equal to;
         * `lt` - lower than;
         * `lteq` - lower than or equal to;
         * `like`.
         * `key` and `value` may not contain underscore or comma characters.
         */
        caseInstanceVariables?: string,
        /**
         * Match all variable names in this query case-insensitively. If set
         * `variableName` and `variablename` are treated as equal.
         */
        variableNamesIgnoreCase?: boolean,
        /**
         * Match all variable values in this query case-insensitively. If set
         * `variableValue` and `variablevalue` are treated as equal.
         */
        variableValuesIgnoreCase?: boolean,
        /**
         * Restrict query to all tasks that are sub tasks of the given task. Takes a task id.
         */
        parentTaskId?: string,
        /**
         * Sort the results lexicographically by a given criterion.
         * Must be used in conjunction with the sortOrder parameter.
         */
        sortBy?: 'instanceId' | 'caseInstanceId' | 'dueDate' | 'executionId' | 'caseExecutionId' | 'assignee' | 'created' | 'description' | 'id' | 'name' | 'nameCaseInsensitive' | 'priority' | 'processVariable' | 'executionVariable' | 'taskVariable' | 'caseExecutionVariable' | 'caseInstanceVariable',
        /**
         * Sort the results in a given order. Values may be asc for ascending order or desc for descending order.
         * Must be used in conjunction with the sortBy parameter.
         */
        sortOrder?: 'asc' | 'desc',
        /**
         * Pagination of results. Specifies the index of the first result to return.
         */
        firstResult?: number,
        /**
         * Pagination of results. Specifies the maximum number of results to return.
         * Will return less results if there are no more results left.
         */
        maxResults?: number,
    }): CancelablePromise<Array<TaskDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/task',
            query: {
                'processInstanceId': processInstanceId,
                'processInstanceIdIn': processInstanceIdIn,
                'processInstanceBusinessKey': processInstanceBusinessKey,
                'processInstanceBusinessKeyExpression': processInstanceBusinessKeyExpression,
                'processInstanceBusinessKeyIn': processInstanceBusinessKeyIn,
                'processInstanceBusinessKeyLike': processInstanceBusinessKeyLike,
                'processInstanceBusinessKeyLikeExpression': processInstanceBusinessKeyLikeExpression,
                'processDefinitionId': processDefinitionId,
                'processDefinitionKey': processDefinitionKey,
                'processDefinitionKeyIn': processDefinitionKeyIn,
                'processDefinitionName': processDefinitionName,
                'processDefinitionNameLike': processDefinitionNameLike,
                'executionId': executionId,
                'caseInstanceId': caseInstanceId,
                'caseInstanceBusinessKey': caseInstanceBusinessKey,
                'caseInstanceBusinessKeyLike': caseInstanceBusinessKeyLike,
                'caseDefinitionId': caseDefinitionId,
                'caseDefinitionKey': caseDefinitionKey,
                'caseDefinitionName': caseDefinitionName,
                'caseDefinitionNameLike': caseDefinitionNameLike,
                'caseExecutionId': caseExecutionId,
                'activityInstanceIdIn': activityInstanceIdIn,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'assignee': assignee,
                'assigneeExpression': assigneeExpression,
                'assigneeLike': assigneeLike,
                'assigneeLikeExpression': assigneeLikeExpression,
                'assigneeIn': assigneeIn,
                'owner': owner,
                'ownerExpression': ownerExpression,
                'candidateGroup': candidateGroup,
                'candidateGroupExpression': candidateGroupExpression,
                'candidateUser': candidateUser,
                'candidateUserExpression': candidateUserExpression,
                'includeAssignedTasks': includeAssignedTasks,
                'involvedUser': involvedUser,
                'involvedUserExpression': involvedUserExpression,
                'assigned': assigned,
                'unassigned': unassigned,
                'taskDefinitionKey': taskDefinitionKey,
                'taskDefinitionKeyIn': taskDefinitionKeyIn,
                'taskDefinitionKeyLike': taskDefinitionKeyLike,
                'name': name,
                'nameNotEqual': nameNotEqual,
                'nameLike': nameLike,
                'nameNotLike': nameNotLike,
                'description': description,
                'descriptionLike': descriptionLike,
                'priority': priority,
                'maxPriority': maxPriority,
                'minPriority': minPriority,
                'dueDate': dueDate,
                'dueDateExpression': dueDateExpression,
                'dueAfter': dueAfter,
                'dueAfterExpression': dueAfterExpression,
                'dueBefore': dueBefore,
                'dueBeforeExpression': dueBeforeExpression,
                'followUpDate': followUpDate,
                'followUpDateExpression': followUpDateExpression,
                'followUpAfter': followUpAfter,
                'followUpAfterExpression': followUpAfterExpression,
                'followUpBefore': followUpBefore,
                'followUpBeforeExpression': followUpBeforeExpression,
                'followUpBeforeOrNotExistent': followUpBeforeOrNotExistent,
                'followUpBeforeOrNotExistentExpression': followUpBeforeOrNotExistentExpression,
                'createdOn': createdOn,
                'createdOnExpression': createdOnExpression,
                'createdAfter': createdAfter,
                'createdAfterExpression': createdAfterExpression,
                'createdBefore': createdBefore,
                'createdBeforeExpression': createdBeforeExpression,
                'delegationState': delegationState,
                'candidateGroups': candidateGroups,
                'candidateGroupsExpression': candidateGroupsExpression,
                'withCandidateGroups': withCandidateGroups,
                'withoutCandidateGroups': withoutCandidateGroups,
                'withCandidateUsers': withCandidateUsers,
                'withoutCandidateUsers': withoutCandidateUsers,
                'active': active,
                'suspended': suspended,
                'taskVariables': taskVariables,
                'processVariables': processVariables,
                'caseInstanceVariables': caseInstanceVariables,
                'variableNamesIgnoreCase': variableNamesIgnoreCase,
                'variableValuesIgnoreCase': variableValuesIgnoreCase,
                'parentTaskId': parentTaskId,
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if a \`sortOrder\`
                parameter is supplied, but no \`sortBy\`, or if an invalid operator for variable
                comparison is used. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Queries for tasks that fulfill a given filter. This method is slightly more powerful
     * than the [Get Tasks](https://docs.camunda.org/manual/7.14/reference/rest/task/get-query/) method because it
     * allows filtering by multiple process or task variables of types `String`, `Number`
     * or `Boolean`. The size of the result set can be retrieved by using the
     * [Get Task Count (POST)](https://docs.camunda.org/manual/7.14/reference/rest/task/post-query-count/) method.
     *
     * **Security Consideration**:
     * There are several parameters (such as `assigneeExpression`) for specifying an EL
     * expression. These are disabled by default to prevent remote code execution. See the
     * section on
     * [security considerations for custom code](https://docs.camunda.org/manual/7.14/user-guide/process-engine/securing-custom-code/)
     * in the user guide for details.
     * @returns TaskDto Request successful.
     * @throws ApiError
     */
    public static queryTasks({
        firstResult,
        maxResults,
        requestBody,
    }: {
        /**
         * Pagination of results. Specifies the index of the first result to return.
         */
        firstResult?: number,
        /**
         * Pagination of results. Specifies the maximum number of results to return.
         * Will return less results if there are no more results left.
         */
        maxResults?: number,
        requestBody?: TaskQueryDto,
    }): CancelablePromise<Array<TaskDto>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/task',
            query: {
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if a \`sortOrder\`
                parameter is supplied, but no \`sortBy\`, or if an invalid operator for variable
                comparison is used. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Retrieves the number of tasks that fulfill a provided filter. Corresponds to the size
     * of the result set when using the [Get Tasks](https://docs.camunda.org/manual/7.14/reference/rest/task/) method.
     *
     * **Security Consideration:** There are several query parameters (such as
     * assigneeExpression) for specifying an EL expression. These are disabled by default to
     * prevent remote code execution. See the section on
     * [security considerations](https://docs.camunda.org/manual/7.14/user-guide/process-engine/securing-custom-code/)
     * for custom code in the user guide for details.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getTasksCount({
        processInstanceId,
        processInstanceIdIn,
        processInstanceBusinessKey,
        processInstanceBusinessKeyExpression,
        processInstanceBusinessKeyIn,
        processInstanceBusinessKeyLike,
        processInstanceBusinessKeyLikeExpression,
        processDefinitionId,
        processDefinitionKey,
        processDefinitionKeyIn,
        processDefinitionName,
        processDefinitionNameLike,
        executionId,
        caseInstanceId,
        caseInstanceBusinessKey,
        caseInstanceBusinessKeyLike,
        caseDefinitionId,
        caseDefinitionKey,
        caseDefinitionName,
        caseDefinitionNameLike,
        caseExecutionId,
        activityInstanceIdIn,
        tenantIdIn,
        withoutTenantId = false,
        assignee,
        assigneeExpression,
        assigneeLike,
        assigneeLikeExpression,
        assigneeIn,
        owner,
        ownerExpression,
        candidateGroup,
        candidateGroupExpression,
        candidateUser,
        candidateUserExpression,
        includeAssignedTasks = false,
        involvedUser,
        involvedUserExpression,
        assigned = false,
        unassigned = false,
        taskDefinitionKey,
        taskDefinitionKeyIn,
        taskDefinitionKeyLike,
        name,
        nameNotEqual,
        nameLike,
        nameNotLike,
        description,
        descriptionLike,
        priority,
        maxPriority,
        minPriority,
        dueDate,
        dueDateExpression,
        dueAfter,
        dueAfterExpression,
        dueBefore,
        dueBeforeExpression,
        followUpDate,
        followUpDateExpression,
        followUpAfter,
        followUpAfterExpression,
        followUpBefore,
        followUpBeforeExpression,
        followUpBeforeOrNotExistent,
        followUpBeforeOrNotExistentExpression,
        createdOn,
        createdOnExpression,
        createdAfter,
        createdAfterExpression,
        createdBefore,
        createdBeforeExpression,
        delegationState,
        candidateGroups,
        candidateGroupsExpression,
        withCandidateGroups = false,
        withoutCandidateGroups = false,
        withCandidateUsers = false,
        withoutCandidateUsers = false,
        active = false,
        suspended = false,
        taskVariables,
        processVariables,
        caseInstanceVariables,
        variableNamesIgnoreCase = false,
        variableValuesIgnoreCase = false,
        parentTaskId,
    }: {
        /**
         * Restrict to tasks that belong to process instances with the given id.
         */
        processInstanceId?: string,
        /**
         * Restrict to tasks that belong to process instances with the given ids.
         */
        processInstanceIdIn?: string,
        /**
         * Restrict to tasks that belong to process instances with the given business key.
         */
        processInstanceBusinessKey?: string,
        /**
         * Restrict to tasks that belong to process instances with the given business key which
         * is described by an expression. See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions.
         */
        processInstanceBusinessKeyExpression?: string,
        /**
         * Restrict to tasks that belong to process instances with one of the give business keys.
         * The keys need to be in a comma-separated list.
         */
        processInstanceBusinessKeyIn?: string,
        /**
         * Restrict to tasks that have a process instance business key that has the parameter
         * value as a substring.
         */
        processInstanceBusinessKeyLike?: string,
        /**
         * Restrict to tasks that have a process instance business key that has the parameter
         * value as a substring and is described by an expression. See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions.
         */
        processInstanceBusinessKeyLikeExpression?: string,
        /**
         * Restrict to tasks that belong to a process definition with the given id.
         */
        processDefinitionId?: string,
        /**
         * Restrict to tasks that belong to a process definition with the given key.
         */
        processDefinitionKey?: string,
        /**
         * Restrict to tasks that belong to a process definition with one of the given keys. The
         * keys need to be in a comma-separated list.
         */
        processDefinitionKeyIn?: string,
        /**
         * Restrict to tasks that belong to a process definition with the given name.
         */
        processDefinitionName?: string,
        /**
         * Restrict to tasks that have a process definition name that has the parameter value as
         * a substring.
         */
        processDefinitionNameLike?: string,
        /**
         * Restrict to tasks that belong to an execution with the given id.
         */
        executionId?: string,
        /**
         * Restrict to tasks that belong to case instances with the given id.
         */
        caseInstanceId?: string,
        /**
         * Restrict to tasks that belong to case instances with the given business key.
         */
        caseInstanceBusinessKey?: string,
        /**
         * Restrict to tasks that have a case instance business key that has the parameter value
         * as a substring.
         */
        caseInstanceBusinessKeyLike?: string,
        /**
         * Restrict to tasks that belong to a case definition with the given id.
         */
        caseDefinitionId?: string,
        /**
         * Restrict to tasks that belong to a case definition with the given key.
         */
        caseDefinitionKey?: string,
        /**
         * Restrict to tasks that belong to a case definition with the given name.
         */
        caseDefinitionName?: string,
        /**
         * Restrict to tasks that have a case definition name that has the parameter value as a
         * substring.
         */
        caseDefinitionNameLike?: string,
        /**
         * Restrict to tasks that belong to a case execution with the given id.
         */
        caseExecutionId?: string,
        /**
         * Only include tasks which belong to one of the passed and comma-separated activity
         * instance ids.
         */
        activityInstanceIdIn?: string,
        /**
         * Only include tasks which belong to one of the passed and comma-separated
         * tenant ids.
         */
        tenantIdIn?: string,
        /**
         * Only include tasks which belong to no tenant. Value may only be `true`,
         * as `false` is the default behavior.
         */
        withoutTenantId?: boolean,
        /**
         * Restrict to tasks that the given user is assigned to.
         */
        assignee?: string,
        /**
         * Restrict to tasks that the user described by the given expression is assigned to.
         * See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions.
         */
        assigneeExpression?: string,
        /**
         * Restrict to tasks that have an assignee that has the parameter
         * value as a substring.
         */
        assigneeLike?: string,
        /**
         * Restrict to tasks that have an assignee that has the parameter value described by the
         * given expression as a substring. See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions.
         */
        assigneeLikeExpression?: string,
        /**
         * Only include tasks which are assigned to one of the passed and
         * comma-separated user ids.
         */
        assigneeIn?: string,
        /**
         * Restrict to tasks that the given user owns.
         */
        owner?: string,
        /**
         * Restrict to tasks that the user described by the given expression owns. See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions.
         */
        ownerExpression?: string,
        /**
         * Only include tasks that are offered to the given group.
         */
        candidateGroup?: string,
        /**
         * Only include tasks that are offered to the group described by the given expression.
         * See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions.
         */
        candidateGroupExpression?: string,
        /**
         * Only include tasks that are offered to the given user or to one of his groups.
         */
        candidateUser?: string,
        /**
         * Only include tasks that are offered to the user described by the given expression.
         * See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions.
         */
        candidateUserExpression?: string,
        /**
         * Also include tasks that are assigned to users in candidate queries. Default is to only
         * include tasks that are not assigned to any user if you query by candidate user or
         * group(s).
         */
        includeAssignedTasks?: boolean,
        /**
         * Only include tasks that the given user is involved in. A user is involved in a task if
         * an identity link exists between task and user (e.g., the user is the assignee).
         */
        involvedUser?: string,
        /**
         * Only include tasks that the user described by the given expression is involved in.
         * A user is involved in a task if an identity link exists between task and user
         * (e.g., the user is the assignee). See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions.
         */
        involvedUserExpression?: string,
        /**
         * If set to `true`, restricts the query to all tasks that are assigned.
         */
        assigned?: boolean,
        /**
         * If set to `true`, restricts the query to all tasks that are unassigned.
         */
        unassigned?: boolean,
        /**
         * Restrict to tasks that have the given key.
         */
        taskDefinitionKey?: string,
        /**
         * Restrict to tasks that have one of the given keys. The keys need to be in a
         * comma-separated list.
         */
        taskDefinitionKeyIn?: string,
        /**
         * Restrict to tasks that have a key that has the parameter value as a substring.
         */
        taskDefinitionKeyLike?: string,
        /**
         * Restrict to tasks that have the given name.
         */
        name?: string,
        /**
         * Restrict to tasks that do not have the given name.
         */
        nameNotEqual?: string,
        /**
         * Restrict to tasks that have a name with the given parameter value as substring.
         */
        nameLike?: string,
        /**
         * Restrict to tasks that do not have a name with the given parameter
         * value as substring.
         */
        nameNotLike?: string,
        /**
         * Restrict to tasks that have the given description.
         */
        description?: string,
        /**
         * Restrict to tasks that have a description that has the parameter
         * value as a substring.
         */
        descriptionLike?: string,
        /**
         * Restrict to tasks that have the given priority.
         */
        priority?: number,
        /**
         * Restrict to tasks that have a lower or equal priority.
         */
        maxPriority?: number,
        /**
         * Restrict to tasks that have a higher or equal priority.
         */
        minPriority?: number,
        /**
         * Restrict to tasks that are due on the given date. By
         * [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the
         * format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g.,
         * `2013-01-23T14:42:45.546+0200`.
         */
        dueDate?: string,
        /**
         * Restrict to tasks that are due on the date described by the given expression. See the
         * [User Guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions. The expression must evaluate to a
         * `java.util.Date` or `org.joda.time.DateTime` object.
         */
        dueDateExpression?: string,
        /**
         * Restrict to tasks that are due after the given date. By
         * [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have
         * the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g.,
         * `2013-01-23T14:42:45.435+0200`.
         */
        dueAfter?: string,
        /**
         * Restrict to tasks that are due after the date described by the given expression.
         * See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions. The expression must evaluate to a
         * `java.util.Date` or `org.joda.time.DateTime` object.
         */
        dueAfterExpression?: string,
        /**
         * Restrict to tasks that are due before the given date. By
         * [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have
         * the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g.,
         * `2013-01-23T14:42:45.243+0200`.
         */
        dueBefore?: string,
        /**
         * Restrict to tasks that are due before the date described by the given expression.
         * See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions. The expression must evaluate to a
         * `java.util.Date` or `org.joda.time.DateTime` object.
         */
        dueBeforeExpression?: string,
        /**
         * Restrict to tasks that have a followUp date on the given date. By
         * [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date
         * must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g.,
         * `2013-01-23T14:42:45.342+0200`.
         */
        followUpDate?: string,
        /**
         * Restrict to tasks that have a followUp date on the date described by the given
         * expression. See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions. The expression must evaluate to a
         * `java.util.Date` or `org.joda.time.DateTime` object.
         */
        followUpDateExpression?: string,
        /**
         * Restrict to tasks that have a followUp date after the given date. By
         * [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the
         * date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g.,
         * `2013-01-23T14:42:45.542+0200`.
         */
        followUpAfter?: string,
        /**
         * Restrict to tasks that have a followUp date after the date described by the given
         * expression. See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions. The expression must evaluate to a
         * `java.util.Date` or `org.joda.time.DateTime` object.
         */
        followUpAfterExpression?: string,
        /**
         * Restrict to tasks that have a followUp date before the given date. By
         * [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the
         * date must have the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g.,
         * `2013-01-23T14:42:45.234+0200`.
         */
        followUpBefore?: string,
        /**
         * Restrict to tasks that have a followUp date before the date described by the given
         * expression. See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions. The expression must evaluate to a
         * `java.util.Date` or `org.joda.time.DateTime` object.
         */
        followUpBeforeExpression?: string,
        /**
         * Restrict to tasks that have no followUp date or a followUp date before the given date.
         * By [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the
         * format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.432+0200`. The
         * typical use case is to query all `active` tasks for a user for a given date.
         */
        followUpBeforeOrNotExistent?: string,
        /**
         * Restrict to tasks that have no followUp date or a followUp date before the date
         * described by the given expression. See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions. The expression must evaluate to a
         * `java.util.Date` or `org.joda.time.DateTime` object.
         */
        followUpBeforeOrNotExistentExpression?: string,
        /**
         * Restrict to tasks that were created on the given date. By
         * [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have
         * the format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.324+0200`.
         */
        createdOn?: string,
        /**
         * Restrict to tasks that were created on the date described by the given expression.
         * See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions. The expression must evaluate to a
         * `java.util.Date` or `org.joda.time.DateTime` object.
         */
        createdOnExpression?: string,
        /**
         * Restrict to tasks that were created after the given date. By
         * [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the
         * format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.342+0200`.
         */
        createdAfter?: string,
        /**
         * Restrict to tasks that were created after the date described by the given expression.
         * See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions. The expression must evaluate to a
         * `java.util.Date` or `org.joda.time.DateTime` object.
         */
        createdAfterExpression?: string,
        /**
         * Restrict to tasks that were created before the given date. By
         * [default](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/), the date must have the
         * format `yyyy-MM-dd'T'HH:mm:ss.SSSZ`, e.g., `2013-01-23T14:42:45.332+0200`.
         */
        createdBefore?: string,
        /**
         * Restrict to tasks that were created before the date described by the given expression.
         * See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions. The expression must evaluate to a
         * `java.util.Date` or `org.joda.time.DateTime` object.
         */
        createdBeforeExpression?: string,
        /**
         * Restrict to tasks that are in the given delegation state. Valid values are
         * `PENDING` and `RESOLVED`.
         */
        delegationState?: 'PENDING' | 'RESOLVED',
        /**
         * Restrict to tasks that are offered to any of the given candidate groups. Takes a
         * comma-separated list of group names, so for example `developers,support,sales`.
         */
        candidateGroups?: string,
        /**
         * Restrict to tasks that are offered to any of the candidate groups described by the
         * given expression. See the
         * [user guide](https://docs.camunda.org/manual/7.14/user-guide/process-engine/expression-language/#internal-context-functions)
         * for more information on available functions. The expression must evaluate to
         * `java.util.List` of Strings.
         */
        candidateGroupsExpression?: string,
        /**
         * Only include tasks which have a candidate group. Value may only be `true`,
         * as `false` is the default behavior.
         */
        withCandidateGroups?: boolean,
        /**
         * Only include tasks which have no candidate group. Value may only be `true`,
         * as `false` is the default behavior.
         */
        withoutCandidateGroups?: boolean,
        /**
         * Only include tasks which have a candidate user. Value may only be `true`,
         * as `false` is the default behavior.
         */
        withCandidateUsers?: boolean,
        /**
         * Only include tasks which have no candidate users. Value may only be `true`,
         * as `false` is the default behavior.
         */
        withoutCandidateUsers?: boolean,
        /**
         * Only include active tasks. Value may only be `true`, as `false`
         * is the default behavior.
         */
        active?: boolean,
        /**
         * Only include suspended tasks. Value may only be `true`, as
         * `false` is the default behavior.
         */
        suspended?: boolean,
        /**
         * Only include tasks that have variables with certain values. Variable filtering
         * expressions are comma-separated and are structured as follows:
         *
         * A valid parameter value has the form `key_operator_value`. `key` is the variable name,
         * `operator` is the comparison operator to be used and `value` the variable value.
         *
         * **Note**: Values are always treated as String objects on server side.
         *
         * Valid `operator` values are:
         * `eq` - equal to;
         * `neq` - not equal to;
         * `gt` - greater than;
         * `gteq` - greater than or equal to;
         * `lt` - lower than;
         * `lteq` - lower than or equal to;
         * `like`.
         * `key` and `value` may not contain underscore or comma characters.
         */
        taskVariables?: string,
        /**
         * Only include tasks that belong to process instances that have variables with certain
         * values. Variable filtering expressions are comma-separated and are structured as
         * follows:
         *
         * A valid parameter value has the form `key_operator_value`. `key` is the variable name,
         * `operator` is the comparison operator to be used and `value` the variable value.
         *
         * **Note**: Values are always treated as String objects on server side.
         *
         * Valid `operator` values are:
         * `eq` - equal to;
         * `neq` - not equal to;
         * `gt` - greater than;
         * `gteq` - greater than or equal to;
         * `lt` - lower than;
         * `lteq` - lower than or equal to;
         * `like`.
         * `key` and `value` may not contain underscore or comma characters.
         */
        processVariables?: string,
        /**
         * Only include tasks that belong to case instances that have variables with certain
         * values. Variable filtering expressions are comma-separated and are structured as
         * follows:
         *
         * A valid parameter value has the form `key_operator_value`. `key` is the variable name,
         * `operator` is the comparison operator to be used and `value` the variable value.
         *
         * **Note**: Values are always treated as String objects on server side.
         *
         * Valid `operator` values are:
         * `eq` - equal to;
         * `neq` - not equal to;
         * `gt` - greater than;
         * `gteq` - greater than or equal to;
         * `lt` - lower than;
         * `lteq` - lower than or equal to;
         * `like`.
         * `key` and `value` may not contain underscore or comma characters.
         */
        caseInstanceVariables?: string,
        /**
         * Match all variable names in this query case-insensitively. If set
         * `variableName` and `variablename` are treated as equal.
         */
        variableNamesIgnoreCase?: boolean,
        /**
         * Match all variable values in this query case-insensitively. If set
         * `variableValue` and `variablevalue` are treated as equal.
         */
        variableValuesIgnoreCase?: boolean,
        /**
         * Restrict query to all tasks that are sub tasks of the given task. Takes a task id.
         */
        parentTaskId?: string,
    }): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/task/count',
            query: {
                'processInstanceId': processInstanceId,
                'processInstanceIdIn': processInstanceIdIn,
                'processInstanceBusinessKey': processInstanceBusinessKey,
                'processInstanceBusinessKeyExpression': processInstanceBusinessKeyExpression,
                'processInstanceBusinessKeyIn': processInstanceBusinessKeyIn,
                'processInstanceBusinessKeyLike': processInstanceBusinessKeyLike,
                'processInstanceBusinessKeyLikeExpression': processInstanceBusinessKeyLikeExpression,
                'processDefinitionId': processDefinitionId,
                'processDefinitionKey': processDefinitionKey,
                'processDefinitionKeyIn': processDefinitionKeyIn,
                'processDefinitionName': processDefinitionName,
                'processDefinitionNameLike': processDefinitionNameLike,
                'executionId': executionId,
                'caseInstanceId': caseInstanceId,
                'caseInstanceBusinessKey': caseInstanceBusinessKey,
                'caseInstanceBusinessKeyLike': caseInstanceBusinessKeyLike,
                'caseDefinitionId': caseDefinitionId,
                'caseDefinitionKey': caseDefinitionKey,
                'caseDefinitionName': caseDefinitionName,
                'caseDefinitionNameLike': caseDefinitionNameLike,
                'caseExecutionId': caseExecutionId,
                'activityInstanceIdIn': activityInstanceIdIn,
                'tenantIdIn': tenantIdIn,
                'withoutTenantId': withoutTenantId,
                'assignee': assignee,
                'assigneeExpression': assigneeExpression,
                'assigneeLike': assigneeLike,
                'assigneeLikeExpression': assigneeLikeExpression,
                'assigneeIn': assigneeIn,
                'owner': owner,
                'ownerExpression': ownerExpression,
                'candidateGroup': candidateGroup,
                'candidateGroupExpression': candidateGroupExpression,
                'candidateUser': candidateUser,
                'candidateUserExpression': candidateUserExpression,
                'includeAssignedTasks': includeAssignedTasks,
                'involvedUser': involvedUser,
                'involvedUserExpression': involvedUserExpression,
                'assigned': assigned,
                'unassigned': unassigned,
                'taskDefinitionKey': taskDefinitionKey,
                'taskDefinitionKeyIn': taskDefinitionKeyIn,
                'taskDefinitionKeyLike': taskDefinitionKeyLike,
                'name': name,
                'nameNotEqual': nameNotEqual,
                'nameLike': nameLike,
                'nameNotLike': nameNotLike,
                'description': description,
                'descriptionLike': descriptionLike,
                'priority': priority,
                'maxPriority': maxPriority,
                'minPriority': minPriority,
                'dueDate': dueDate,
                'dueDateExpression': dueDateExpression,
                'dueAfter': dueAfter,
                'dueAfterExpression': dueAfterExpression,
                'dueBefore': dueBefore,
                'dueBeforeExpression': dueBeforeExpression,
                'followUpDate': followUpDate,
                'followUpDateExpression': followUpDateExpression,
                'followUpAfter': followUpAfter,
                'followUpAfterExpression': followUpAfterExpression,
                'followUpBefore': followUpBefore,
                'followUpBeforeExpression': followUpBeforeExpression,
                'followUpBeforeOrNotExistent': followUpBeforeOrNotExistent,
                'followUpBeforeOrNotExistentExpression': followUpBeforeOrNotExistentExpression,
                'createdOn': createdOn,
                'createdOnExpression': createdOnExpression,
                'createdAfter': createdAfter,
                'createdAfterExpression': createdAfterExpression,
                'createdBefore': createdBefore,
                'createdBeforeExpression': createdBeforeExpression,
                'delegationState': delegationState,
                'candidateGroups': candidateGroups,
                'candidateGroupsExpression': candidateGroupsExpression,
                'withCandidateGroups': withCandidateGroups,
                'withoutCandidateGroups': withoutCandidateGroups,
                'withCandidateUsers': withCandidateUsers,
                'withoutCandidateUsers': withoutCandidateUsers,
                'active': active,
                'suspended': suspended,
                'taskVariables': taskVariables,
                'processVariables': processVariables,
                'caseInstanceVariables': caseInstanceVariables,
                'variableNamesIgnoreCase': variableNamesIgnoreCase,
                'variableValuesIgnoreCase': variableValuesIgnoreCase,
                'parentTaskId': parentTaskId,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Retrieves the number of tasks that fulfill the given filter. Corresponds to the size
     * of the result set of the [Get Tasks (POST)](https://docs.camunda.org/manual/7.14/reference/rest/task/post-query/)
     * method and takes the same parameters.
     *
     * **Security Consideration**:
     * There are several parameters (such as `assigneeExpression`) for specifying an EL
     * expression. These are disabled by default to prevent remote code execution. See the
     * section on
     * [security considerations for custom code](https://docs.camunda.org/manual/7.14/user-guide/process-engine/securing-custom-code/)
     * in the user guide for details.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static queryTasksCount({
        requestBody,
    }: {
        requestBody?: TaskQueryDto,
    }): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/task/count',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if some of the query parameters are invalid. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Creates a new task.
     * @returns void
     * @throws ApiError
     */
    public static createTask({
        requestBody,
    }: {
        requestBody?: TaskDto,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/task/create',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if a not valid \`delegationState\` is supplied. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Removes a task by id.
     * @returns void
     * @throws ApiError
     */
    public static deleteTask({
        id,
    }: {
        /**
         * The id of the task to be removed.
         */
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/task/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request. The Task with the given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling) for the error response format.`,
                500: `The Task with the given id cannot be deleted because it is part of a running process or case instance.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling) for
                the error response format.`,
            },
        });
    }

    /**
     * Retrieves a task by id.
     * @returns TaskDto Request successful.
     * @throws ApiError
     */
    public static getTask({
        id,
    }: {
        /**
         * The id of the task to be retrieved.
         */
        id: string,
    }): CancelablePromise<TaskDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/task/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Task with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Updates a task.
     * @returns void
     * @throws ApiError
     */
    public static updateTask({
        id,
        requestBody,
    }: {
        /**
         * The id of the task to be updated.
         */
        id: string,
        requestBody?: TaskDto,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/task/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if a not valid \`delegationState\` is supplied. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `If the corresponding task cannot be found.`,
            },
        });
    }

    /**
     * Changes the assignee of a task to a specific user.
     *
     * **Note:** The difference with the [Claim Task](https://docs.camunda.org/manual/7.14/reference/rest/task/post-claim/)
     * method is that this method does not check if the task already has a user
     * assigned to it.
     * @returns void
     * @throws ApiError
     */
    public static setAssignee({
        id,
        requestBody,
    }: {
        /**
         * The id of the task to set the assignee for.
         */
        id: string,
        /**
         * Provide the id of the user that will be the assignee of the task.
         */
        requestBody?: UserIdDto,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/task/{id}/assignee',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Task with given id does not exist or setting the assignee was not successful.
                See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Reports a business error in the context of a running task by id. The error code must
     * be specified to identify the BPMN error handler. See the documentation for
     * [Reporting Bpmn Error](https://docs.camunda.org/manual/7.14/reference/bpmn20/tasks/user-task/#reporting-bpmn-error)
     * in User Tasks.
     * @returns void
     * @throws ApiError
     */
    public static handleBpmnError({
        id,
        requestBody,
    }: {
        /**
         * The id of the task a BPMN error is reported for.
         */
        id: string,
        requestBody?: TaskBpmnErrorDto,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/task/{id}/bpmnError',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `If the authenticated user is unauthorized to update the process instance. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Returned if the task does not exist or <code>errorCode</code> is not presented in
                the request. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Reports an escalation in the context of a running task by id. The escalation code must
     * be specified to identify the escalation handler. See the documentation for
     * [Reporting Bpmn Escalation](https://docs.camunda.org/manual/7.14/reference/bpmn20/tasks/user-task/#reporting-bpmn-escalation)
     * in User Tasks.
     * @returns void
     * @throws ApiError
     */
    public static handleEscalation({
        id,
        requestBody,
    }: {
        /**
         * The id of the task in which context a BPMN escalation is reported.
         */
        id: string,
        requestBody?: TaskEscalationDto,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/task/{id}/bpmnEscalation',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `If the authenticated user is unauthorized to update the process instance. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Returned if the task does not exist or <code>errorCode</code> is not presented in
                the request. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Claims a task for a specific user.
     *
     * **Note:** The difference with the
     * [Set Assignee](https://docs.camunda.org/manual/7.14/reference/rest/task/post-assignee/)
     * method is that here a check is performed to see if the task already has a user
     * assigned to it.
     * @returns void
     * @throws ApiError
     */
    public static claim({
        id,
        requestBody,
    }: {
        /**
         * The id of the task to claim.
         */
        id: string,
        /**
         * Provide the id of the user that claims the task.
         */
        requestBody?: UserIdDto,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/task/{id}/claim',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Task with given id does not exist or claiming was not successful. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Completes a task and updates process variables.
     * @returns VariableValueDto Request successful. The response contains the process variables.
     * @throws ApiError
     */
    public static complete({
        id,
        requestBody,
    }: {
        /**
         * The id of the task to complete.
         */
        id: string,
        requestBody?: CompleteTaskDto,
    }): CancelablePromise<Record<string, VariableValueDto>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/task/{id}/complete',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The variable value or type is invalid, for example if the value could not be parsed
                to an Integer value or the passed variable type is not supported. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                500: `If the task does not exist or the corresponding process instance could not be
                resumed successfully. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Delegates a task to another user.
     * @returns void
     * @throws ApiError
     */
    public static delegateTask({
        id,
        requestBody,
    }: {
        /**
         * The id of the task to delegate.
         */
        id: string,
        /**
         * Provide the id of the user that the task should be delegated to.
         */
        requestBody?: UserIdDto,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/task/{id}/delegate',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `If the task does not exist or delegation was not successful. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Retrieves the deployed form that is referenced from a given task. For further
     * information please refer to the
     * [User Guide](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#embedded-task-forms).
     * @returns binary Request successful.
     * @throws ApiError
     */
    public static getDeployedForm({
        id,
    }: {
        /**
         * The id of the task to get the deployed form for.
         */
        id: string,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/task/{id}/deployed-form',
            path: {
                'id': id,
            },
            errors: {
                400: `The form key has wrong format. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                403: `The deployed form cannot be retrieved due to missing permissions on task resource.
                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `No deployed form for a given task exists. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Retrieves the form key for a task. The form key corresponds to the `FormData#formKey`
     * property in the engine. This key can be used to do task-specific form rendering in
     * client applications. Additionally, the context path of the containing process
     * application is returned.
     * @returns FormDto Request successful.
     * @throws ApiError
     */
    public static getForm({
        id,
    }: {
        /**
         * The id of the task to retrieve the form for.
         */
        id: string,
    }): CancelablePromise<FormDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/task/{id}/form',
            path: {
                'id': id,
            },
            errors: {
                400: `Task with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Retrieves the form variables for a task. The form variables take form data specified
     * on the task into account. If form fields are defined, the variable types and default
     * values of the form fields are taken into account.
     * @returns VariableValueDto Request successful. A JSON object containing a property for each variable returned.
     * @throws ApiError
     */
    public static getFormVariables({
        id,
        variableNames,
        deserializeValues = true,
    }: {
        /**
         * The id of the task to retrieve the variables for.
         */
        id: string,
        /**
         * A comma-separated list of variable names. Allows restricting the list of requested
         * variables to the variable names in the list. It is best practice to restrict the
         * list of variables to the variables actually required by the form in order to
         * minimize fetching of data. If the query parameter is ommitted all variables are
         * fetched. If the query parameter contains non-existent variable names, the variable
         * names are ignored.
         */
        variableNames?: string,
        /**
         * Determines whether serializable variable values (typically variables that store
         * custom Java objects) should be deserialized on server side (default true).
         *
         * If set to true, a serializable variable will be deserialized on server side and
         * transformed to JSON using [Jackson's](http://jackson.codehaus.org/) POJO/bean
         * property introspection feature. Note that this requires the Java classes of the
         * variable value to be on the REST API's classpath.
         *
         * If set to false, a serializable variable will be returned in its serialized format.
         * For example, a variable that is serialized as XML will be returned as a JSON string
         * containing XML.
         *
         * Note: While true is the default value for reasons of backward compatibility, we
         * recommend setting this parameter to false when developing web applications that are
         * independent of the Java process applications deployed to the engine.
         */
        deserializeValues?: boolean,
    }): CancelablePromise<Record<string, VariableValueDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/task/{id}/form-variables',
            path: {
                'id': id,
            },
            query: {
                'variableNames': variableNames,
                'deserializeValues': deserializeValues,
            },
            errors: {
                404: ` id is null or does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Retrieves the rendered form for a task. This method can be used to get the HTML
     * rendering of a
     * [Generated Task Form](https://docs.camunda.org/manual/7.14/user-guide/task-forms/#generated-task-forms).
     * @returns binary Request successful.
     * @throws ApiError
     */
    public static getRenderedForm({
        id,
    }: {
        /**
         * The id of the task to get the rendered form for.
         */
        id: string,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/task/{id}/rendered-form',
            path: {
                'id': id,
            },
            errors: {
                400: `The task with the given id does not exist or has no form field metadata defined for
                this task. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Resolves a task and updates execution variables.
     *
     * Resolving a task marks that the assignee is done with the task delegated to them, and
     * that it can be sent back to the owner. Can only be executed when the task has been
     * delegated. The assignee will be set to the owner, who performed the delegation.
     * @returns void
     * @throws ApiError
     */
    public static resolve({
        id,
        requestBody,
    }: {
        /**
         * The id of the task to resolve.
         */
        id: string,
        requestBody?: CompleteTaskDto,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/task/{id}/resolve',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The variable value or type is invalid, for example if the value could not be parsed
                to an Integer value or the passed variable type is not supported. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                500: `If the task does not exist or the corresponding process instance could not be
                resumed successfully. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Completes a task and updates process variables using a form submit. There are two
     * difference between this method and the `complete` method:
     *
     * * If the task is in state `PENDING` - i.e., has been delegated before, it is not
     * completed but resolved. Otherwise it will be completed.
     * * If the task has Form Field Metadata defined, the process engine will perform backend
     * validation for any form fields which have validators defined.
     * See the
     * [Generated Task Forms](https://docs.camunda.org/manual/7.14/user-guide/task-forms/_index/#generated-task-forms)
     * section of the [User Guide](https://docs.camunda.org/manual/7.14/user-guide/) for more information.
     * @returns VariableValueDto Request successful. The response contains the process variables.
     * @throws ApiError
     */
    public static submit({
        id,
        requestBody,
    }: {
        /**
         * The id of the task to submit the form for.
         */
        id: string,
        requestBody?: CompleteTaskDto,
    }): CancelablePromise<Record<string, VariableValueDto>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/task/{id}/submit-form',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The variable value or type is invalid, for example if the value could not be parsed to an Integer value
                or the passed variable type is not supported.

                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling) for
                the error response format.`,
                500: `If the task does not exist or the corresponding process instance could not be resumed successfully.

                See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling) for
                the error response format.`,
            },
        });
    }

    /**
     * Resets a task's assignee. If successful, the task is not assigned to a user.
     * @returns void
     * @throws ApiError
     */
    public static unclaim({
        id,
    }: {
        /**
         * The id of the task to unclaim.
         */
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/task/{id}/unclaim',
            path: {
                'id': id,
            },
            errors: {
                500: `The Task with the given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

}
