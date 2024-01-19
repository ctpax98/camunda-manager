/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type HistoricProcessInstanceDto = {
    /**
     * The id of the process instance.
     */
    id?: string;
    /**
     * The process instance id of the root process instance that initiated the process.
     */
    rootProcessInstanceId?: string;
    /**
     * The id of the parent process instance, if it exists.
     */
    superProcessInstanceId?: string;
    /**
     * The id of the parent case instance, if it exists.
     */
    superCaseInstanceId?: string;
    /**
     * The id of the parent case instance, if it exists.
     */
    caseInstanceId?: string;
    /**
     * The name of the process definition that this process instance belongs to.
     */
    processDefinitionName?: string;
    /**
     * The key of the process definition that this process instance belongs to.
     */
    processDefinitionKey?: string;
    /**
     * The version of the process definition that this process instance belongs to.
     */
    processDefinitionVersion?: number;
    /**
     * The id of the process definition that this process instance belongs to.
     */
    processDefinitionId?: string;
    /**
     * The business key of the process instance.
     */
    businessKey?: string;
    /**
     * The time the instance was started. Default [format](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    startTime?: string | null;
    /**
     * The time the instance ended. Default [format](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    endTime?: string | null;
    /**
     * The time after which the instance should be removed by the History Cleanup job. Default [format](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/) `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    removalTime?: string | null;
    /**
     * The time the instance took to finish (in milliseconds).
     */
    durationInMillis?: number | null;
    /**
     * The id of the user who started the process instance.
     */
    startUserId?: string;
    /**
     * The id of the initial activity that was executed (e.g., a start event).
     */
    startActivityId?: string;
    /**
     * The provided delete reason in case the process instance was canceled during execution.
     */
    deleteReason?: string;
    /**
     * The tenant id of the process instance.
     */
    tenantId?: string;
    /**
     * Last state of the process instance, possible values are:
     *
     * `ACTIVE` - running process instance
     *
     * `SUSPENDED` - suspended process instances
     *
     * `COMPLETED` - completed through normal end event
     *
     * `EXTERNALLY_TERMINATED` - terminated externally, for instance through REST API
     *
     * `INTERNALLY_TERMINATED` - terminated internally, for instance by terminating boundary event
     */
    state?: 'ACTIVE' | 'SUSPENDED' | 'COMPLETED' | 'EXTERNALLY_TERMINATED' | 'INTERNALLY_TERMINATED';
};

