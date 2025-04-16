import { LoanAppEscrow } from "./loanAppEscrow";

export interface LoanAppEscrowList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanAppEscrow: LoanAppEscrow[];
    loanAppEscrowSpecified: boolean;
}