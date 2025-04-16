import { ShareTracking } from "./shareTracking";
export interface ShareTrackingList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    shareTracking: ShareTracking[];
    shareTrackingSpecified: boolean;
}
