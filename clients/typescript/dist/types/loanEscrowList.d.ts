import { LoanEscrow } from "./loanEscrow";
export interface LoanEscrowList {
    hasReachedMaximumListSize: boolean | null;
    loanEscrow: LoanEscrow[];
}
