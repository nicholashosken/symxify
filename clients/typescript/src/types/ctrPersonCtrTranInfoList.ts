import { CtrPersonCtrTranInfo } from "./ctrPersonCtrTranInfo";

export interface CtrPersonCtrTranInfoList {
    hasReachedMaximumListSize: boolean | null;
    ctrPersonCtrTranInfo: CtrPersonCtrTranInfo[];
}