/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AtomLink } from './AtomLink';

export type LinkableDto = {
    /**
     * The links associated to this resource, with `method`, `href` and `rel`.
     */
    links?: Array<AtomLink>;
};

