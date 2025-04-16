import { LoanAppEscrowFields_2 } from "./loanAppEscrowFields_2";

export interface LoanAppEscrowUpdateRequest {
    loanAppEscrowLocatorValue: number;
    loanAppEscrowLocatorValueSpecified: boolean;
    loanAppEscrowLocator: number | null;
    loanAppEscrowFields: LoanAppEscrowFields_2;
}