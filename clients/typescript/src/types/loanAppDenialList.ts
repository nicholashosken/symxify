import { LoanAppDenial } from "./loanAppDenial";

export interface LoanAppDenialList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanAppDenial: LoanAppDenial[];
    loanAppDenialSpecified: boolean;
}