import { Tracking } from "./tracking";

export interface TrackingList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    tracking: Tracking[];
    trackingSpecified: boolean;
}