import { FmHistoryFields } from "./fmHistoryFields";
import { VersionType } from "./versionType";

export interface FmHistorySelectableFields {
    includeAllFmHistoryFields: boolean | null;
    fmHistoryFields: FmHistoryFields;
    version1: VersionType;
}