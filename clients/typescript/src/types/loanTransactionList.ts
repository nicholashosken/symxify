import { LoanTransaction } from "./loanTransaction";

export interface LoanTransactionList {
    hasReachedMaximumListSize: boolean | null;
    loanTransaction: LoanTransaction[];
}