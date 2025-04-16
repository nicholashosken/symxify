import { LoanAppFinanceFields_2 } from "./loanAppFinanceFields_2";

export interface LoanAppFinanceUpdateRequest {
    loanAppFinanceLocatorValue: number;
    loanAppFinanceLocatorValueSpecified: boolean;
    loanAppFinanceLocator: number | null;
    loanAppFinanceFields: LoanAppFinanceFields_2;
}