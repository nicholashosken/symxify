import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LdapCredentials {
    userId: string;
    password: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
