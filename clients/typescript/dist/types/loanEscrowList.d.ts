import { LoanEscrow } from "./loanEscrow";
export interface LoanEscrowList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanEscrow: LoanEscrow[];
    loanEscrowSpecified: boolean;
}
