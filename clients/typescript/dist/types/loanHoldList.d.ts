import { LoanHold } from "./loanHold";
export interface LoanHoldList {
    hasReachedMaximumListSize: boolean | null;
    loanHold: LoanHold[];
}
