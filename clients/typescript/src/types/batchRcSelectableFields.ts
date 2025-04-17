import { BatchRcFields } from "./batchRcFields";
import { VersionType } from "./versionType";

export interface BatchRcSelectableFields {
    includeAllBatchRcFields: boolean | null;
    batchRcFields: BatchRcFields;
    version1: VersionType;
}