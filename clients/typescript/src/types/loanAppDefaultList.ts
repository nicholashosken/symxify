import { LoanAppDefault } from "./loanAppDefault";

export interface LoanAppDefaultList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanAppDefault: LoanAppDefault[];
    loanAppDefaultSpecified: boolean;
}