import { LoanRateChangeFields_2 } from "./loanRateChangeFields_2";

export interface LoanRateChangeUpdateRequest {
    loanRateChangeLocatorValue: number;
    loanRateChangeLocatorValueSpecified: boolean;
    loanRateChangeLocator: number | null;
    loanRateChangeFields: LoanRateChangeFields_2;
}