import { LoanTrackingFields_2 } from "./loanTrackingFields_2";
export interface LoanTrackingUpdateRequest {
    loanTrackingLocatorValue: number;
    loanTrackingLocatorValueSpecified: boolean;
    loanTrackingLocator: number | null;
    loanTrackingFields: LoanTrackingFields_2;
}
