import { Tracking } from "./tracking";

export interface TrackingList {
    hasReachedMaximumListSize: boolean | null;
    tracking: Tracking[];
}