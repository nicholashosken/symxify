import { LoanAppMisc } from "./loanAppMisc";
export interface LoanAppMiscList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanAppMisc: LoanAppMisc[];
    loanAppMiscSpecified: boolean;
}
