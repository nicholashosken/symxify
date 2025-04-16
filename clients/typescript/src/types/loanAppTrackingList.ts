import { LoanAppTracking } from "./loanAppTracking";

export interface LoanAppTrackingList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanAppTracking: LoanAppTracking[];
    loanAppTrackingSpecified: boolean;
}