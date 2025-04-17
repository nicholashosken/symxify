import { CtrFields } from "./ctrFields";
import { VersionType } from "./versionType";
export interface CtrSingleSelectableFields {
    includeAllCtrFields: boolean | null;
    ctrFields: CtrFields;
    version1: VersionType;
}
