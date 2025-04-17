import { CtrBranch } from "./ctrBranch";

export interface CtrBranchList {
    hasReachedMaximumListSize: boolean | null;
    ctrBranch: CtrBranch[];
}