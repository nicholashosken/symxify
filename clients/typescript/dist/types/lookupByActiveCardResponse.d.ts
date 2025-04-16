import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LookupByActiveCardResponse {
    accountNumber: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
