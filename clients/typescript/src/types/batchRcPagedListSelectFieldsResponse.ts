import { BatchRc } from "./batchRc";
import { VersionType } from "./versionType";

export interface BatchRcPagedListSelectFieldsResponse {
    batchRc: BatchRc[];
    token: string;
    version1: VersionType;
    messageId: string;
}