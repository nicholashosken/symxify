import { LoanTransfer } from "./loanTransfer";

export interface LoanTransferList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanTransfer: LoanTransfer[];
    loanTransferSpecified: boolean;
}