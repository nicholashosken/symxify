import { InsTableFields } from "./insTableFields";
import { VersionType } from "./versionType";
export interface InsTableSelectableFields {
    includeAllInsTableFields: boolean | null;
    insTableFields: InsTableFields;
    version1: VersionType;
}
