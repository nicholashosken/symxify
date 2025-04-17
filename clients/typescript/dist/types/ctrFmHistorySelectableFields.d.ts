import { CtrFmHistoryFields } from "./ctrFmHistoryFields";
import { VersionType } from "./versionType";
export interface CtrFmHistorySelectableFields {
    includeAllCtrFmHistoryFields: boolean | null;
    ctrFmHistoryFields: CtrFmHistoryFields;
    version1: VersionType;
}
