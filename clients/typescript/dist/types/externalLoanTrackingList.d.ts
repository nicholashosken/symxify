import { ExternalLoanTracking } from "./externalLoanTracking";
export interface ExternalLoanTrackingList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    externalLoanTracking: ExternalLoanTracking[];
    externalLoanTrackingSpecified: boolean;
}
