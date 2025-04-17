import { LoanTracking } from "./loanTracking";

export interface LoanTrackingList {
    hasReachedMaximumListSize: boolean | null;
    loanTracking: LoanTracking[];
}