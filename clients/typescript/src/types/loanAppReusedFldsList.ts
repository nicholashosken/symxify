import { LoanAppReusedFlds } from "./loanAppReusedFlds";

export interface LoanAppReusedFldsList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanAppReusedFlds: LoanAppReusedFlds[];
    loanAppReusedFldsSpecified: boolean;
}