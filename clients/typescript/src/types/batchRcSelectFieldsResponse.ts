import { BatchRc } from "./batchRc";
import { VersionType } from "./versionType";

export interface BatchRcSelectFieldsResponse {
    batchRc: BatchRc;
    version1: VersionType;
    messageId: string;
}