import { LoanApp } from "./loanApp";

export interface LoanAppList {
    hasReachedMaximumListSize: boolean | null;
    loanApp: LoanApp[];
}