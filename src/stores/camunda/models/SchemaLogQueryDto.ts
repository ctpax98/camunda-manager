/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SchemaLogQueryDto = {
    /**
     * The version of the schema.
     */
    version?: string;
    /**
     * A JSON array of criteria to sort the result by. Each element of the array is
     * a JSON object that specifies one ordering. The position in the array
     * identifies the rank of an ordering, i.e., whether it is primary, secondary,
     * etc.
     */
    sorting?: Array<{
        /**
         * Sort the results lexicographically by a given criterion.
         * Must be used in conjunction with the sortOrder parameter.
         */
        sortBy?: 'timestamp';
        /**
         * Sort the results in a given order. Values may be `asc` for ascending order or `desc` for
         * descending order. Must be used in conjunction with the sortBy parameter.
         */
        sortOrder?: 'asc' | 'desc';
    }>;
};

