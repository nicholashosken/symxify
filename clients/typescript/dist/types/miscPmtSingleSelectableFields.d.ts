import { MiscPmtFields } from "./miscPmtFields";
import { VersionType } from "./versionType";
export interface MiscPmtSingleSelectableFields {
    includeAllMiscPmtFields: boolean | null;
    miscPmtFields: MiscPmtFields;
    version1: VersionType;
}
