import { LoanHold } from "./loanHold";
export interface LoanHoldList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanHold: LoanHold[];
    loanHoldSpecified: boolean;
}
