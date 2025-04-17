import { CheckFields } from "./checkFields";
import { CheckFmHistorySelectableFields } from "./checkFmHistorySelectableFields";
import { VersionType } from "./versionType";
export interface CheckSelectableFields {
    includeAllCheckFields: boolean | null;
    checkFields: CheckFields;
    checkFmHistorySelectableFields: CheckFmHistorySelectableFields;
    version1: VersionType;
}
