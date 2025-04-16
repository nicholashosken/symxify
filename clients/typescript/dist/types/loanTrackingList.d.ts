import { LoanTracking } from "./loanTracking";
export interface LoanTrackingList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanTracking: LoanTracking[];
    loanTrackingSpecified: boolean;
}
