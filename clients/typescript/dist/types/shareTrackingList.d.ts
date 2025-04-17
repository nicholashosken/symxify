import { ShareTracking } from "./shareTracking";
export interface ShareTrackingList {
    hasReachedMaximumListSize: boolean | null;
    shareTracking: ShareTracking[];
}
