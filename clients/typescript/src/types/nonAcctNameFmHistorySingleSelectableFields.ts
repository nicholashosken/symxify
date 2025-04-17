import { NonAcctNameFmHistoryFields } from "./nonAcctNameFmHistoryFields";
import { VersionType } from "./versionType";

export interface NonAcctNameFmHistorySingleSelectableFields {
    includeAllNonAcctNameFmHistoryFields: boolean | null;
    nonAcctNameFmHistoryFields: NonAcctNameFmHistoryFields;
    version1: VersionType;
}