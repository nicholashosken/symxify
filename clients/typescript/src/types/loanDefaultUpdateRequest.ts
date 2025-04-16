import { LoanDefaultFields_2 } from "./loanDefaultFields_2";

export interface LoanDefaultUpdateRequest {
    loanDefaultLoanTypeValue: number;
    loanDefaultLoanTypeValueSpecified: boolean;
    loanDefaultLoanType: number | null;
    loanDefaultFields: LoanDefaultFields_2;
}