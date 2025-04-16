import { LoanDefault } from "./loanDefault";
export interface LoanDefaultList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanDefault: LoanDefault[];
    loanDefaultSpecified: boolean;
}
