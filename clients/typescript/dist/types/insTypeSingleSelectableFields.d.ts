import { InsTypeFields } from "./insTypeFields";
import { VersionType } from "./versionType";
export interface InsTypeSingleSelectableFields {
    includeAllInsTypeFields: boolean | null;
    insTypeFields: InsTypeFields;
    version1: VersionType;
}
