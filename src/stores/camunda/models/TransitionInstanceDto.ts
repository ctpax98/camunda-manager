/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ActivityInstanceIncidentDto } from './ActivityInstanceIncidentDto';

/**
 * A JSON object corresponding to the Activity Instance tree of the given process instance.
 */
export type TransitionInstanceDto = {
    /**
     * The id of the transition instance.
     */
    id?: string;
    /**
     * The id of the parent activity instance, for example a sub process instance.
     */
    parentActivityInstanceId?: string;
    /**
     * The id of the activity that this instance enters (asyncBefore job) or leaves (asyncAfter job)
     */
    activityId?: string;
    /**
     * The name of the activity that this instance enters (asyncBefore job) or leaves (asyncAfter job)
     */
    activityName?: string;
    /**
     * The type of the activity that this instance enters (asyncBefore job) or leaves (asyncAfter job)
     */
    activityType?: string;
    /**
     * The id of the process instance this instance is part of.
     */
    processInstanceId?: string;
    /**
     * The id of the process definition.
     */
    processDefinitionId?: string;
    /**
     * The execution id.
     */
    executionId?: string;
    /**
     * A list of incident ids.
     */
    incidentIds?: Array<string>;
    /**
     * A list of JSON objects containing incident specific properties:
     * * `id`: the id of the incident
     * * `activityId`: the activity id in which the incident occurred
     */
    incidents?: Array<ActivityInstanceIncidentDto>;
};

