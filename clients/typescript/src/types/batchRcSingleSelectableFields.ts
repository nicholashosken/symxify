import { BatchRcFields } from "./batchRcFields";
import { VersionType } from "./versionType";

export interface BatchRcSingleSelectableFields {
    includeAllBatchRcFields: boolean | null;
    batchRcFields: BatchRcFields;
    version1: VersionType;
}