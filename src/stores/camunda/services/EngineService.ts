/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProcessEngineDto } from '../models/ProcessEngineDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EngineService {

    /**
     * Retrieves the names of all process engines available on your platform.
     * **Note**: You cannot prepend `/engine/{name}` to this method.
     * @returns ProcessEngineDto Request successful.
     * @throws ApiError
     */
    public static getProcessEngineNames(): CancelablePromise<Array<ProcessEngineDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/engine',
        });
    }

}
