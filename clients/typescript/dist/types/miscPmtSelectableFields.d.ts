import { MiscPmtFields } from "./miscPmtFields";
import { VersionType } from "./versionType";
export interface MiscPmtSelectableFields {
    includeAllMiscPmtFields: boolean | null;
    miscPmtFields: MiscPmtFields;
    version1: VersionType;
}
