/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A event subscription query which retrieves a list of event subscriptions
 */
export type EventSubscriptionQueryDto = {
    /**
     * The id of the event subscription.
     */
    eventSubscriptionId?: string;
    /**
     * The name of the event this subscription belongs to as defined in the process model.
     */
    eventName?: string;
    /**
     * The type of the event subscription.
     */
    eventType?: 'message' | 'signal' | 'compensate' | 'conditional';
    /**
     * The execution that is subscribed on the referenced event.
     */
    executionId?: string;
    /**
     * The process instance this subscription belongs to.
     */
    processInstanceId?: string;
    /**
     * The identifier of the activity that this event subscription belongs to.
     * This could for example be the id of a receive task.
     */
    activityId?: string;
    /**
     * Filter by a comma-separated list of tenant ids.
     * Only select subscriptions that belong to one of the given tenant ids.
     */
    tenantIdIn?: Array<string>;
    /**
     * Only select subscriptions which have no tenant id.
     * Value may only be `true`, as `false` is the default behavior.
     */
    withoutTenantId?: boolean | null;
    /**
     * Select event subscriptions which have no tenant id.
     * Can be used in combination with tenantIdIn parameter.
     * Value may only be `true`, as `false` is the default behavior.
     */
    includeEventSubscriptionsWithoutTenantId?: boolean | null;
    /**
     * Apply sorting of the result
     */
    sorting?: Array<{
        /**
         * Sort the results lexicographically by a given criterion.
         * Must be used in conjunction with the sortOrder parameter.
         */
        sortBy?: 'created' | 'tenantId';
        /**
         * Sort the results in a given order. Values may be `asc` for ascending order or `desc` for
         * descending order. Must be used in conjunction with the sortBy parameter.
         */
        sortOrder?: 'asc' | 'desc';
    }>;
};

