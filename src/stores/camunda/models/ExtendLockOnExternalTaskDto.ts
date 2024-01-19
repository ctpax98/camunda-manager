/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ExtendLockOnExternalTaskDto = {
    /**
     * The ID of a worker who is locking the external task.
     */
    workerId?: string;
    /**
     * An amount of time (in milliseconds). This is the new lock duration starting from the current moment.
     */
    newDuration?: number;
};

