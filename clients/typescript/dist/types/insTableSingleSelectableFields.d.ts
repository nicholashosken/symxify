import { InsTableFields } from "./insTableFields";
import { VersionType } from "./versionType";
export interface InsTableSingleSelectableFields {
    includeAllInsTableFields: boolean | null;
    insTableFields: InsTableFields;
    version1: VersionType;
}
