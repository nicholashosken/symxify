import { WarningsFields } from "./warningsFields";
import { VersionType } from "./versionType";
export interface WarningsSingleSelectableFields {
    includeAllWarningsFields: boolean | null;
    warningsFields: WarningsFields;
    version1: VersionType;
}
