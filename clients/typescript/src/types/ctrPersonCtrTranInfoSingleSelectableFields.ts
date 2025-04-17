import { CtrPersonCtrTranInfoFields } from "./ctrPersonCtrTranInfoFields";
import { VersionType } from "./versionType";

export interface CtrPersonCtrTranInfoSingleSelectableFields {
    includeAllCtrPersonCtrTranInfoFields: boolean | null;
    ctrPersonCtrTranInfoFields: CtrPersonCtrTranInfoFields;
    version1: VersionType;
}