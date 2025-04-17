import { CtrAccount } from "./ctrAccount";
export interface CtrAccountList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    ctrAccount: CtrAccount[];
    ctrAccountSpecified: boolean;
}
