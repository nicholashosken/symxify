import { BatchAchOrigFields } from "./batchAchOrigFields";
import { VersionType } from "./versionType";
export interface BatchAchOrigSingleSelectableFields {
    includeAllBatchAchOrigFields: boolean | null;
    batchAchOrigFields: BatchAchOrigFields;
    version1: VersionType;
}
