import { VersionType } from "./versionType";

export interface KerberosCredentials {
    kerberosTicket: string;
    version1: VersionType;
}