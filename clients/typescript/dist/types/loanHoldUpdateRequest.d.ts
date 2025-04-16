import { LoanHoldFields_2 } from "./loanHoldFields_2";
export interface LoanHoldUpdateRequest {
    loanHoldLocatorValue: number;
    loanHoldLocatorValueSpecified: boolean;
    loanHoldLocator: number | null;
    loanHoldFields: LoanHoldFields_2;
}
