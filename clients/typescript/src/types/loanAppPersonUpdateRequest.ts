import { LoanAppPersonFields_2 } from "./loanAppPersonFields_2";

export interface LoanAppPersonUpdateRequest {
    loanAppPersonLocatorValue: number;
    loanAppPersonLocatorValueSpecified: boolean;
    loanAppPersonLocator: number | null;
    loanAppPersonFields: LoanAppPersonFields_2;
}