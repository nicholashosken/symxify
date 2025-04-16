import { LoanAppViewApp } from "./loanAppViewApp";

export interface LoanAppViewAppList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanAppViewApp: LoanAppViewApp[];
    loanAppViewAppSpecified: boolean;
}