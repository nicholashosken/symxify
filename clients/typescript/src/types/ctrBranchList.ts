import { CtrBranch } from "./ctrBranch";

export interface CtrBranchList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    ctrBranch: CtrBranch[];
    ctrBranchSpecified: boolean;
}