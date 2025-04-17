import { DealerTracking } from "./dealerTracking";

export interface DealerTrackingList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    dealerTracking: DealerTracking[];
    dealerTrackingSpecified: boolean;
}