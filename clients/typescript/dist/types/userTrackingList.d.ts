import { UserTracking } from "./userTracking";
export interface UserTrackingList {
    hasReachedMaximumListSize: boolean | null;
    userTracking: UserTracking[];
}
