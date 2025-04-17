import { WarningsFields } from "./warningsFields";
import { VersionType } from "./versionType";

export interface WarningsSelectableFields {
    includeAllWarningsFields: boolean | null;
    warningsFields: WarningsFields;
    version1: VersionType;
}