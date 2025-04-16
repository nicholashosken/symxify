import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface KerberosCredentials {
    kerberosTicket: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}