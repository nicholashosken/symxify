import { LoanAppDefault } from "./loanAppDefault";
export interface LoanAppDefaultList {
    hasReachedMaximumListSize: boolean | null;
    loanAppDefault: LoanAppDefault[];
}
