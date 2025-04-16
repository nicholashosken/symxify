import { BatchRc } from "./batchRc";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface BatchRcPagedListSelectFieldsResponse {
    batchRc: BatchRc[];
    batchRcSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
