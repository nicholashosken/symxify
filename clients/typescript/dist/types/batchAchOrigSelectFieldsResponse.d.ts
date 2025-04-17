import { BatchAchOrig } from "./batchAchOrig";
import { VersionType } from "./versionType";
export interface BatchAchOrigSelectFieldsResponse {
    batchAchOrig: BatchAchOrig;
    version1: VersionType;
    messageId: string;
}
