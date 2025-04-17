import { MiscFields } from "./miscFields";
import { VersionType } from "./versionType";
export interface MiscSelectableFields {
    includeAllMiscFields: boolean | null;
    miscFields: MiscFields;
    version1: VersionType;
}
