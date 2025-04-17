import { CtrPersonCtrTranInfoFilter } from "./ctrPersonCtrTranInfoFilter";
import { VersionType } from "./versionType";

export interface CtrPersonChildrenFilter {
    ctrPersonCtrTranInfoFilter: CtrPersonCtrTranInfoFilter;
    version1: VersionType;
}