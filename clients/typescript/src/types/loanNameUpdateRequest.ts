import { LoanNameFields_2 } from "./loanNameFields_2";

export interface LoanNameUpdateRequest {
    loanNameLocatorValue: number;
    loanNameLocatorValueSpecified: boolean;
    loanNameLocator: number | null;
    loanNameFields: LoanNameFields_2;
}