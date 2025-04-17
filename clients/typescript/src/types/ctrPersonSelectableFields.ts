import { CtrPersonFields } from "./ctrPersonFields";
import { CtrPersonCtrTranInfoSelectableFields } from "./ctrPersonCtrTranInfoSelectableFields";
import { VersionType } from "./versionType";

export interface CtrPersonSelectableFields {
    includeAllCtrPersonFields: boolean | null;
    ctrPersonFields: CtrPersonFields;
    ctrPersonCtrTranInfoSelectableFields: CtrPersonCtrTranInfoSelectableFields;
    version1: VersionType;
}