import { LoanTransaction } from "./loanTransaction";

export interface LoanTransactionList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanTransaction: LoanTransaction[];
    loanTransactionSpecified: boolean;
}