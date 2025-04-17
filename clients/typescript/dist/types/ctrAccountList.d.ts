import { CtrAccount } from "./ctrAccount";
export interface CtrAccountList {
    hasReachedMaximumListSize: boolean | null;
    ctrAccount: CtrAccount[];
}
