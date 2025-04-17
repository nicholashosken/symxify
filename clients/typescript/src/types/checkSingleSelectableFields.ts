import { CheckFields } from "./checkFields";
import { VersionType } from "./versionType";

export interface CheckSingleSelectableFields {
    includeAllCheckFields: boolean | null;
    checkFields: CheckFields;
    version1: VersionType;
}