import { LoanAppEscrow } from "./loanAppEscrow";

export interface LoanAppEscrowList {
    hasReachedMaximumListSize: boolean | null;
    loanAppEscrow: LoanAppEscrow[];
}