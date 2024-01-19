/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountResultDto } from '../models/CountResultDto';
import type { ResourceOptionsDto } from '../models/ResourceOptionsDto';
import type { UserCredentialsDto } from '../models/UserCredentialsDto';
import type { UserDto } from '../models/UserDto';
import type { UserProfileDto } from '../models/UserProfileDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * Get List
     * Query for a list of users using a list of parameters.
     * The size of the result set can be retrieved by using the Get User Count method.
     * [Get User Count](https://docs.camunda.org/manual/7.14/reference/rest/user/get-query-count/) method.
     * @returns UserProfileDto Request successful.
     * @throws ApiError
     */
    public static getUsers({
        id,
        idIn,
        firstName,
        firstNameLike,
        lastName,
        lastNameLike,
        email,
        emailLike,
        memberOfGroup,
        memberOfTenant,
        potentialStarter,
        sortBy,
        sortOrder,
        firstResult,
        maxResults,
    }: {
        /**
         * Filter by user id
         */
        id?: string,
        /**
         * Filter by a comma-separated list of user ids.
         */
        idIn?: string,
        /**
         * Filter by the first name of the user. Exact match.
         */
        firstName?: string,
        /**
         * Filter by the first name that the parameter is a substring of.
         */
        firstNameLike?: string,
        /**
         * Filter by the last name of the user. Exact match.
         */
        lastName?: string,
        /**
         * Filter by the last name that the parameter is a substring of.
         */
        lastNameLike?: string,
        /**
         * Filter by the email of the user. Exact match.
         */
        email?: string,
        /**
         * Filter by the email that the parameter is a substring of.
         */
        emailLike?: string,
        /**
         * Filter for users which are members of the given group.
         */
        memberOfGroup?: string,
        /**
         * Filter for users which are members of the given tenant.
         */
        memberOfTenant?: string,
        /**
         * Only select Users that are potential starter for the given process definition.
         */
        potentialStarter?: string,
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
    }): CancelablePromise<Array<UserProfileDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user',
            query: {
                'id': id,
                'idIn': idIn,
                'firstName': firstName,
                'firstNameLike': firstNameLike,
                'lastName': lastName,
                'lastNameLike': lastNameLike,
                'email': email,
                'emailLike': emailLike,
                'memberOfGroup': memberOfGroup,
                'memberOfTenant': memberOfTenant,
                'potentialStarter': potentialStarter,
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'firstResult': firstResult,
                'maxResults': maxResults,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid, for example if a \`sortOrder\` parameter is supplied,
                but no \`sortBy\`, or if an invalid operator for variable comparison is used. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Options
     * The `/user` resource supports two custom `OPTIONS` requests, one for the resource as such
     * and one for individual user instances. The `OPTIONS` request allows checking for the set of
     * available operations that the currently authenticated user can perform on the /user resource.
     * If the user can perform an operation or not may depend on various things, including the user's
     * authorizations to interact with this resource and the internal configuration of the process
     * engine.
     * @returns ResourceOptionsDto Request successful.
     * @throws ApiError
     */
    public static availableOperations(): CancelablePromise<ResourceOptionsDto> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/user',
        });
    }

    /**
     * Get List Count
     * Queries for the number of deployments that fulfill given parameters. Takes the same parameters as the
     * [Get Users](https://docs.camunda.org/manual/7.14/reference/rest/user/get-query/) method.
     * @returns CountResultDto Request successful.
     * @throws ApiError
     */
    public static getUserCount({
        id,
        idIn,
        firstName,
        firstNameLike,
        lastName,
        lastNameLike,
        email,
        emailLike,
        memberOfGroup,
        memberOfTenant,
        potentialStarter,
    }: {
        /**
         * Filter by user id
         */
        id?: string,
        /**
         * Filter by a comma-separated list of user ids.
         */
        idIn?: string,
        /**
         * Filter by the first name of the user. Exact match.
         */
        firstName?: string,
        /**
         * Filter by the first name that the parameter is a substring of.
         */
        firstNameLike?: string,
        /**
         * Filter by the last name of the user. Exact match.
         */
        lastName?: string,
        /**
         * Filter by the last name that the parameter is a substring of.
         */
        lastNameLike?: string,
        /**
         * Filter by the email of the user. Exact match.
         */
        email?: string,
        /**
         * Filter by the email that the parameter is a substring of.
         */
        emailLike?: string,
        /**
         * Filter for users which are members of the given group.
         */
        memberOfGroup?: string,
        /**
         * Filter for users which are members of the given tenant.
         */
        memberOfTenant?: string,
        /**
         * Only select Users that are potential starter for the given process definition.
         */
        potentialStarter?: string,
    }): CancelablePromise<CountResultDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/count',
            query: {
                'id': id,
                'idIn': idIn,
                'firstName': firstName,
                'firstNameLike': firstNameLike,
                'lastName': lastName,
                'lastNameLike': lastNameLike,
                'email': email,
                'emailLike': emailLike,
                'memberOfGroup': memberOfGroup,
                'memberOfTenant': memberOfTenant,
                'potentialStarter': potentialStarter,
            },
            errors: {
                400: `Returned if some of the query parameters are invalid, for example, if an invalid operator for variable
                comparison is used. See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Create
     * Create a new user.
     * @returns void
     * @throws ApiError
     */
    public static createUser({
        requestBody,
    }: {
        requestBody?: UserDto,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/create',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete
     * Deletes a user by id.
     * @returns void
     * @throws ApiError
     */
    public static deleteUser({
        id,
    }: {
        /**
         * The id of the user to be deleted.
         */
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Identity service is read-only (Cannot modify users / groups / memberships).`,
                404: `A Deployment with the provided id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Options
     * The `/user` resource supports two custom `OPTIONS` requests, one for the resource as such
     * and one for individual user instances. The `OPTIONS` request allows checking for the set of
     * available operations that the currently authenticated user can perform on the /user resource.
     * If the user can perform an operation or not may depend on various things, including the user's
     * authorizations to interact with this resource and the internal configuration of the process
     * engine.
     * @returns ResourceOptionsDto Request successful.
     * @throws ApiError
     */
    public static availableUserOperations({
        id,
    }: {
        /**
         * The id of the user to be deleted.
         */
        id: string,
    }): CancelablePromise<ResourceOptionsDto> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/user/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update Credentials
     * Updates a user's credentials (password)
     * @returns any Request successful.
     * @throws ApiError
     */
    public static updateCredentials({
        id,
        password,
        authenticatedUserPassword,
        requestBody,
    }: {
        /**
         * The id of the user to be updated.
         */
        id: string,
        /**
         * The users new password.
         */
        password: string,
        /**
         * The password of the authenticated user who changes the password of the user
         * (i.e., the user with passed id as path parameter).
         */
        authenticatedUserPassword: string,
        requestBody?: UserCredentialsDto,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/{id}/credentials',
            path: {
                'id': id,
            },
            query: {
                'password': password,
                'authenticatedUserPassword': authenticatedUserPassword,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The authenticated user password does not match`,
                403: `Identity service is read-only (Cannot modify users / groups / memberships).`,
                404: `If the corresponding user cannot be found`,
                500: `The user could not be updated due to an internal server error. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Get Profile
     * Retrieves a user's profile.
     * @returns UserProfileDto Request successful.
     * @throws ApiError
     */
    public static getUserProfile({
        id,
    }: {
        /**
         * The id of the user to retrieve.
         */
        id: string,
    }): CancelablePromise<Array<UserProfileDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/{id}/profile',
            path: {
                'id': id,
            },
            errors: {
                404: `Execution with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Unlock User
     * Unlocks a user by id.
     * @returns void
     * @throws ApiError
     */
    public static unlockUser({
        id,
    }: {
        /**
         * The id of the user to be unlocked.
         */
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/{id}/unlock',
            path: {
                'id': id,
            },
            errors: {
                403: `The user who performed the operation is not a Camunda admin user.`,
                404: `User cannot be found. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

}
