import { Loan } from "./loan";

export interface LoanList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loan: Loan[];
    loanSpecified: boolean;
}