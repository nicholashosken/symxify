import { CtrPersonCtrTranInfo } from "./ctrPersonCtrTranInfo";

export interface CtrPersonCtrTranInfoList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    ctrPersonCtrTranInfo: CtrPersonCtrTranInfo[];
    ctrPersonCtrTranInfoSpecified: boolean;
}