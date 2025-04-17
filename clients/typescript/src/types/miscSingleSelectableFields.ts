import { MiscFields } from "./miscFields";
import { VersionType } from "./versionType";

export interface MiscSingleSelectableFields {
    includeAllMiscFields: boolean | null;
    miscFields: MiscFields;
    version1: VersionType;
}