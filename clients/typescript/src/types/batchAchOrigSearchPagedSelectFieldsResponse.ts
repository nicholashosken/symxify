import { BatchAchOrig } from "./batchAchOrig";
import { VersionType } from "./versionType";

export interface BatchAchOrigSearchPagedSelectFieldsResponse {
    batchAchOrig: BatchAchOrig[];
    token: string;
    version1: VersionType;
    messageId: string;
}