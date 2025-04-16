import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LookupBySsnResponse {
    accountNumber: string[];
    accountNumberSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
