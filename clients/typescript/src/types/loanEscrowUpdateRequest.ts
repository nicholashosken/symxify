import { LoanEscrowFields_2 } from "./loanEscrowFields_2";

export interface LoanEscrowUpdateRequest {
    loanEscrowLocatorValue: number;
    loanEscrowLocatorValueSpecified: boolean;
    loanEscrowLocator: number | null;
    loanEscrowFields: LoanEscrowFields_2;
}