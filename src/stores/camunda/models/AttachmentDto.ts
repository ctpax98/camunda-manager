/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LinkableDto } from './LinkableDto';

export type AttachmentDto = ({
    /**
     * The id of the task attachment.
     */
    id?: string;
    /**
     * The name of the task attachment.
     */
    name?: string;
    /**
     * The description of the task attachment.
     */
    description?: string;
    /**
     * The id of the task to which the attachment belongs.
     */
    taskId?: string;
    /**
     * Indication of the type of content that this attachment refers to.
     * Can be MIME type or any other indication.
     */
    type?: string;
    /**
     * The url to the remote content of the task attachment.
     */
    url?: string;
    /**
     * The time the variable was inserted.
     * [Default format](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/)
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    createTime?: string;
    /**
     * The time after which the attachment should be removed by the History Cleanup job.
     * [Default format](https://docs.camunda.org/manual/7.14/reference/rest/overview/date-format/)
     * `yyyy-MM-dd'T'HH:mm:ss.SSSZ`.
     */
    removalTime?: string | null;
    /**
     * The process instance id of the root process instance that initiated the process containing the task.
     */
    rootProcessInstanceId?: string;
} & LinkableDto);

