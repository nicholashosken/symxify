import { LoanNameFields_2 } from "./loanNameFields_2";

export interface LoanNameUpdateRequest {
    loanNameLocator: number | null;
    loanNameFields: LoanNameFields_2;
}