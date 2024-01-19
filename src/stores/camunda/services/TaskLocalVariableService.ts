/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MultiFormVariableBinaryDto } from '../models/MultiFormVariableBinaryDto';
import type { PatchVariablesDto } from '../models/PatchVariablesDto';
import type { VariableValueDto } from '../models/VariableValueDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TaskLocalVariableService {

    /**
     * Retrieves all variables of a given task by id.
     * @returns VariableValueDto Request successful.
     * @throws ApiError
     */
    public static getTaskLocalVariables({
        id,
        deserializeValues = true,
    }: {
        /**
         * The id of the task to retrieve the variables from.
         */
        id: string,
        /**
         * Determines whether serializable variable values (typically variables that store custom Java objects)
         * should be deserialized on the server side (default `true`).
         *
         * If set to `true`, a serializable variable will be deserialized on server side and transformed to JSON
         * using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature.
         * Note that this requires the Java classes of the variable value to be on the REST API's classpath.
         *
         * If set to `false`, a serializable variable will be returned in its serialized format.
         * For example, a variable that is serialized as XML will be returned as a JSON string containing XML.
         *
         * **Note:** While `true` is the default value for reasons of backward compatibility, we recommend setting this
         * parameter to `false` when developing web applications that are independent of the Java process
         * applications deployed to the engine.
         */
        deserializeValues?: boolean,
    }): CancelablePromise<Record<string, VariableValueDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/task/{id}/localVariables',
            path: {
                'id': id,
            },
            query: {
                'deserializeValues': deserializeValues,
            },
            errors: {
                500: `Task id is \`null\` or does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Updates or deletes the variables in the context of a task. Updates precede deletions. So, if a variable is
     * updated AND deleted, the deletion overrides the update.
     * @returns void
     * @throws ApiError
     */
    public static modifyTaskLocalVariables({
        id,
        requestBody,
    }: {
        /**
         * The id of the task to set variables for.
         */
        id: string,
        requestBody?: PatchVariablesDto,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/task/{id}/localVariables',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The variable value or type is invalid. For example the value could not be parsed to an \`Integer\` value
                or the passed variable type is not supported. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                500: `Update or delete could not be executed because the task is \`null\` or does not exist.. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Removes a local variable from a task by id.
     * @returns void
     * @throws ApiError
     */
    public static deleteTaskLocalVariable({
        id,
        varName,
    }: {
        /**
         * The id of the task to delete the variable from.
         */
        id: string,
        /**
         * The name of the variable to be removed.
         */
        varName: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/task/{id}/localVariables/{varName}',
            path: {
                'id': id,
                'varName': varName,
            },
            errors: {
                500: `Task id is \`null\` or does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Retrieves a variable from the context of a given task by id.
     * @returns VariableValueDto Request successful.
     * @throws ApiError
     */
    public static getTaskLocalVariable({
        id,
        varName,
        deserializeValue = true,
    }: {
        /**
         * The id of the task to retrieve the variable from.
         */
        id: string,
        /**
         * The name of the variable to get
         */
        varName: string,
        /**
         * Determines whether serializable variable values (typically variables that store custom Java objects)
         * should be deserialized on the server side (default `true`).
         *
         * If set to `true`, a serializable variable will be deserialized on server side and transformed to JSON
         * using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature.
         * Note that this requires the Java classes of the variable value to be on the REST API's classpath.
         *
         * If set to `false`, a serializable variable will be returned in its serialized format.
         * For example, a variable that is serialized as XML will be returned as a JSON string containing XML.
         *
         * Note: While `true` is the default value for reasons of backward compatibility, we recommend setting this
         * parameter to `false` when developing web applications that are independent of the Java process
         * applications deployed to the engine.
         */
        deserializeValue?: boolean,
    }): CancelablePromise<VariableValueDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/task/{id}/localVariables/{varName}',
            path: {
                'id': id,
                'varName': varName,
            },
            query: {
                'deserializeValue': deserializeValue,
            },
            errors: {
                404: `Variable with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                500: `Task id is \`null\` or does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Sets a variable in the context of a given task.
     * @returns void
     * @throws ApiError
     */
    public static putTaskLocalVariable({
        id,
        varName,
        requestBody,
    }: {
        /**
         * The id of the task to set the variable for.
         */
        id: string,
        /**
         * The name of the variable to set.
         */
        varName: string,
        requestBody?: VariableValueDto,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/task/{id}/localVariables/{varName}',
            path: {
                'id': id,
                'varName': varName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The variable name, value or type is invalid, for example if the value could not be parsed to an \`Integer\`
                value or the passed variable type is not supported or a new transient variable has the name that is
                already persisted. See the [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                500: `The variable name is \`null\`, or the Task id is \`null\` or does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Retrieves a binary variable from the context of a given task by id. Applicable for byte array and file
     * variables.
     * @returns binary Request successful.
     * For binary variables or files without any MIME type information, a byte stream is returned.
     * File variables with MIME type information are returned as the saved type.
     * Additionally, for file variables the Content-Disposition header will be set.
     * @throws ApiError
     */
    public static getTaskLocalVariableBinary({
        id,
        varName,
    }: {
        /**
         * The id of the task to retrieve the variable for.
         */
        id: string,
        /**
         * The name of the variable to retrieve.
         */
        varName: string,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/task/{id}/localVariables/{varName}/data',
            path: {
                'id': id,
                'varName': varName,
            },
            errors: {
                400: `Variable with given id exists but is not a binary variable.See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                404: `Variable with given id does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

    /**
     * Sets the serialized value for a binary variable or the binary value for a file variable.
     * @returns void
     * @throws ApiError
     */
    public static setBinaryTaskLocalVariable({
        id,
        varName,
        formData,
    }: {
        /**
         * The id of the task to retrieve the variable for.
         */
        id: string,
        /**
         * The name of the variable to retrieve.
         */
        varName: string,
        /**
         * For binary variables a multipart form submit with the following parts:
         */
        formData?: MultiFormVariableBinaryDto,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/task/{id}/localVariables/{varName}/data',
            path: {
                'id': id,
                'varName': varName,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `The variable value or type is invalid, for example if no filename is set. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
                500: `Variable name is \`null\`, or the Task id is \`null\` or does not exist. See the
                [Introduction](https://docs.camunda.org/manual/7.14/reference/rest/overview/#error-handling)
                for the error response format.`,
            },
        });
    }

}
