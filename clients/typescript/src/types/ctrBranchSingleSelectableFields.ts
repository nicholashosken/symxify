import { CtrBranchFields } from "./ctrBranchFields";
import { VersionType } from "./versionType";

export interface CtrBranchSingleSelectableFields {
    includeAllCtrBranchFields: boolean | null;
    ctrBranchFields: CtrBranchFields;
    version1: VersionType;
}