import { LdapCredentials } from "./ldapCredentials";
import { KerberosCredentials } from "./kerberosCredentials";
import { ImsCredentials } from "./imsCredentials";
import { VersionType } from "./versionType";
export interface AuthenticationCredentials {
    ldapCredentials: LdapCredentials;
    kerberosCredentials: KerberosCredentials;
    imsCredentials: ImsCredentials;
    version1: VersionType;
}
