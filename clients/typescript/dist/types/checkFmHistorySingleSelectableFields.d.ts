import { CheckFmHistoryFields } from "./checkFmHistoryFields";
import { VersionType } from "./versionType";
export interface CheckFmHistorySingleSelectableFields {
    includeAllCheckFmHistoryFields: boolean | null;
    checkFmHistoryFields: CheckFmHistoryFields;
    version1: VersionType;
}
