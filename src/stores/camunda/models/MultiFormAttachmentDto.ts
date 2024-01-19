/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MultiFormAttachmentDto = {
    /**
     * The name of the attachment.
     */
    'attachment-name'?: string;
    /**
     * The description of the attachment.
     */
    'attachment-description'?: string;
    /**
     * The type of the attachment.
     */
    'attachment-type'?: string;
    /**
     * The url to the remote content of the attachment.
     */
    url?: string;
    /**
     * The content of the attachment.
     */
    content?: Blob | null;
};

