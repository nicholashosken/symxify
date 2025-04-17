import { CtrBranchFields } from "./ctrBranchFields";
import { VersionType } from "./versionType";

export interface CtrBranchSelectableFields {
    includeAllCtrBranchFields: boolean | null;
    ctrBranchFields: CtrBranchFields;
    version1: VersionType;
}