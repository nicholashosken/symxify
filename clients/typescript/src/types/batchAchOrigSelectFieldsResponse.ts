import { BatchAchOrig } from "./batchAchOrig";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface BatchAchOrigSelectFieldsResponse {
    batchAchOrig: BatchAchOrig;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}