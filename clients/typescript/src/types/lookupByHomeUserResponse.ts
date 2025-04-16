import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LookupByHomeUserResponse {
    accountNumber: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}