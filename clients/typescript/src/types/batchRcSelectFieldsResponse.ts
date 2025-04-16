import { BatchRc } from "./batchRc";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface BatchRcSelectFieldsResponse {
    batchRc: BatchRc;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}