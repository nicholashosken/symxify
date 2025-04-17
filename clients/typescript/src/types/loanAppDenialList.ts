import { LoanAppDenial } from "./loanAppDenial";

export interface LoanAppDenialList {
    hasReachedMaximumListSize: boolean | null;
    loanAppDenial: LoanAppDenial[];
}