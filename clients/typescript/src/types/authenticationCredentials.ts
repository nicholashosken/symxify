import { LdapCredentials } from "./ldapCredentials";
import { KerberosCredentials } from "./kerberosCredentials";
import { ImsCredentials } from "./imsCredentials";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AuthenticationCredentials {
    ldapCredentials: LdapCredentials;
    kerberosCredentials: KerberosCredentials;
    imsCredentials: ImsCredentials;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}