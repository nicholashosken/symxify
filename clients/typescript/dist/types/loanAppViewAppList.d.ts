import { LoanAppViewApp } from "./loanAppViewApp";
export interface LoanAppViewAppList {
    hasReachedMaximumListSize: boolean | null;
    loanAppViewApp: LoanAppViewApp[];
}
