import { VersionType } from "./versionType";

export interface LdapCredentials {
    userId: string;
    password: string;
    version1: VersionType;
}