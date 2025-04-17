import { NonAcctNameFields } from "./nonAcctNameFields";
import { NonAcctNameFmHistorySelectableFields } from "./nonAcctNameFmHistorySelectableFields";
import { VersionType } from "./versionType";
export interface NonAcctNameSelectableFields {
    includeAllNonAcctNameFields: boolean | null;
    nonAcctNameFields: NonAcctNameFields;
    nonAcctNameFmHistorySelectableFields: NonAcctNameFmHistorySelectableFields;
    version1: VersionType;
}
