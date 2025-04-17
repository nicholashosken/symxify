import { LoanAppMisc } from "./loanAppMisc";

export interface LoanAppMiscList {
    hasReachedMaximumListSize: boolean | null;
    loanAppMisc: LoanAppMisc[];
}