import { LoanHoldFields_2 } from "./loanHoldFields_2";

export interface LoanHoldUpdateRequest {
    loanHoldLocator: number | null;
    loanHoldFields: LoanHoldFields_2;
}