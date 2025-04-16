import { LoanApp } from "./loanApp";

export interface LoanAppList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanApp: LoanApp[];
    loanAppSpecified: boolean;
}