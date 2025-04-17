import { FmHistoryFields } from "./fmHistoryFields";
import { VersionType } from "./versionType";
export interface FmHistorySingleSelectableFields {
    includeAllFmHistoryFields: boolean | null;
    fmHistoryFields: FmHistoryFields;
    version1: VersionType;
}
