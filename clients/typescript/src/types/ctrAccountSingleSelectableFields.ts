import { CtrAccountFields } from "./ctrAccountFields";
import { VersionType } from "./versionType";

export interface CtrAccountSingleSelectableFields {
    includeAllCtrAccountFields: boolean | null;
    ctrAccountFields: CtrAccountFields;
    version1: VersionType;
}