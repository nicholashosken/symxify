import { CtrPersonFields } from "./ctrPersonFields";
import { VersionType } from "./versionType";
export interface CtrPersonSingleSelectableFields {
    includeAllCtrPersonFields: boolean | null;
    ctrPersonFields: CtrPersonFields;
    version1: VersionType;
}
