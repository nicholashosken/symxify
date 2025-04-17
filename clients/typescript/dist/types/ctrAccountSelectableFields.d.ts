import { CtrAccountFields } from "./ctrAccountFields";
import { VersionType } from "./versionType";
export interface CtrAccountSelectableFields {
    includeAllCtrAccountFields: boolean | null;
    ctrAccountFields: CtrAccountFields;
    version1: VersionType;
}
