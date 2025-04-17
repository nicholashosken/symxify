import { LoanAppTracking } from "./loanAppTracking";

export interface LoanAppTrackingList {
    hasReachedMaximumListSize: boolean | null;
    loanAppTracking: LoanAppTracking[];
}