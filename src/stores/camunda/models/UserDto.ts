/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserCredentialsDto } from './UserCredentialsDto';
import type { UserProfileDto } from './UserProfileDto';

export type UserDto = {
    profile?: UserProfileDto;
    credentials?: UserCredentialsDto;
};

