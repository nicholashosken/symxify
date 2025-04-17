import { CheckFmHistoryFields } from "./checkFmHistoryFields";
import { VersionType } from "./versionType";
export interface CheckFmHistorySelectableFields {
    includeAllCheckFmHistoryFields: boolean | null;
    checkFmHistoryFields: CheckFmHistoryFields;
    version1: VersionType;
}
