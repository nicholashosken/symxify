import { DealerTracking } from "./dealerTracking";
export interface DealerTrackingList {
    hasReachedMaximumListSize: boolean | null;
    dealerTracking: DealerTracking[];
}
