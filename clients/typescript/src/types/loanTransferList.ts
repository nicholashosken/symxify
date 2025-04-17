import { LoanTransfer } from "./loanTransfer";

export interface LoanTransferList {
    hasReachedMaximumListSize: boolean | null;
    loanTransfer: LoanTransfer[];
}