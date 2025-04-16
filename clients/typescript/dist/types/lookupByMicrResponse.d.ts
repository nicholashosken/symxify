import { LookupResult } from "./lookupResult";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LookupByMicrResponse {
    result: LookupResult;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
