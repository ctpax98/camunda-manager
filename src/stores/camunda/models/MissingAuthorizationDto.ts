/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MissingAuthorizationDto = {
    /**
     * The permission name that the user is missing.
     */
    permissionName?: string;
    /**
     * The name of the resource that the user is missing permission for.
     */
    resourceName?: string;
    /**
     * The id of the resource that the user is missing permission for.
     */
    resourceId?: string;
};

