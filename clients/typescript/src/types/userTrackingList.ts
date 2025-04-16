import { UserTracking } from "./userTracking";

export interface UserTrackingList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    userTracking: UserTracking[];
    userTrackingSpecified: boolean;
}