import { ExternalLoanTracking } from "./externalLoanTracking";

export interface ExternalLoanTrackingList {
    hasReachedMaximumListSize: boolean | null;
    externalLoanTracking: ExternalLoanTracking[];
}