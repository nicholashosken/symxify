import { LoanDefault } from "./loanDefault";
export interface LoanDefaultList {
    hasReachedMaximumListSize: boolean | null;
    loanDefault: LoanDefault[];
}
